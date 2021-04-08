/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const avoidPattern = [
    'foo', 'bar', 'abc', 'value', 'temp', 'num'
];

module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        },
        fixable: 'code'
    },
    create(context) {
        return {
            Identifier(node) {
                if (avoidPattern.indexOf(node.name) > -1) {
                    context.report({
                        node,
                        messageId: 'avoidName',
                        data: {
                            name: node.name,
                        },
                        fix: function(fixer) {
                            return fixer.replaceText(node, 'tempMagic');
                        }
                    });
                }
            }
        };
    }
};
