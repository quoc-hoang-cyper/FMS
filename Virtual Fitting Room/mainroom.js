
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
    var i, productStyle, productLinks;
    productStyle = document.getElementsByClassName("productStyle");
    for (i = 0; i < productStyle.length; i++) {
        productStyle[i].style.display = "none";
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
    document.getElementById(model).style.display = "inline-block";
    evt.currentTarget.className += " active";
}

// shooseShirt

function chooseShirt(evt, shirt) {
    var i, shirtShow, shirtLinks;
    shirtShow = document.getElementsByClassName("shirtShow");
    for (i = 0; i < shirtShow.length; i++) {
        shirtShow[i].style.display = "none";
    }
    shirtLinks = document.getElementsByClassName("shirtLinks");
    for (i = 0; i < shirtLinks.length; i++) {
        shirtLinks[i].className = shirtLinks[i].className.replace(" active", "");
    }
    document.getElementById(shirt).style.display = "inline-block";
    evt.currentTarget.className += " active";
}


// choosePant

function choosePant(evt, pant) {
    var i, pantShow, pantLinks;
    pantShow = document.getElementsByClassName("pantShow");
    for (i = 0; i < pantShow.length; i++) {
        pantShow[i].style.display = "none";
    }
    pantLinks = document.getElementsByClassName("pantLinks");
    for (i = 0; i < pantLinks.length; i++) {
        pantLinks[i].className = pantLinks[i].className.replace(" active", "");
    }
    document.getElementById(pant).style.display = "inline-block";
    evt.currentTarget.className += " active";
}

// chooseStyle

function chooseStyleShirt(evt, styleShirtFMS) {
    var i, styleShirtTable, styleShirtLink;
    styleShirtTable = document.getElementsByClassName("styleShirtTable");
    for (i = 0; i < styleShirtTable.length; i++) {
        styleShirtTable[i].style.display = "none";
    }
    styleShirtLink = document.getElementsByClassName("styleShirtLink");
    for (i = 0; i < styleShirtLink.length; i++) {
        styleShirtLink[i].className = styleShirtLink[i].className.replace(" active", "");
    }
    document.getElementById(styleShirtFMS).style.display = "inline-block";
    evt.currentTarget.className += " active";
}

function chooseStylePant(evt, stylePantFMS) {
    var i, stylePantTable, stylePantLink;
    stylePantTable = document.getElementsByClassName("stylePantTable");
    for (i = 0; i < stylePantTable.length; i++) {
        stylePantTable[i].style.display = "none";
    }
    stylePantLink = document.getElementsByClassName("stylePantLink");
    for (i = 0; i < stylePantLink.length; i++) {
        stylePantLink[i].className = stylePantLink[i].className.replace(" active", "");
    }
    document.getElementById(stylePantFMS).style.display = "inline-block";
    evt.currentTarget.className += " active";
}