
document.addEventListener('DOMContentLoaded', function() {
    const view = new XMLHttpRequest();
    view.onreadystatechange = function() {
        if (view.readyState === XMLHttpRequest.DONE) {
            if (view.status === 200) {
                const jobData = JSON.parse(view.responseText);
                displayJobData(jobData);
            } else {
                console.error('Error fetching job data:', view.statusText);
            }
        }
    };
    view.open('GET', '/viewjop/jobdata/', true);
    view.send();
});

function displayJobData(jobData) {
    document.getElementById('job-title').innerText = jobData.title;
    document.getElementById('salary').innerText = jobData.salary;
    document.getElementById('company-name').innerText = jobData.company_name;
    document.getElementById('job-status').innerText = jobData.status;
    document.getElementById('job-description').innerText = jobData.description;
    document.getElementById('years-of-exp').innerText = jobData.years_of_exp;
}