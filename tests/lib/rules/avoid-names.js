/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/avoid-names');

const ruleTester = new RuleTester({ parserOptions: {'ecmaVersion': 2020 }});
ruleTester.run('avoid-names', rule, {
    valid: [{
        code: 'const tempMagic = false;',
    }],
    invalid: [{
        code: 'const foo = false;',
        errors: [{
            messageId: 'avoidName'
        }],
        output: 'const tempMagic = false;'
    }]
});
