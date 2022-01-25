const form = document.getElementById("feedBackForm");

form.addEventListener("submit", (e) => {

    console.log("heere");
    e.preventDefault();

    console.log(e.formData);
})

console.log("form");
console.log(form);