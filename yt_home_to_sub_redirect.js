// ==UserScript==
// @name         YouTube Homepage to Subscriptions Redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects from YouTube's homepage to your subscriptions
// @author       Alkonosttt
// @match        https://www.youtube.com/
// @grant        window.location.replace
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const subscriptionsUrl = 'https://www.youtube.com/feed/subscriptions';
    const currentUrl = window.location.href;

    const youtubeHomepageRegex = /^https:\/\/(www\.)?youtube\.com\/?(?:\?.*)?$/;

    if (youtubeHomepageRegex.test(currentUrl)) {
        console.log('Redirecting from YouTube homepage to subscriptions...');
        window.location.replace(subscriptionsUrl);
    }
})();