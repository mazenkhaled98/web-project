
//#region  handle selection of company option

var company_details = document.querySelector('.company_details_container')
var selcted_company_option = document.querySelectorAll('.company_option')

selcted_company_option.forEach(function (e) {
    e.addEventListener('change', function () {
        if (e.getAttribute('id') == 'is_company_admin') {
            company_details.classList.remove('hide')
        }
        else {
            company_details.classList.add('hide')
        }
    })
})
//#endregion



//#region Registeration logic


/*
    Array of all Admins ==>  [{}]
    Array of all Users  ==>  [{}]
    ** username
    ** pass
    ** email
    ** role
    ** company_name

*/

//#region  Validate Password
var confirm_pass = document.getElementById('confirm_pass');

function ValidatePassword() {
    var pass = document.getElementById('pass');
    var not_matched_pass_alert = document.querySelector('.not_matched_pass_alert')
    console.log(confirm_pass.value)
    if (pass.value == confirm_pass.value) {
        not_matched_pass_alert.classList.add('display_none')
        console.log('match')
    }
    else {
        not_matched_pass_alert.classList.remove('display_none')
        console.log('not match')
    }
}
confirm_pass.addEventListener('input', ValidatePassword)
console.log(JSON.parse(localStorage.getItem('Admins')))
//#endregion 

var btn_submit = document.querySelector('.btn_submit');
btn_submit.addEventListener('click', function (e) {
    e.preventDefault(); // to prevent refreshing the page

    // select values from inputs 
    var username = document.getElementById('username').value
    var pass = document.getElementById('pass').value
    var email = document.getElementById('email').value
    var role; // default user
    // get the role
    let role_options = document.getElementsByName('role_option');

    // Loop through each radio button
    for (let i = 0; i < role_options.length; i++) {
        if (role_options[i].checked && role_options[i].getAttribute('id') == 'is_company_admin') {
            role = 1
            break;
        }
        else {
            role = 2
        }
    }

    // store admin details into local_storage
    // if this user is admin
    var company = document.getElementById('company').value;

    var Account_details = {
        username,
        pass,
        email,
        company,
        role
    }
    var all_accounts = []
    if (localStorage.getItem('Accounts')) {
        accounts = localStorage.getItem('Accounts')
        all_accounts = JSON.parse(accounts)
    }
    all_accounts.push(Account_details);

    localStorage.setItem('Accounts', JSON.stringify(all_accounts));
    location.href = '/';
    //  document.cookie = `Admins = ${JSON.stringify(all_admins)} ; expires=Fri, 31 Dec 2025 23:59:59 UTC;`;


})

//#endregion



