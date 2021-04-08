/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

function getLeadingComments(context = { options: [] }) {
    const {
        options: [{
            description = 'React based Progressive Web App',
            author = '',
            license = 'OSL-3.0',
            packageName = 'Powered by Winniepukki Guidelines',
        } = {}]
    } = context;

    return `/**
* ${description}
*
* Copyright © ${author}. All rights reserved.
* See LICENSE for license details.
*
* @license ${license}
* @package ${packageName}
*/
`;
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
