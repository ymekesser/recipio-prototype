module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    
    "parserOptions": {
        "sourceType": "module"
    },

    "extends": "eslint:recommended",
    
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"]
    },

    "globals": {
        "require": false
    }
}