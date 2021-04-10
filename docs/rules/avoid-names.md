# There is a prepared list of names for developers to avoid

Dedicated research has been performed on what namings should be avoided for the best code quality and further development experience. The idea behind this is to make the whole code coherent and readable

## Rule Details

ESLint will replace inappropriate values with `magicTemp` that will be easier to look up in the code. Examples of **incorrect** values for this rule:
`foo, bar, abc, value, temp, num`

The rule takes an optional array of values

### Examples of **correct** code for this rule
```js
'winniepukki-guidelines/avoid-names': ['x', 'y', 'z']
```

If no arguments are passed as options, the default values will be used
