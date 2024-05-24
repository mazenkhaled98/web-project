var view_all_jobs_table = document.querySelector('.view_all_jobs_table')
var no_jobs_alert = document.querySelector('.no_jobs_alert')

var all_created_jobs;
if (localStorage.getItem('all_created_jobs')) {

    all_created_jobs = JSON.parse(localStorage.getItem('all_created_jobs'))
}
else {
    all_created_jobs = [];
}

if (all_created_jobs.length == 0) {
    no_jobs_alert.classList.remove('display_none')
}
else {
    no_jobs_alert.classList.add('display_none')

}

// admin name
var admin_name = JSON.parse(localStorage.getItem('current_account'))['username'];


// get all jobs which related to admin which he created
var jobs_related_to_admin = [];
all_created_jobs.filter(function (job) {
    if (job['account_username'] == admin_name) {
        jobs_related_to_admin.push(job)
    }
})

// store these jobs into home page table

for (var i = 0; i < jobs_related_to_admin.length; i++) {

    // create table rows
    tr = document.createElement('tr')

    // create all table details (td)
    job_name = document.createElement('td')
    job_company = document.createElement('td')
    job_status = document.createElement('td')

    // TD Of buttons
    td_btn_view_details = document.createElement('td')
    td_btn_edit = document.createElement('td')
    td_btn_delete = document.createElement('td')


    // buttons
    btn_view_details = document.createElement('button')
    btn_edit = document.createElement('button')
    btn_delete = document.createElement('button')

    // add class attributes into these buttins 
    btn_view_details.setAttribute('class', 'btn_view_details')
    btn_edit.setAttribute('class', 'btn_edit')
    btn_delete.setAttribute('class', 'btn_delete')
    // set id value into id attribute to handle logic of deletion
    btn_delete_id = btn_delete.setAttribute('id', jobs_related_to_admin[i]['ID'])


    // a:href of buttons
    btn_view_details_link = document.createElement('a')
    btn_edit_link = document.createElement('a')

    // add the href attribute with the base URL
    btn_view_details_link.href = '../View_Job_Details/View_Job_Details.html?id=' + jobs_related_to_admin[i]['ID'];
    btn_edit_link.href = '../Edit_Job/Edit_Job.html?id=' + jobs_related_to_admin[i]['ID'];


    // create text element to store data
    job_name_value = document.createTextNode(jobs_related_to_admin[i]['jobTitle'])
    job_company_value = document.createTextNode(jobs_related_to_admin[i]['companyName'])
    job_status_value = document.createTextNode(jobs_related_to_admin[i]['status'])

    // create text_nodes of buttons
    btn_view_details_text = document.createTextNode('View Details')
    btn_edit_text = document.createTextNode('Edit')
    btn_delete_text = document.createTextNode('Delete')

    // append text nodes into node elements
    job_name.appendChild(job_name_value)
    job_company.appendChild(job_company_value)
    job_status.appendChild(job_status_value)

    btn_view_details_link.appendChild(btn_view_details_text)
    btn_edit_link.appendChild(btn_edit_text)


    btn_view_details.appendChild(btn_view_details_link)
    btn_edit.appendChild(btn_edit_link)
    btn_delete.appendChild(btn_delete_text)


    // append buttons
    td_btn_view_details.appendChild(btn_view_details)
    td_btn_edit.appendChild(btn_edit)
    td_btn_delete.appendChild(btn_delete)



    // append TD elements into TR Elements
    tr.appendChild(job_name)
    tr.appendChild(job_company)
    tr.appendChild(job_status)

    tr.appendChild(td_btn_view_details)
    tr.appendChild(td_btn_edit)
    tr.appendChild(td_btn_delete)




    view_all_jobs_table.appendChild(tr)


}




// delete job

var btns_delete = document.querySelectorAll('.btn_delete')

btns_delete.forEach(function (btn_delete) {
    btn_delete.addEventListener('click', function (e) {
        // get job id
        id = e.target.getAttribute('id')
        console.log(id)
        // get all jobs from local_storage
        all_jobs = JSON.parse(localStorage.getItem('all_created_jobs'))
        var updated_jobs = [];
        all_jobs.filter(function (job) {
            if (job.ID !== id) {
                updated_jobs.push(job)
            }
        })

        updated_jobs = JSON.stringify(updated_jobs)
        // update jobs into localstorage
        localStorage.setItem('all_created_jobs', updated_jobs)
        location.reload()
    })
})