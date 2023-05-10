
// productFuntion

// function changCard1() {
//     if (y.style.display === "none" && x.style.display === "block") {
//         x.style.display = "none";
//     } else if (x.style.display = "none") {
//         y.style.display = "block";
//     }
// }
// function changCard2() {
//     if (x.style.display === "none" && y.style.display === "none") {
//         x.style.display = "block";
//     } else if (y.style.display = "block") {
//         y.style.display = "none";
//     } else if (y.style.display = "none") {
//         x.style.display = "block";
//     }
// }

function changeProduct(evt, styleProduct) {
    var i, product, productLinks;
    product = document.getElementsByClassName("product");
    for (i = 0; i < product.length; i++) {
        product[i].style.display = "none";
    }
    productLinks = document.getElementsByClassName("productLinks");
    for (i = 0; i < productLinks.length; i++) {
        productLinks[i].className = productLinks[i].className.replace(" active", "");
    }
    document.getElementById(styleProduct).style.display = "block";
    evt.currentTarget.className += " active";
}

// bodyFuntion
function changeTabBody(evt, gender) {
    var i, bodyTab, genderLinks;
    bodyTab = document.getElementsByClassName("bodyTab");
    for (i = 0; i < bodyTab.length; i++) {
        bodyTab[i].style.display = "none";
    }
    genderLinks = document.getElementsByClassName("genderLinks");
    for (i = 0; i < genderLinks.length; i++) {
        genderLinks[i].className = genderLinks[i].className.replace(" active", "");
    }
    document.getElementById(gender).style.display = "block";
    evt.currentTarget.className += " active";
}

// chooseModel

function chooseBody(evt, model) {
    var i, bodyUser, bodyLinks;
    bodyUser = document.getElementsByClassName("bodyUser");
    for (i = 0; i < bodyUser.length; i++) {
        bodyUser[i].style.display = "none";
    }
    bodyLinks = document.getElementsByClassName("bodyLinks");
    for (i = 0; i < bodyLinks.length; i++) {
        bodyLinks[i].className = bodyLinks[i].className.replace(" active", "");
    }
    document.getElementById(model).style.display = "block";
    evt.currentTarget.className += " active";
}