// ==UserScript==
// @name        Whatsapp Web Auto Sender
// @namespace   iN4sser
// @match       http*://web.whatsapp.com/*
// @grant       window.close
// @version     1.1
// @author      iN4sser
// @updateURL   https://raw.githubusercontent.com/iN4sser/Whatsapp-Web-Auto-Sender/master/WhatsappWebAutoSender.user.js
// @description 3/12/2020, 12:29:32 PM
// ==/UserScript==
window.onload=function(){

  setInterval(autoClick,100);

}
function autoClick(){   
  document.getElementsByClassName('_1U1xa')[0].click();
  setTimeout(window.close,5000);
}
