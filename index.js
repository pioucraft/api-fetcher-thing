async function loadHomePage() {
    let homePage = (await (await fetch("homePage.html")).text())
    console.log(homePage)
    document.getElementById("screen").innerHTML = `<div id="homePage">${homePage}</div>`
}