

var btn_submit = document.querySelector('.btn_submit');
var login_error_msg = document.getElementById('login_error_msg');

btn_submit.addEventListener('click', function (e) {

    e.preventDefault(); // to prevent refreshing the page

    // select values from inputs 
    var username = document.getElementById('username').value
    var pass = document.getElementById('pass').value

    // get all accounts 
    var accounts = localStorage.getItem('Accounts');
    accounts_js = JSON.parse(accounts);
    var flag = 0;
    accounts_js.forEach(acc => {

        if (acc.username == username && acc.pass == pass) {
            flag = 1;
            login_error_msg.classList.add('display_none')
            acc_json = JSON.stringify(acc);
            localStorage.setItem('current_account', acc_json);

            if (acc.role == 1) // admin 
            {
                login_error_msg.classList.add('display_none')

                // will redirect to admin pages
                //location.href = 'pages/HomePage.html'
                console.log(acc.company)
                location.href = `/HomePage/?company=${acc.company}`
            }
            else {

                // role = 2 ==> user role
                // will redirect to admin pages
                location.href = '/User/all_jobs'

            }
        }
        else {
            //show error msg
            flag = 0;

        }

    });
    if (flag = 0) {
        login_error_msg.classList.remove('display_none')
    }

})