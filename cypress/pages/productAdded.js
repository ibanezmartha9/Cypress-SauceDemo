import cartPage from "./cartPage"

const cart = new cartPage

class productAdded{
    
    constructor(positionTitle, positionPrice){  
        this.itemName = this.itemNameAdded(positionTitle) 
        this.itemPrice = this.itemPriceAdded(positionPrice)  
    }

    itemNameAdded(positionTitle){
        cart.productTitleAdded(positionTitle).invoke('text').then(title => {             
            this.itemName = title;
        })
    }    
    
}

export default productAdded




