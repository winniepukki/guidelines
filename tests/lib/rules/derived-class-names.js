/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/derived-class-names');

const ruleTester = new RuleTester({ parserOptions: {'ecmaVersion': 2020 }});
ruleTester.run('derived-class-names', rule, {
    valid: [{
        code: 'class MyClassContainer {}',
        filename: 'MyClass.container.js'
    }],
    invalid: [{
        code: 'class Goodbye {}',
        filename: 'Goodbye.container.js',
        errors: [{
            messageId: 'derivedNames'
        }],
        output: 'class GoodbyeContainer {}'
    }]
});
