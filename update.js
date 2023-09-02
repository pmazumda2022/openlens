const fs = require('fs');

const packagejson = require('./lens/open-lens/package.json');

packagejson.build.publish = [{
	url: "https://github.com/pmazumda2022/openlens/releases/download/Latest",
	provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";
packagejson.version = `${packagejson.version}-${process.env.BUILD_ID}`;
packagejson.build.detectUpdateChannel = false;

delete packagejson.scripts.postinstall;

packagejson.copyright = [
    packagejson.copyright,
    '',
    'OpenLens Windows Binary builds @ pmazumda2022/openlens',
    'by Pinak Mazumdar'
]



console.log(`Set build version: ${packagejson.version}`)



fs.writeFileSync('./lens/open-lens/package.json', JSON.stringify(packagejson, null, 2));
