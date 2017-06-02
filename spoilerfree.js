var channel = '';
var metaElems = document.getElementsByTagName('meta');

// Get channelId from video page
for (var i = 0; i < metaElems.length; i++) {
  prop = metaElems[i].getAttribute('itemprop');
  if (prop == 'channelId') {
    channel = metaElems[i].getAttribute('content');
    break;
  }
}

if (channel == 'UCQJT7rpynlR7SSdn3OyuI_Q' /* LoLEventVoDs */) {
  // Hide sidebar
  var sidebar = document.getElementById('watch7-sidebar');
  sidebar.style.display = 'none';
}
