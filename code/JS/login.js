

function toggleform() {
    var login = document.querySelector(".login");
    var signup = document.querySelector(".signup");

    if (login.classList.contains("hidden")) {
        login.classList.remove("hidden");
        signup.classList.add("hidden");
    } else {
        login.classList.add("hidden");
        signup.classList.remove("hidden");
    }
}