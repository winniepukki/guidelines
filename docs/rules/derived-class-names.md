# Class name must match the name of the file it is declared in

Expected class names for all files **other than components** are `name + prefix` (e.g. class inside of `CategoryPage.container.js` file must be called `CategoryPageContainer` and not otherwise).

## Rule Details

This rule takes no arguments.

### Succeed
```js
// in MyComponent.container.js
class MyComponentContainer { /** ... */ }

// in Hello.component.js
class Hello { /** ... */ }
```

### Fail
```js
// in MyComponent.container.js
class Abc { /** ... */ }

// in Hello.component.js
class HelloComponent { /** ... */ }
```
