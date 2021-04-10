/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const avoidPattern = [
    'foo', 'bar', 'abc', 'value', 'temp', 'num'
];

function getAvoidPatternOptions(context = { options: [] }) {
    const [customAvoidOptions] = context.options;

    return [...avoidPattern, ...customAvoidOptions];
}

module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        },
        fixable: 'code'
    },
    create: (context) => ({
        Identifier(node) {
            const pattern = getAvoidPatternOptions(context);
            if (pattern.indexOf(node.name) > -1) {
                context.report({
                    node,
                    messageId: 'avoidName',
                    data: {
                        name: node.name,
                    },
                    fix: function (fixer) {
                        return fixer.replaceText(node, 'tempMagic');
                    }
                });
            }
        }
    })
};
