
var account_name = document.getElementById('account_name');
// Json.stri(localStorage.getItem('current_account'))
account_name_value = JSON.parse(localStorage.getItem('current_account'))['username']
account_name.innerHTML = account_name_value


// when click on profile photo will go to HomePage 
account_name.addEventListener('click', function () {
    if (location.pathname !== "HomePage") {
        history.back(1)
    }
}
)


// btn_sign_out logic 
// when admin click on btn, will remove localstorage item "current_account"

var btn_sign_out_container = document.querySelector('.btn_sign_out_container > button').addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('current_account');
    location.href = '/'
})

