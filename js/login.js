form1.addEventListener("submit", e => {
    e.preventDefault();
    location.href = "../index.html";
    localStorage.setItem("login", "login");
})