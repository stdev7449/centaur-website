// Consent banner for Centaur's website tracking (snippet from app.centaurcrm.com,
// added 22 Nov 2026). Until a visitor clicks Accept, the snippet only counts the
// page view anonymously and stores nothing. The choice is kept in this browser
// (centaur_choice) so the banner shows once. The privacy page's "Change your
// choice" button (data-consent-reset) shows it again.
(function () {
  var KEY = 'centaur_choice';
  var ls = null; try { ls = window.localStorage; } catch (e) {}
  var get = function () { try { return ls && ls.getItem(KEY); } catch (e) { return null; } };
  var set = function (v) { try { ls && ls.setItem(KEY, v); } catch (e) {} };
  // The snippet loads async: call it now, or as soon as it's ready.
  var tell = function (cmd, tries) {
    if (window.centaur) return window.centaur(cmd);
    if ((tries || 0) < 40) setTimeout(function () { tell(cmd, (tries || 0) + 1); }, 250);
  };

  var css = '#cc-bar{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#121019;color:#ECECF2;border:1px solid #272433;border-radius:12px;padding:16px 18px;font:14px/1.5 "Hanken Grotesk",system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.45)}'
    + '#cc-bar p{margin:0 0 12px}#cc-bar a{color:#8B7CF6}#cc-bar .cc-b{display:flex;gap:8px;flex-wrap:wrap}'
    + '#cc-bar button{font:600 14px "Hanken Grotesk",system-ui,sans-serif;border-radius:999px;padding:8px 16px;cursor:pointer;border:1px solid #8B7CF6}'
    + '#cc-bar .cc-y{background:#8B7CF6;color:#0B0A12}#cc-bar .cc-n{background:transparent;color:#ECECF2;border-color:#3a3650}';

  function show() {
    if (document.getElementById('cc-bar')) return;
    if (!document.getElementById('cc-css')) { var st = document.createElement('style'); st.id = 'cc-css'; st.textContent = css; document.head.appendChild(st); }
    var bar = document.createElement('div');
    bar.id = 'cc-bar'; bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-label', 'Cookie choice');
    bar.innerHTML = '<p>May we remember this browser so we can see which pages you look at? We use it to understand what interests people, including people we\u2019ve emailed. No advertising, and nothing shared. <a href="/privacy.html#cookies">More</a></p>'
      + '<div class="cc-b"><button type="button" class="cc-y">Accept</button><button type="button" class="cc-n">No thanks</button></div>';
    bar.querySelector('.cc-y').onclick = function () { set('yes'); tell('consent'); bar.remove(); };
    bar.querySelector('.cc-n').onclick = function () { set('no'); tell('withdraw'); bar.remove(); };
    document.body.appendChild(bar);
  }

  function start() {
    var c = get();
    if (c === 'yes') tell('consent');
    else if (c !== 'no') show();
    var reset = document.querySelectorAll('[data-consent-reset]');
    for (var i = 0; i < reset.length; i++) reset[i].onclick = function (e) { e.preventDefault(); show(); };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
