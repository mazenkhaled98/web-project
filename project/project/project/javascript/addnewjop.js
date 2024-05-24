document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form");

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