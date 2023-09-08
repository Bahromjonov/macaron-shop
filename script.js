// Header
const toggleButton = document.querySelector(".js-kompaini");
const toggleButton2 = document.querySelector(".js-kompaini2");
const elpodarochnie = document.querySelector(".js-podarochnie");
const collapseContent = document.querySelector(".collapseContent");
const collapseContent2 = document.querySelector(".collapseContent2");
const elPodarochnie = document.querySelector(".podarochnie");
const elKatalog = document.querySelector('.katalog')
const elKatalogJs = document.querySelector('.js-katalog')


toggleButton.addEventListener("mouseenter", () => {
    collapseContent.classList.remove("hidden");
});

toggleButton.addEventListener("mouseleave", () => {
    collapseContent.classList.add("hidden");
});

toggleButton2.addEventListener("mouseenter", () => {
    collapseContent2.classList.remove("hidden");
});

toggleButton2.addEventListener("mouseleave", () => {
    collapseContent2.classList.add("hidden");
});
elpodarochnie.addEventListener("mouseenter", () => {
    elPodarochnie.classList.remove("hidden");
});

elpodarochnie.addEventListener("mouseleave", () => {
    elPodarochnie.classList.add("hidden");
});

elKatalogJs.addEventListener("mouseenter", () => {
    elKatalog.classList.remove("hidden");
});

elKatalogJs.addEventListener("mouseleave", () => {
    elKatalog.classList.add("hidden");
});