/**
 * @package Winniepukki Guidelines
 * @fileoverview Enforces files to begin with a given license comment
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

function getLeadingComments(context = { options: [] }) {
    const {
        options: [{
            description = '',
            author = '',
            license = '',
            packageName = '',
        } = {}] = []
    } = context;

    const message = [
        '/**\n',
        description ? `* ${description}\n` : `* Progressive Web App\n`,
        `* Copyright ©${author ? ' ' + author + '.' : ''} All rights reserved.\n`,
        license ? `*\n* @license ${license}\n` : '*\n* @license OSL-3.0 (Open Software License ("OSL") v. 3.0)\n',
        packageName ? `* @package ${packageName}\n` : '',
        '*/\n'
    ].join('');

    return message;
}

module.exports = {
    meta: {
        messages: {
            licenseComment: 'Please provide license comments!'
        },
        fixable: 'code'
    },
    create: (context) => ({
        Program(node) {
            const { comments } = node;
            if (!comments.find(comment => comment.value.includes('@license'))) {
                context.report({
                    node,
                    messageId: 'licenseComment',
                    fix: fixer => fixer.insertTextBefore(node, getLeadingComments(context))
                });
            }
        }
    }),
};
