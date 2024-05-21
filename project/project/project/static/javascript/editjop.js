document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form");
    loadJobDetails()
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            const formData = new FormData(this);
            const save = new XMLHttpRequest();
            save.open('POST', this.action, true);
            save.onreadystatechange = function() {
                if (save.readyState === XMLHttpRequest.DONE && save.status === 200) {
                    alert('Job added successfully!');

                } else if (save.readyState === XMLHttpRequest.DONE && save.status !== 200) {
                    alert('Error occurred while adding job.');
                }
            };
            save.send(formData);
        } else {
            alert('Please fill out all required fields correctly');
        }
    });
});
   function loadJobDetails() {
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
        // Make an AJAX request to retrieve job details
        view.open('GET', '/editjop/jobdata/', true);
        view.send();
    }

    function displayJobData(jobData) {
        document.getElementById('pk').value = jobData.pk;
        document.getElementById('tit').value = jobData.title;
        document.getElementById('sal').value = jobData.salary;
        document.getElementById('comp').value = jobData.company_name;
        // Assuming job status is represented as a boolean
        document.getElementById('opened').checked = jobData.status; 
        document.getElementById('closed').checked = !jobData.status;
        document.getElementById('exp').value = jobData.years_of_exp;
        document.getElementById('desc').value = jobData.description;
    }

    function validateForm() {
        const jobTitle = document.getElementById('tit').value;
        const salary = document.getElementById('sal').value;
        const companyName = document.getElementById('comp').value;
        const yearsOfExp = document.getElementById('exp').value;
        const description = document.getElementById('desc').value;
    
        // Check if ID is not a number or if any required field is empty
        if ( jobTitle.trim() === '' || salary.trim() === '' || companyName.trim() === '' || yearsOfExp.trim() === '') {
            return false;
        }
    
        // Check if job title contains any digits
        if (/\d/.test(jobTitle)) {
            return false;
        }
    
        return true;
    }