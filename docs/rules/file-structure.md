# File structure must comply to the strict guidelines

File structure must comply to the following guidelines:
- File structure must be flat, meaning that nesting components inside of other components is prohibited.
- Extending root directory src with custom folders is prohibited.
- File structure regulations imply having files with certain postfixes for certain functionality parts.

Allowed postfixes are:
- Component and route: `.component`, `.container`, `.style`
- Store: `.action`, `.dispatcher`, `.reducer`
- Query: `.query`
- Style, type: `none`

## Rule Details

This rule takes no arguments.

### Succeed
```js
// in src/app/store/Wishlist/Wishlist.reducer.js
class WishlistReducer { /** ... */ }

// in src/app/query/Klarna/Klarna.query.js
class KlarnaQuery { /** ... */ }
```

### Fail
```js
// in src/app/store/Wishlist/Wishlist.component.js
class WishlistComponent { /** ... */ }

// in src/app/store/Klarna/Klarna.query.js
class KlarnaQuery { /** ... */ }
```
