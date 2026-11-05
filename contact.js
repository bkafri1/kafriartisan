// ====== EDIT HERE ======
// Fill these in and the Instagram / Email buttons appear on both pages.
// Leave empty ('') to keep a button hidden.
var INSTAGRAM_HANDLE = '';   // e.g. 'kafriartisan'  (no @)
var CONTACT_EMAIL    = '';   // e.g. 'orders@kafriartisan.com'
// =======================

(function () {
  var ig = document.getElementById('ig');
  if (ig && INSTAGRAM_HANDLE) {
    ig.href = 'https://instagram.com/' + INSTAGRAM_HANDLE.replace(/^@/, '');
    ig.hidden = false;
  }
  var mail = document.getElementById('mail');
  if (mail && CONTACT_EMAIL) {
    mail.href = 'mailto:' + CONTACT_EMAIL;
    mail.hidden = false;
  }
})();
