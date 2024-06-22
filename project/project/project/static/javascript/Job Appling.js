document.getElementById("jobApplicationForm").onsubmit = function () {
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let city = document.getElementById("City").value.trim();
    let additionalInfo = document.getElementById("Additional info").value.trim();

    let fullNameRegex = /^[a-zA-Z\s]*$/;
    let phoneNumberRegex = /^\d+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName === "" || email === "" || phone === "" || city === "" || additionalInfo === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    if (!fullNameRegex.test(fullName)) {
        alert("Full Name can only contain letters and spaces.");
        return false;
    }
    if (!phoneNumberRegex.test(phone)) {
        alert("Phone Number can only contain numbers.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    return true;
};
