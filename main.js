    'use strict';
    
    //  用來存所有被點擊的商品資訊
    let cart = [];
    const cartDOM = document.querySelector('.cart');
    const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
    
    addToCartButtonsDOM.forEach(addToCartButtonDOM =>{
        addToCartButtonDOM.addEventListener('click',()=>{
            // 抓取整個商品的資訊
            const productDom = addToCartButtonDOM.parentNode;
            const product = {
                image:productDom.querySelector('.product__image').getAttribute('src'),
                name:productDom.querySelector('.product__name').innerText,
                price:productDom.querySelector('.product__price').innerText,
            };
            
            //比對是否已被放在cart裡，若還沒就放進cart裡，存進localstorage並生成商品DOM  
            const isInCart = (cart.filter(cartItem =>(cartItem.name === product.name)).length >0 );

                if(!isInCart){
                cartDOM.insertAdjacentHTML('beforeend',
                `<div class="cart__item">
                    <img class="cart__item__image" src="${product.image}" alt="${product.name}">
                    <h3 class="cart__item__name">${product.name}</h3>
                    <h3 class="cart__item__price">${product.price}</h3>
                </div>`
                );
                cart.push(product);
                addToCartButtonDOM.innerText='In Cart'; 
                localStorage.setItem('items',JSON.stringify(cart));
                }
        });
    });

    // 比對商品介紹頁的商品是否已被放在購物車，如果是就將按鈕改為In Cart
    const productName = document.querySelectorAll('.product__name');
    const fromProContent = JSON.parse(localStorage.getItem('ProItems'));

    if(fromProContent !== null){
        for(var i = 0; i< productName.length; i++){
            if(fromProContent.name === productName[i].innerText){
                addToCartButtonsDOM[i].innerText='In Cart';
            }   
        }
    }

    // window.onload = function(){
    //     localStorage.removeItem("items");
    //     localStorage.removeItem("ProItems");
    // }



    // ---------------------------NOTE---------------------------------
    // addToCartButtonsDOM.forEach(function(addToCartButtonDOM){
    //     console.log(addToCartButtonDOM);
    // })
    // 改寫成箭頭函式：
    // addToCartButtonsDOM.forEach((addToCartButtonDOM)=>{
    //     console.log(addToCartButtonDOM);
    // });
    // 備註箭頭函式：只有單一個傳入參數時，括號(())可以不用，例如 x=>x*x
    // 花括號({})是有意義的，如果函式沒回傳東西就要花括號。例如 ()=>{}
    // 此處可省略{}此處有疑問

     // filter()會回傳符合條件的資料並塞入陣列，
     // 再用商品名稱與已經被放入陣列的資料做比對，如果陣列長度大於0，代表已有該筆商品。

     // if(isInCart === false){
    // 等同於if(!isInCart)

    

   
    













    // 陣列處理方法：
    // 1.foreach:
    // forEach()方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
    // var array1 = ['a', 'b', 'c'];
    // array1.forEach(function(element) {
    //     console.log(element);
    //   });
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
    // 因為是callback function所以要帶參數

    // 2.Array.prototype.filter()
    // filter()會回傳一個陣列，其條件是 return 後方為 true 的物件，很適合用在搜尋符合條件的資料。
    // 沒有符合條件的值時，會回傳空陣列。




    // 將新物件加到陣列
    // 再把資料轉成json
    // 在存到資料庫裡
    // localStorage.setItem('item',JSON.stringify(product));
    // console.log(localStorage.getItem('item'));