function billCalculator(prices, items){
    // This is Unique Array, give data like{pen: 3, book: 1}
    let itemCount = {};

    // This loop Merge Multiple Items into Single item.
    for(let item of items){
        if(item in itemCount){
            itemCount[item]++;
        } else{
            itemCount[item] = 1;
        }
    }
//-------------------------------------------------------------------------------

    // This Variable Count Total Price
    let totalPrice = 0;

    // This Loop for get the item One By One in Object like: pen book, untill end loops.
    for(let item in itemCount){

        // Prices is a Object item is a Key, Keyin = Valueout, untill end loops.
        let price = prices[item];//if object have same name key then give value, or undifiend?


        // itemCount is Object , and the item is a key, Keyin = Valueout.
        let quantity = itemCount[item]; // Like: 3 1 (pen: 3, book:1)


        // Now Calculate Price * Quantity like:  10*3 then 20*1 untill end loops.
        let quantityToPrice = price * quantity;
        

        // Now quantityToPrice + total , again, quantityToPrice + total, untill end loops.
        totalPrice += quantityToPrice; // this is a shorthand.
        // totalPrice = totalPrice + quantityToPrice;
    }
    return{
        total: totalPrice,
        Items: itemCount
    };
}

const price = {pen: 10, book: 50};
const item =  ["pen", "pen", "book", "pen"];
const outPut = billCalculator(price, item);
console.log(outPut);