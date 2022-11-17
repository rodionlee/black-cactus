import createElement from "./index.js"
export default loadHomePage

const logoImport = "./image-icon.svg"

function loadHomePage(mainContainer) {

    // Hero Section
    
    const heroSection = createElement("section", "heroSection", mainContainer);
    
    const heroInfoContainer = createElement("div", "heroInfoContainer", heroSection);
    heroInfoContainer.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus ratione hic amet suscipit officiis minus, esse quos veniam aut, sapiente labore eveniet, eaque sunt? Perferendis laborum eligendi nihil ipsam."
    
    const heroImageContainer = createElement("div", "heroImageContainer", heroSection);
    
    const heroImage = new Image();
    heroImage.src = logoImport;
    heroImage.className = "heroImage";
    heroImageContainer.appendChild(heroImage);
    
    // Menu Section
    
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
    menuButton.innerText = "See Full Menu"
    
    // Reviews Section
    
    const reviewsSection = createElement("section", "reviewsSection", mainContainer)
    const reviewsSectionH1 = createElement("h1", "h1", reviewsSection)
    reviewsSectionH1.innerText = "What People Say"
    const reviewsContainer = createElement("div", "reviewsContainer", reviewsSection)
    class reviewClass {
        constructor(imageSrc, name, text, i) {
            this.image = new Image()
            this.image.src = imageSrc
            this.image.className = "reviewImage"
            this.name = name
            this.text = text
            this.createDOMElement ()
        }
        
        createDOMElement() {
            const review = createElement("div", "review", reviewsContainer)
            review.appendChild(this.image)
            const reviewText = createElement("p", "reviewText", review)
            reviewText.innerText = this.text
            const reviewName = createElement("p", "reviewName", review)
            reviewName.innerText = this.name
        }
    }
    
    const review1 = new reviewClass(logoImport, "Review", "The restaurant is amazing")
    const review2 = new reviewClass(logoImport, "Review2", "The restaurant is amazing")
    const review3 = new reviewClass(logoImport, "Review3", "The restaurant is amazing")
    const review4 = new reviewClass(logoImport, "Review4", "The restaurant is amazing")
    
    // gallery Section
    
    const gallerySection = createElement("section", "gallerySection", mainContainer)
    const gallerySectionH1 = createElement("h1", "", gallerySection)
    gallerySectionH1.innerText = "What You Find Inside"
    
    const galleryContainer = createElement("div", "galleryContainer", gallerySection)
    
    class galleryItem {
        constructor(imageSrc, description) {
            this.image = new Image()
            this.image.src = imageSrc
            this.image.className = "galleryItemPhoto"
            this.description = description
            this.createDOMElement()
        }
        createDOMElement() {
            const galleryItem = createElement("div", "galleryItem", galleryContainer)
            const photoContainer = createElement("div", "photoContainer", galleryItem)
            photoContainer.appendChild(this.image)
            const description = createElement("p", "galleryDescription", galleryItem)
            description.innerText = this.description
        }
    }
    
    const galleryItem1 = new galleryItem(logoImport, "Photo Description 1")
    const galleryItem2 = new galleryItem(logoImport, "Photo Description 1")
    const galleryItem3 = new galleryItem(logoImport, "Photo Description 1")
    const galleryItem4 = new galleryItem(logoImport, "Photo Description 1")
    
    
    const bookTableButton = createElement("button", "bookTableButton", gallerySection)
    bookTableButton.innerText = "Book Table"
    
}