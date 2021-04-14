# A list of namings for developers to avoid

The idea is to make the whole code coherent and readable. ESLint will replace all inappropriate values with `magicTemp` that will be easier to look up in the code. Examples of **incorrect** namings for this rule:
`foo, bar, abc, value, temp, num`

## Rule Details

Options are provided as an optional array of values
```js
'winniepukki-guidelines/avoid-names': ['error', ['x', 'y']]
```

If no arguments are passed as options, the default values will be used
