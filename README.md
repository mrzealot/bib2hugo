# bib2hugo
Compile publication pages fit for the Hugo Academic theme from a .bib source

###Install:

```
npm install -g webpack nexe
npm install

# these steps are needed until the latex-to-unicode-converter
# incorporates some new fixes into its release
cd node_modules/latex-to-unicode-converter
npm install
npm run build:ts
cd ../..

npm run build
```

The result is a standalone bib2hugo.bundle.js and bib2hugo.exe.
...or just use the dist folder.

###Useage:

```
bib2hugo inputBib outputFolder [configJSON]
```

Configurable option examples are all in the committed config.json.
