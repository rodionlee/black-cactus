import createElement from "./index.js"
export default loadContactPage

const logoImport = "./image-icon.svg"

function loadContactPage(mainContainer) {

    const contactSection = createElement("section", "contactSection", mainContainer)

    const contactH1 = createElement("h1", "", contactSection)
    contactH1.innerText = "Get In Touch";
    // WITHOUT ; THROWS AN ERROR

    (function loadContactForm() {

        const contactForm = createElement("form", "contactForm", contactSection)

        const formFieldName = createElement("input", "formField", contactForm)
        formFieldName.type = "text"
        formFieldName.placeholder = "Name"

        const formFieldEmail = createElement("input", "formField", contactForm)
        formFieldEmail.type = "email"
        formFieldEmail.placeholder = "Email"
        
        const formFieldPhone = createElement("input", "formField", contactForm)
        formFieldPhone.type = "tel"
        formFieldPhone.placeholder = "Phone"

        const formFieldMessage = createElement("textarea", "formTextArea", contactForm)
        formFieldMessage.placeholder = "Message"

        const formButton = createElement("button", "formButton", contactForm)
        formButton.innerText = "Send Message"

    })()
    
    const footerInfoContainer = createElement("div", "footerInfoContainer", contactSection)
    
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
}