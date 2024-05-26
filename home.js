
const cartImg = document.getElementById("icon-cart-wrap");
const carts = document.getElementById("carts");


let open = false;
cartImg.addEventListener('click',(e) => {
    if(!open){
        carts.style.display = "flex";
        open = true;
    }
    else{
        carts.style.display = "none";
        open = false;
    }
});