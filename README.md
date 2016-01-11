[![Dependency Status](https://david-dm.org/dnode/dpassword.svg)](https://david-dm.org/dnode/dpassword)
[![devDependency Status](https://david-dm.org/dnode/dpassword/dev-status.svg)](https://david-dm.org/dnode/dpassword#info=devDependencies)

# Example
```javascript
const dpassword = require('dpassword');
dpassword.hash('password', (err, hash) => {
  dpassword.compare('password', hash, (err, valid) => {});
});
```
