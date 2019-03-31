var fs = require('fs');
var path = require('path');
var bibtex = require('bibtex-parse-js')
var converter = require('latex-to-unicode-converter');

//
// ARGS
//

if ( process.argv.length < 4 ) {
    console.error('Usage: bib2hugo inputBib outputFolder [configJSON]');
    process.exit();
}

var input = process.argv[2];
var outputFolder = process.argv[3];

try {
    fs.accessSync(outputFolder);
} catch (e) {
    fs.mkdirSync(outputFolder);
}

var config = {};
if ( process.argv[4] ) {
    try {
        config = JSON.parse(fs.readFileSync(process.argv[4]).toString());
    } catch (e) {
        console.log('Unable to open config file <' + process.argv[4] + '>, continuing with defaults...');
    }
}

var params = Object.assign({}, {
    pdfLink: 'pdf',
    pptLink: 'presentation',
    typeMap: {
        article: '0',
        incollection: '1',
        inproceedings: '2',
        phdthesis: '3',
        mastersthesis: '4',
        proceedings: '5',
        book: '6',
        techreport: '7',
        misc: '8'
    }
}, config);



//
// SHARED STUFF
//

function convert(val) {
    return converter.convertLaTeX({
        onError: function(error, latex) {
            return latex;
        }
    }, val);
}

function str(val) {
    var ret = val || '';
    ret = ret.replace(/\\&/g, '&');
    ret = ret.replace(/\\%/g, '%');
    ret = ret.replace(/\\#/g, '#');
    ret = ret.replace(/--/g, '–');
    ret = convert(ret);
    return ret;
}

function authorize(name) {
    return str(name.split(',').map(function(e) { return e.trim(); }).reverse().join(' '));
}

function abstractize(val) {
    return str(val).replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/"/g, '\\"');
}

function findFile(folder, needle) {
    var pattern = new RegExp( '^(.*[^a-zA-z0-9])?' + needle + '([^a-zA-Z0-9].*)?$' );
    var result = null;
    try {
        fs.readdirSync(folder).forEach(function(file) {
            if ( file.match(pattern) ) {
                result = file;
                return false;
            }
        });
    } catch (e) {
        console.error('Unable to open folder <' + folder + '>');
    }
    return result;
}

var months = {
    'jan': '01',
    'feb': '02',
    'mar': '03',
    'apr': '04',
    'may': '05',
    'jun': '06',
    'jul': '07',
    'aug': '08',
    'sep': '09',
    'oct': '10',
    'nov': '11',
    'dec': '12',
}

//
// PROCESSING
//

var bib = bibtex.toJSON(fs.readFileSync(input).toString());
var count = 0;

bib.forEach(function(entry) {

    var key = entry.citationKey;
    var type = entry.entryType.toLowerCase();
    

    // FILTERING

    if ( type == 'comment' ) return;

    if ( params.whitelist && params.whitelist.indexOf(key) === -1 ) {
        console.log('Whitelist filtered: ' + key);
        return;
    }

    if ( params.blacklist && params.blacklist.indexOf(key) !== -1 ) {
        console.log('Blacklist filtered: ' + key);
        return;
    }

    console.log('Processing: ' + key);
    count++;


    // BASIC OUTPUT

    var output = "+++\n";
    output += 'title = "' + str(entry.entryTags.title) + '"\n';
    var authorField = (type == 'book' || type == 'proceedings') ? 'editor' : 'author';
    var authors = entry.entryTags[authorField].split('and').map(function(name) {
        return authorize(name);
    });
    output += 'authors = ' + JSON.stringify(authors) + '\n';
    output += 'abstract = "' + abstractize(entry.entryTags.abstract || '') + '"\n';    
    output += 'date = "' + entry.entryTags.year + '-' + (months[entry.entryTags.month] || '01') + '-01"\n';


    // LINKS

    if ( entry.entryTags.url ) {
        output += 'links = [{name = "Online", url = "' + entry.entryTags.url + '"}]\n';
    }

    if ( params.pdfFolder ) {
        var pdf = findFile(params.pdfFolder, key);
        if ( pdf ) {
            console.log('PDF link: ' + pdf);
            output += 'url_pdf = "' + params.pdfLink + '/' + pdf + '"\n';
        }
    }

    if ( params.pptFolder ) {
        var ppt = findFile(params.pptFolder, key);
        if ( ppt ) {
            console.log('PPT link: ' + ppt);
            output += 'url_slides = "' + params.pptLink + '/' + ppt + '"\n';
        }
    }


    // TYPE DEPENDENT OUTPUT

    var pagePlural = entry.entryTags.pages && entry.entryTags.pages.indexOf('-') !== -1 ? 's' : '';

    if ( type == 'inproceedings' ) {
        output += 'publication = "' +
                  str(entry.entryTags.booktitle) + ', ' +
                  str(entry.entryTags.address) + ', ';
        if ( entry.entryTags.pages ) {
            output += 'Page' + pagePlural + ' ' + str(entry.entryTags.pages) + '"\n';
        } else {
            // if there is no "pages" for a conference paper, there'd better be an explanation
            output += entry.entryTags.note + '"\n';
        }


    } else if ( type == 'article' ) {
        output += 'publication = "' +
                  str(entry.entryTags.journal) + ', ' +
                  str(entry.entryTags.volume) +
                  // html entities for left/right parens to avoid incorrect markdownification
                  (entry.entryTags.number ? '&#40;' + str(entry.entryTags.number) + '&#41;' : '' ) + ':' +
                  str(entry.entryTags.pages) + '"\n';


    } else if ( type == 'incollection' ) {
        output += 'publication = "' +
                  str(entry.entryTags.booktitle) + ', ' +
                  'Page' + pagePlural + ' ' + str(entry.entryTags.pages) + '"\n';


    } else if ( type == 'book' ) {
        output += 'publication = "' +
                  str(entry.entryTags.series) + ', ' +
                  str(entry.entryTags.volume) +
                  // html entities for left/right parens to avoid incorrect markdownification
                  (entry.entryTags.number ? '&#40;' + str(entry.entryTags.number) + '&#41;' : '' ) + '"\n';
    }

    var index = params.typeMap[type] || params.typeMap['misc'] || '0';
    output += 'publication_types = ["' + index + '"]\n';


    // BiBTeX OUTPUT

    var max = Object.keys(entry.entryTags).reduce(function(a, b) {
        return Math.max(a, b.length);
    }, 0);

    output += '+++\n\n';
    output += 'BibTeX:\n'
    output += '```tex\n'
    output += '@' + entry.entryType + '{' + key + ',\n'
    Object.keys(entry.entryTags).forEach(function(field) {
        if ( field == 'abstract' ) return;
        if ( field == 'month' ) {
            output += '    ' + field.padEnd(max + 1) + '= ' + entry.entryTags[field] + ',\n'
        } else {
            output += '    ' + field.padEnd(max + 1) + '= {' + entry.entryTags[field] + '},\n'
        }
    });
    output += '}\n';
    output += '```\n';

    
    // DONE

    fs.writeFileSync(path.join(outputFolder, key + '.md'), output);
});

console.log('Done, processed ' + count + ' entries.');