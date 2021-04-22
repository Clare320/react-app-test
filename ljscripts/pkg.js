const path = require('path');
const fs = require('fs');
const compressing = require('compressing');

const rootDir = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(rootDir, relativePath);

const zip = () => {
    let name = 'test';
    if (name.startWith('/')) {
        name = name.replace('/', '');
    }
    console.log(`开始压缩:${name}`);

    const sourceDirPath = resolvePath('/src');
    const destinationPath = `${resolvePath('pkgs')}/libs.zip`;

    compressing.zip.compressDir(sourceDirPath, destinationPath)
        .then(() => {
            console.log(`压缩结束：${name}`);
        })
        .catch(error => {
            console.log(`压缩失败：${name}`);
        });
};

const copy = () => {
    fs.copyFileSync()
}