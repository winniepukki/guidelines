# License header provider for your applications

ESLint rule to ensure that files begin with a given license comment.

Often you will want to have a copyright notice at the top of every file. This ESLint plugin checks that the first comment in every file has the license header defined in the rule settings.

## Rule Details

This rule takes one optional object argument of type object:
```js
{
    description: '',
    author: '',
    license: '',
    package: ''    
}
```

### Succeed
```js
'winniepukki-guidelines/use-license': ['error', {
    author: 'winniepukki',
    description: 'My awesome project!'
}]
```

If no arguments are passed as options, the default license template will be used:
```js
/**
 * Progressive Web App
 * Copyright © All rights reserved.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 */
```
