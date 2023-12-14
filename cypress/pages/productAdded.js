import cartPage from "./cartPage"

const cart = new cartPage

class productAdded{
    
    constructor(positionTitle, positionPrice){  
        this.itemName = this.itemNameAdded(positionTitle) 
        //this.itemPrice = this.itemPriceAdded(positionPrice)  
    }

    itemNameAdded(positionTitle){
        cart.productTitleAdded(positionTitle).invoke('text').then(title => {             
            this.itemName = title;
        })
    }    
    
    // itemPriceAdded(positionPrice){
    //     positionPrice = positionPrice + 2
    //     cart.productPriceAdded(positionPrice).invoke('text').then(price => {
    //         this.itemPrice = price
    //     })
    // }

}

export default productAdded




