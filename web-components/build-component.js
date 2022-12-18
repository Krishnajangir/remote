const fs = require('fs-extra');
const concat = require('concat');

let build = async() => {
    const files = [
        './dist/remote/runtime.js',
        './dist/remote/polyfills.js',
        './dist/remote/scripts.js',
        './dist/remote/main.js'
    ];

    let sourceMapFiles = [
        './dist/remote/runtime.js.map',
        './dist/remote/polyfills.js.map',
        './dist/remote/scripts.js.map',
        './dist/remote/main.js.map'
    ];

    await fs.ensureDir('dist/remote/wc');
    await concat(files, 'dist/remote/wc/main.js')

    sourceMapFiles = await sourceMapFiles.filter(async(path) => {
        const exist = await fs.pathExists(path);
        return exist;
    })

    sourceMapFiles.length > 0 && await concat(sourceMapFiles, 'dist/remote/wc/main.js.map')
}
build();