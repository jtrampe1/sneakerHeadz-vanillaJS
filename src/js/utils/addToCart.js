import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';


function addToCart(e){
    const addToCartBtn = document.querySelector('.buy-btn');

    addToCartBtn.addEventListener('click', onAddToCart);

    return null;

}

async function onAddToCart(){
    const sneakerRef = dataRef(db, 'sneakers/');
}

export {addToCart}