/**
 * @package Winniepukki Guidelines
 * @fileoverview Static AST checker for accessibility rules on PWA projects
 * @author Aleksandrs Bogackins <a.bogackins@gmail.com>
 */

const path = require('path');
const requireIndex = require('requireindex');

module.exports.rules = requireIndex(path.join(__dirname, 'rules'));
