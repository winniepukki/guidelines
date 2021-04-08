/**
 * @package Winniepukki Guidelines
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const path = require('path');
const requireIndex = require('requireindex');

module.exports.rules = requireIndex(path.join(__dirname, 'rules'));
