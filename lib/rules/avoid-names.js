/**
 * @package Winniepukki Guidelines
 * @fileoverview Enforces a list of namings for developers to avoid
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const avoidPattern = [
    'foo', 'bar', 'abc', 'value', 'temp', 'num'
];

function getAvoidPatternOptions(context = { options: [] }) {
    const { options: [customAvoidOptions = ''] = [] } = context;

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
            if (pattern.includes(node.name)) {
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
