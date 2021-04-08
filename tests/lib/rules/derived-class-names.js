/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/derived-class-names');

const ruleTester = new RuleTester({ parserOptions: {"ecmaVersion": 2017 }});
ruleTester.run('derived-class-names', rule, {
    valid: [
        {
            code: "class GoodBuy {}"
        }
    ],

    invalid: [
        {
            code: "class Hello {}",
            errors: [{ message: "Unexpected invalid variable." }]
        }
    ]
});