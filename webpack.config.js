'use strict'; 

let path = require('path');


module.exports = {
    mode: 'production',
        watch: true,
        devtool: "source-map",
        entry: {
            index: './src/js/index.js',
            catalog: './src/js/catalog.js',
            about: './src/js/about.js',
            answer: './src/js/answer.js',
            application: './src/js/application.js',
            article: './src/js/article.js',
            blog: './src/js/blog.js',
            cart: './src/js/cart.js',
            single: './src/js/single.js',
            allClubs:'./src/js/allClubs.js',
            contacts: './src/js/contacts.js',
            delyvery: './src/js/contacts.js',
            formCommand: './src/js/formCommand.js',
            howToMakeOrder: './src/js/formCommand.js',
            order: "./src/js/order.js",
            track: './src/js/track.js',
            header: './src/js/header.js',
            mobileHeader: './src/js/mobile-header.js',

        },
        output: {
            filename: '[name].js',
        },

};