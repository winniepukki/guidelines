/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = {
    meta: {
        messages: {
            derivedNames: 'Class name must match the name of the file it is declared in'
        },
        fixable: 'code'
    },
    create: (context) => ({
        ClassDeclaration(node) {
            const filePath = context.getFilename();
            const exploded = filePath.split('/');
            const [fileName, postfix] = exploded[exploded.length - 1].split('.');
            if (fileName === 'index' && postfix === 'js') {
                return;
            }

            const expectedClassName = capitalize(fileName)
                + (['js', 'component'].includes(postfix)
                    ? ''
                    : capitalize(postfix));
            const actualClassName = node.id.name;

            if (expectedClassName !== actualClassName) {
                const { id: { loc } } = node;
                context.report({
                    loc,
                    messageId: 'derivedNames',
                    fix: fixer => fixer.replaceText(node.id, expectedClassName)
                });
            }
        }
    })
};
