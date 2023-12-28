// ==UserScript==
// @name         Steam Game Search Links
// @namespace    http://tampermonkey.net/
// @version      1.0 reworked
// @description  Add search links for games on Steam pages
// @author       iMAboud, Rewritten by RRRiderrr
// @match        https://store.steampowered.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    function createButton(searchLink, buttonText, tooltipText, iconPath) {
        const gameNameElement = document.getElementById("appHubAppName");
        if (gameNameElement) {
            const linkButton = document.createElement("a");
            linkButton.href = searchLink;
            linkButton.setAttribute("target", "_blank");

            const img = new Image();
            img.src = iconPath;
            img.alt = buttonText;
            img.style.width = '64px';
            img.style.height = '32px';
            img.style.objectFit = 'contain';

            linkButton.appendChild(img);
            linkButton.title = tooltipText;
            linkButton.style.marginRight = '10px';
            gameNameElement.parentNode.appendChild(linkButton);
        }
    }

    const formattedGameName = document.getElementById("appHubAppName").textContent.trim().toLowerCase().replace(/'/g, '').replace(/_/g, ' ');

    const Site1SearchLink = `https://online-fix.me/index.php?do=search&subaction=search&story=${formattedGameName}`;
    createButton(Site1SearchLink, "Online Fix", "Search on Online Fix", "https://i.imgur.com/WAXRAUw.png");

    const Site2SearchLink = `https://www.skidrowreloaded.com/?s=${formattedGameName}&x=0&y=0`;
    createButton(Site2SearchLink, "Skidrow", "Search on Skidrow", "https://www.skidrowreloaded.com/wp-content/uploads/2018/06/cropped-faviicon-192x192.png");

    const Site3SearchLink = `https://fitgirl-repacks.site/?s=${formattedGameName}`;
    createButton(Site3SearchLink, "FitGirl", "Search on FitGirl", "https://i.imgur.com/GOFbweI.png");

    const Site4SearchLink = `https://steamrip.com/?s=${formattedGameName}`;
    createButton(Site4SearchLink, "SteamRIP", "Search on SteamRIP", "https://i.imgur.com/tmvOT86.png");

    const Site5SearchLink = `https://dodi-repacks.site/?s=${formattedGameName}`;
    createButton(Site5SearchLink, "Dodi", "Search on Dodi", "https://i.imgur.com/g71t1Ge.png");

    const Site6SearchLink = `https://gload.to/?s=${formattedGameName}`;
    createButton(Site6SearchLink, "Gload", "Search on Gload", "https://gload.to/logo.png");

    const Site7SearchLink = `https://rutracker.org/forum/tracker.php?nm=${formattedGameName}&o=10&s=2`;
    createButton(Site7SearchLink, "RuTracker", "Search on RuTracker", "https://rutracker.org/favicon.ico");

    const Site8SearchLink = `http://rutor.org/search/1/0/000/2/${formattedGameName}`;
    createButton(Site8SearchLink, "Rutor", "Search on Rutor", "https://www.userlogos.org/files/rutor_03.png");

    const Site9SearchLink = `https://nnmclub.to/forum/tracker.php?nm=${formattedGameName}&o=10&s=2`;
    createButton(Site9SearchLink, "NnmClub", "Search on NnmClub", "https://nnmclub.to/favicon.ico");

    const Site10SearchLink = `https://small-games.info/?go=search&search_text=${formattedGameName}&sort=2`;
    createButton(Site10SearchLink, "Small-games", "Search on Small-Games", "https://small-games.info/favicon.ico");
})();
