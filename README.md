# Winniepukki Guidelines

![GitHub package.json version](https://img.shields.io/github/package-json/v/winniepukki/guidelines)

Eslint plugin for PWA development. **Heads-up!** Use together with [Winniepukki Guardian](https://www.npmjs.com/package/eslint-config-winniepukki-guardian) for the best experience

## Installation

Ensure that you have ESLint installed [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Install the package itself:

```bash
npm i -D eslint-plugin-winniepukki-guidelines
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-winniepukki-guidelines` globally.

## Usage

Add `winniepukki-guidelines` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "winniepukki-guidelines"
    ]
}
```


Then configure the rules you want to use under the rules section

```json
{
    "rules": {
        "winniepukki-guidelines/rule-name": 2
    }
}
```
