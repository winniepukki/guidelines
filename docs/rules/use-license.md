# License header provider for your applications

ESLint rule to ensure that files begin with a given license comment.

Often you will want to have a copyright notice at the top of every file. This ESLint plugin checks that the first comment in every file has the contents defined in the rule settings.

## Rule Details

The rule takes an optional settings object
```js
{
    description: '',
    author: '',
    license: '',
    package: ''    
}
```

### Examples of **correct** code for this rule
```js
'winniepukki-guidelines/use-license': ['error']
```

If no arguments are passed as options, the default license comment will be used
```js
/**
 * React based Progressive Web App
 *
 * Copyright © All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package Powered by Winniepukki Guidelines
 */
```

Passing options has never been as easy
```js
'winniepukki-guidelines/use-license': ['error', {
  author: 'Aleksandrs',
  description: 'My awesome project!'
}]
```
