// ==UserScript==
// @name         YouTube Homepage to Subscriptions Redirect
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirects from YouTube's homepage to your subscriptions
// @author       Alkonosttt
// @match        https://www.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const subscriptionsUrl = 'https://www.youtube.com/feed/subscriptions';
    const homepageRegex = /^https:\/\/(www\.)?youtube\.com\/(\?[^\/]*)?$/;

    if (homepageRegex.test(window.location.href)) {
        console.log('Redirecting to subscriptions...');
        window.location.replace(subscriptionsUrl);
    }
})();
