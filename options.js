// Saves options to localStorage.
function save_options() {
  var input = document.getElementById("ticketUrl");
  var url = input.value;
  chrome.storage.sync.set({'trac_ticket_url': url}, function() {
    // Notify that we saved.
    // Update status to let user know options were saved.
    var button = document.getElementById("save");
    button.innerHTML = "URL saved. Thank you.";
    setTimeout(function() {
      button.innerHTML = "Save";
    }, 1000);
  });
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  chrome.storage.sync.get('trac_ticket_url', function(value){
    var url = value['trac_ticket_url'];
    if (!url) {
      return;
    }
    var input = document.getElementById("ticketUrl");
    input.value = url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);