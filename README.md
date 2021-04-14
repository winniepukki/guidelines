# Winniepukki Guidelines

![GitHub package.json version](https://img.shields.io/github/package-json/v/winniepukki/guidelines)

Static AST checker for accessibility rules on PWA projects **Heads-up!** Use together with [Winniepukki Guardian](https://www.npmjs.com/package/eslint-config-winniepukki-guardian) for the best experience

## Installation
Ensure that you have ESLint installed [ESLint](http://eslint.org):
```bash
npm i -D eslint
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


Then configure the rules you want to use under the rules section:
```json
{
    "rules": {
        "winniepukki-guidelines/rule-name": 2
    }
}
```

## Supported rules
- [avoid-names](https://github.com/winniepukki/guidelines/blob/main/docs/rules/avoid-names.md): Enforces a list of namings for developers to avoid
- [derived-class-names](https://github.com/winniepukki/guidelines/blob/main/docs/rules/derived-class-names.md): Enforces class name to match the name of the file it is declared in
- [use-license](https://github.com/winniepukki/guidelines/blob/main/docs/rules/use-license.md): Enforces files to begin with a given license comment
