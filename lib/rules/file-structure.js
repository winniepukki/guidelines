/**
 * @package Winniepukki Guidelines
 * @fileoverview Enforces file structure to be flat having certain postfixes and
 * prohibit extending root directory src with custom folders
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

function checkFileName(exploded) {
    const fullFileName = exploded[exploded.length - 1];
    // index.js is always OK
    if (fullFileName === 'index.js') {
        return true;
    }

    if (exploded.some(elem => ['style', 'query', 'type', 'util'].includes(elem))) {
        return true;
    }

    const directoryName = exploded[exploded.length - 2];
    const [pureFileName] = fullFileName.split('.');

    // Is OK when file name matches directory name
    return pureFileName === directoryName;
}

function checkPostfix(exploded) {
    const [filename, postfix] = exploded[exploded.length - 1].split('.');

    if (filename === 'index' && postfix === 'js' || filename === 'App' && postfix === 'tsx' || filename === 'App' && postfix === 'js') {
        return false;
    }
    // Check if postfix is expected for the directory
    switch (exploded[0]) {
        case 'component':
        case 'route':
            if (!(['component', 'container', 'style', 'config', 'unstated'].includes(postfix))) {
                return exploded[0];
            }
            break;
        case 'store':
            if (!(['action', 'dispatcher', 'reducer'].includes(postfix))) {
                return exploded[0];
            }
            break;
        case 'query':
            if (!(postfix === 'query')) {
                return exploded[0];
            }
            break;
        case 'style':
            if (!(postfix === 'scss')) {
                return exploded[0];
            }
            break;
        case 'type':
            if (!(postfix === 'js')) {
                return exploded[0];
            }
            break;
        default:
            // no naming convention for util
            // others cases unexpected, ignoring.
            break;
    }

    return false;
}

function checkDepth(exploded) {
    switch (exploded[0]) {
        case 'route':
        case 'component':
        case 'store':
        case 'util':
            return exploded.length <= 3;
        case 'query':
        case 'type':
            return exploded.length <= 2;
        default:
            return true;
    }
}

module.exports = {
    meta: {
        messages: {
            extendingDirectory: 'Extending app directory with custom directories is prohibited.',
            postfix: 'File name should match directory name + postfix (if postfix is needed)',
            nesting: 'Nesting directories is against the principle of flat file structure and is prohobited',
            directory: "Postfix of this file does not comply with the naming convention for the '{{ directory }}' directory"
        }
    },
    create: (context) => ({
        Program(node) {
            const filePath = context.getFilename();
            const pathKey = 'src/app';

            if (filePath.includes(pathKey)) {
                const relativeToApp = filePath.slice(filePath.indexOf(pathKey) + pathKey.length + 1);
                const exploded = relativeToApp.split('/');

                if (!([
                    'component', 'query', 'route', 'store', 'style', 'type', 'util', 'index.js'
                ].includes(exploded[0]))) {
                    context.report({
                        node,
                        messageId: 'extendingDirectory'
                    });
                }

                if (!checkFileName(exploded)) {
                    context.report({
                        node,
                        messageId: 'postfix'
                    });
                }

                if (!checkDepth(exploded)) {
                    context.report({
                        node,
                        messageId: 'nesting'
                    });
                }

                const fileName = exploded[exploded.length - 1];
                if (fileName !== 'index.js' || fileName !== 'App.tsx' || fileName !== 'App.jsx' || fileName !== 'App.js') {
                    const directoryThatDoesNotFit = checkPostfix(exploded);
                    if (directoryThatDoesNotFit) {
                        context.report({
                            node,
                            data: {
                                directory: directoryThatDoesNotFit
                            },
                            messageId: 'directory'
                        });
                    }
                }
            }
        }
    })
};
