import productDetailsPage from './productDetailsPage'

const productDetail = new productDetailsPage

class product{
    
    constructor(){  
        this.itemName = this.itemName()
        this.itemPrice = this.itemPrice()
    }

    itemName(){
        productDetail.productTitle().invoke('text').then(text2 => {             
            this.itemName = text2;
        })
    }    
    
    itemPrice(){
        productDetail.productPrice().invoke('text').then(text2 => {
            this.itemPrice = text2
        })
    }

}

export default product




