var filter = {
  url: [
    { hostContains: "youtube.com" },
    { pathContains: "watch" },
    { queryContains: "?v=" },
  ]
};

function logOnCommitted(details) {
  var sidebar = document.getElementById('watch7-sidebar');
  sidebar.style.display = 'none';
};

browser.webNavigation.onCommitted.addListener(logOnCommitted, filter);
