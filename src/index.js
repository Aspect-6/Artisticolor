module.exports = {
    ...require('firebasedb/exports'),    

    //Functions
    user: require('lib/functions/user'),    

    //Shorten code
    getElement: require('utils/shorten/getElement'),

    //Globalize exported data
    init() { for (const key in module.exports) global[key] = module.exports[key] }
}