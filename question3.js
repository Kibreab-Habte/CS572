
const item = {
    "name" : "Avocado",
    "type" : "Fruit",
    "category" : "Food",
    "price" : 200
}

const applyCoupon = item => discount =>{

    if(discount > 0 && discount < 100){
        var price = item.price;
        var discountedPrice = price - price *discount/100
        item.price = discountedPrice;
    }
    return item;
}

console.log(applyCoupon(item)(10).price ===180)