
let entry_mode = document.querySelector('#entry_mode');
let entryMode = document.querySelector('#entry_mode');
let trans_info = document.querySelector('#trans_info');
let jamb_info = document.querySelector('#jamb_info');
trans_info.style.display = 'none';
jamb_info.style.display = 'none';

entry_mode.oninput = function() {
let strUser = entry_mode.options[entryMode.selectedIndex].value;
console.log(strUser);
if (strUser == "--Please select--") {
trans_info.style.display = 'none';
jamb_info.style.display = 'none';
}else if (this.value == "NCE TRANSITING") {
  trans_info.style.display = 'block';
  jamb_info.style.display = 'none';
}else if (strUser == "NCE DIRECT") {
trans_info.style.display = 'none';
jamb_info.style.display = 'none';
}else if (strUser == "NCE UTME") {
trans_info.style.display = 'none';
jamb_info.style.display = 'block';
}
}
