import "./style.css";
import loadMenuPage from "./menu-page.js"
import loadContactPage from "./contact-page.js"
import loadHomePage from "./home-page.js"
export default createElement

const logoImport = "./image-icon.svg"
const body = document.querySelector("body");
let mainContainer;

// Create Element

function createElement(element, className, parent) {
    const newElement = document.createElement(element);
    newElement.className = className;
    parent.appendChild(newElement);
    return newElement;
}

// Clean page

function cleanPage() {
    mainContainer.innerHTML = "";
}

// Main Container

function loadMainContainer() {
    mainContainer = createElement("div", "mainContainer", body)
}

// Header 

function loadHeader() {

    const header = createElement("header", "header", body)

    const headerLogoContainer = document.createElement("div");
    
    const logo = new Image();
    logo.src = logoImport;
    logo.classList.add("headerLogo");
    
    headerLogoContainer.appendChild(logo);
    
    header.appendChild(headerLogoContainer);
    
    const nav = document.createElement("nav");
    
    header.appendChild(nav);
    
    const navItemContainer1 = document.createElement("div");
    navItemContainer1.innerHTML = "Home";
    navItemContainer1.addEventListener("click", () => 
        {
            cleanPage()
            loadHomePage(mainContainer)
        })
    navItemContainer1.classList.add("navItemContainer");
    
    const navItemContainer2 = document.createElement("div");
    navItemContainer2.innerHTML = "Menu";
    navItemContainer2.addEventListener("click", () => 
        {
            cleanPage()
            loadMenuPage(mainContainer)
        })
    navItemContainer2.classList.add("navItemContainer");
    
    const navItemContainer3 = document.createElement("div");
    navItemContainer3.innerHTML = "Contact";
    navItemContainer3.addEventListener("click", () => 
        {
            cleanPage()
            loadContactPage(mainContainer)
        })
    navItemContainer3.classList.add("navItemContainer");
    
    nav.appendChild(navItemContainer1);
    nav.appendChild(navItemContainer2);
    nav.appendChild(navItemContainer3);
    
}

// Footer
    
function loadFooter() {
    
    const footer = createElement("footer", "footer", body)
    
    const footerInfoContainer = createElement("div", "footerInfoContainer", footer)
    
    const footerPhoneContainer = createElement("div", "footerContactsContainer", footerInfoContainer)
    
    const footerPhoneIcon = createElement("img", "footerIcon", footerPhoneContainer)
    footerPhoneIcon.src = logoImport
    
    const footerPhoneNumber = createElement("a", "footerText", footerPhoneContainer)
    footerPhoneNumber.innerText = "+1 367 002 323"
    footerPhoneNumber.href = "tel: 1 367 002 323"
    
    const footerAddressContainer = createElement("div", "footerContactsContainer", footerInfoContainer)
    
    const footerAddressIcon = createElement("img", "footerIcon", footerAddressContainer)
    footerAddressIcon.src = logoImport
    
    const footerAddress = createElement("span", "footerText", footerAddressContainer)
    footerAddress.innerText = "Address Plot 3392"
    
    const footerHoursContainer = createElement("div", "footerContactsContainer", footerInfoContainer)
    
    const footerHoursIcon = createElement("img", "footerIcon", footerHoursContainer)
    footerHoursIcon.src = logoImport
    
    const footerHours = createElement("span", "footerText", footerHoursContainer)
    footerHours.innerText = "Tuesday - Sunday. 9:00 - 24:00"
    
    const footerSocialContainer = createElement("div", "footerSocialContainer", footerInfoContainer)
    
    const footerInstagramContainer = createElement("a", "", footerSocialContainer)
    footerInstagramContainer.href = "https://instagram.com"
    const footerInstagramIcon = createElement("img", "footerSocialIcon", footerInstagramContainer)
    footerInstagramIcon.src = logoImport
    
    const footerFacebookContainer = createElement("a", "", footerSocialContainer)
    footerFacebookContainer.href = "https://Facebook.com"
    const footerFacebookIcon = createElement("img", "footerSocialIcon", footerFacebookContainer)
    footerFacebookIcon.src = logoImport
    
    const footerWhatsappContainer = createElement("a", "", footerSocialContainer)
    footerWhatsappContainer.href = "https://Whatsapp.com"
    const footerWhatsappIcon = createElement("img", "footerSocialIcon", footerWhatsappContainer)
    footerWhatsappIcon.src = logoImport
    
    
    const footerMapContainer = createElement("div", "footerMapContainer", footer)
    const footerMap = createElement("img", "footerMap", footerMapContainer)
    footerMap.src = logoImport
    
    const footerCopyrightContainer = createElement("div", "footerCopyrightContainer", footer)
    let year = new Date()
    year = year.getFullYear()
    const footerCopyright = createElement("p", "footerCopyright", footerCopyrightContainer)
    footerCopyright.innerText = `Copyright © ${year} Black Cactus` 
    
}

// Invocations

loadHeader()
loadMainContainer()
loadHomePage(mainContainer)
loadFooter()