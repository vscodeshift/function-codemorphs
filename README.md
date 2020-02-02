# @vscodeshift/function-codemorphs

[![CircleCI](https://circleci.com/gh/vscodeshift/function-codemorphs.svg?style=svg)](https://circleci.com/gh/vscodeshift/function-codemorphs)
[![Coverage Status](https://codecov.io/gh/vscodeshift/function-codemorphs/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/function-codemorphs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.function-codemorphs)

Commands for refactoring functions

# Convert arrow function body to block statement

### Before

```js
const foo = () => 'foo!'
```

Position cursor anywhere in the arrow function and then run the
**Convert arrow function body to block statement** command.

### After

```js
const foo = () => {
  return 'foo!'
}
```

# Convert arrow function body to expression

The inverse of the above. The function body must consist only of
a `return` statement or this will error out.

### Before

```js
const foo = () => {
  return 'foo!'
}
```

Position cursor anywhere in the arrow function and then run the
**Convert arrow function body to expression** command.

### After

```js
const foo = () => 'foo!'
```
