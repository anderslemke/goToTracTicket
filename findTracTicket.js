function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

chrome.storage.sync.get('trac_ticket_url', function(value){
  var url = value['trac_ticket_url'];
  if (!url || url === '') {
    window.alert('Please set your Trac ticket URL in the options.');
  }else{
    var tracTicketURL = url;

    var text = getSelectionText();
    if (text.match(/(#)?(\d)+/)[0]) {
        var tracTicket = text.replace('#', '');
        window.open(tracTicketURL.replace('{ID}', tracTicket));
    }
  }
});

