mobiles = document.querySelectorAll("li[data-skuid]");

let txt = "";

mobiles.forEach(function (mobile) {

    const a = mobile.querySelector(".js-sku-link");

    if (a.getAttribute("title").includes("Samsung")) {
        txt += mobile.getAttribute("data-skuid") + "\n";
        mobile.style.display = "none";
    }
});