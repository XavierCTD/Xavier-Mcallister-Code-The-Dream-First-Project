const footerSearch = document.footer.innerHTML;

const today = new Date("8-16-2024 07:26:00");
let thisYear = today.getFullYear();

const footer = document.querySelector(".myFooter");

const copyright = document.createElement("p");
copyright.innerHTML = "Xavier Mcallister";
thisYear.innerHTML = "8-16-2024";

