import productPage from './productPage'

const product = new productPage
const firstValue = 1

class productToAdd{
    
    constructor(position){  
        this.itemName = this.itemNameToAdd(position) 
        this.itemPrice = this.itemPriceToAdd(position) 
    }

    
    itemNameToAdd(position){
        product.itemName(position).invoke('text').then(name => {  
            this.itemName = name;
        })
    }    
    
    itemPriceToAdd(position){
        product.itemPrice(position).invoke('text').then(price => {
            let value = price
            this.itemPrice = value.slice(firstValue);
        })
    }

    addToTheCartButton(position){
        product.addToTheCartButtonPerItem(position).click()        
    }

}

export default productToAdd




