export default loadMenuPage
import createElement from "./index.js"

const logoImport = "./image-icon.svg"

function loadMenuPage(mainContainer) {

    const menuSection = createElement("section", "menuSection", mainContainer)
    const menuSectionH1 = createElement("h1", "", menuSection)
    menuSectionH1.innerText = "Black Cactus Menu"
    const menuItemsContainer = createElement("div", "menuItemsContainer", menuSection)
    class menuItemClass {
        constructor(imageSrc, name, description, i) {
            this.image = new Image()
            this.image.src = imageSrc
            this.image.className = "menuItemImage"
            this.name = name
            this.description = description
            this.createDOMElement()
        }
        
        createDOMElement() {
            const menuItem = createElement("div", "menuItem", menuItemsContainer)
            menuItem.appendChild(this.image)
            const menuItemName = createElement("p", "menuItemName", menuItem)
            menuItemName.innerText = this.name
            const menuItemDescription = createElement("p", "menuItemDescription", menuItem)
            menuItemDescription.innerText = this.description
        }
        
    }
    
    const menuItem1 = new menuItemClass(logoImport, "Burger", "And a very tasty one at that")
    const menuItem2 = new menuItemClass(logoImport, "Burger2", "And a very tasty one at that")
    const menuItem3 = new menuItemClass(logoImport, "Burger3", "And a very tasty one at that")
    const menuItem4 = new menuItemClass(logoImport, "Burger4", "And a very tasty one at that")
    
    const menuButton = createElement("button", "menuButton", menuSection)
    menuButton.innerText = "Book Table"
}