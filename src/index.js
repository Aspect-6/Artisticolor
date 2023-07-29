module.exports = {
    //Functions
    user: require('@lib/functions/user'),

    //Shorten code
    getElement: require('@utils/shorten/getElement'),
}

//Globalize exported data
for (const key in module.exports) global[key] = module.exports[key];

if (!location.href.includes('register')) {
    document.body.style.background = 'none'
} //console.log('true')
