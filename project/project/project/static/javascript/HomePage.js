// load account_name into html page from localstorage

var account_name = document.getElementById('account_name');
account_name_value = localStorage.getItem('current_account')
account_name.innerHTML = account_name_value



// btn_sign_out logic 
// when admin click on btn, will remove localstorage item "current_account"

var btn_sign_out_container = document.querySelector('.btn_sign_out_container > button').addEventListener('click', function (e) {
    e.preventDefault();
    location.hr = 'Log_in'
    localStorage.removeItem('current_account');
})
