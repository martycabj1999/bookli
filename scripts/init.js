const nodemon = require('nodemon');
const nunjucks = require('nunjucks');
const path = require('path');
const fsSync = require('fs');
const fs = fsSync.promises;

const fixture = require('./fixture.js');

const serverPath = path.resolve(__dirname, '..', 'server', 'src');
const clientPath = path.resolve(__dirname, '..', 'client');
const viewsPath = path.resolve(clientPath, 'views');
const tmplsPath = path.resolve(clientPath, 'js', 'partials');

function compileTemplate(name, template, dest) {
    const tmpl = nunjucks.precompileString(template, { name });

    return fs.writeFile(dest, tmpl);
}

const deleteFolderRecursive = function (path) {
    fsSync.readdirSync(path).forEach(function (file) {
        const curPath = path + '/' + file;
        if (fsSync.lstatSync(curPath).isDirectory()) {
            // recurse
            deleteFolderRecursive(curPath);
        } else {
            // delete file
            fsSync.unlinkSync(curPath);
        }
    });
    fsSync.rmdirSync(path);
};

async function compileTemplates() {
    try {
        const exist = fsSync.statSync(tmplsPath);
        if (exist) {
            deleteFolderRecursive(tmplsPath);
        }
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }
    } finally {
        fsSync.mkdirSync(tmplsPath);
    }

    const files = fsSync.readdirSync(viewsPath);

    const promises = files
        .filter(fileName => !fileName.startsWith('_'))
        .map(function (fileName) {
            const filePath = path.resolve(viewsPath, fileName);
            const tmplPath = path.resolve(
                tmplsPath,
                fileName.replace('html', 'js')
            );
            return fs.readFile(filePath, 'utf8').then(function (tmplContent) {
                return compileTemplate(fileName, tmplContent, tmplPath);
            });
        });

    return Promise.all(promises);
}

function startDevServer() {
    nodemon({
        script: path.resolve(serverPath, 'index.js'),
        ext: 'js html css',
    })
        .on('log', ({ colour }) => {
            console.log(colour);
        })
        .on('restart', changedFiles => {
            const isTemplate = changedFiles.some(fileName => {
                return fileName.includes('views') && fileName.includes('.html');
            });

            if (isTemplate) {
                compileTemplates();
            }
        });
}

async function start() {
    await fixture.initBooks();
    await compileTemplates();
    startDevServer();
}

start();
