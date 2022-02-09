// Sneakers Template

import {ref as databaseRef, remove} from 'firebase/database'
import { db  } from "../libs/firebase/firebaseConfig";

function sneakerTemplate({ sneakerName, key, sneakerPrice, imageUrl, size }) {

    const template = `
    <div class="card" data-key="${key}">
        <img src="${imageUrl}" alt="${sneakerName}">
        <h3>${sneakerName}</h3>
        <p>Size (US MENS): ${size}</p>
        <h4>$${sneakerPrice}</h4>
        <div class="sneakerButtons">
            <button id="editSneaker" class="card-btn" href="#" data-key="${key}">EDIT</button>
            <button id="deleteSneaker" class="card-btn" href="#" data-key="${key}">DELETE</button>
        </div>
    </div>
    `

    const element = document.createRange().createContextualFragment(template).children[0]

    sneakerButtons(element)

    return element
}

function sneakerButtons(card){
    card.querySelector('#editSneaker').addEventListener('click',onEditSneaker)
    card.querySelector('#deleteSneaker').addEventListener('click',onDeleteSneaker)
}


function onEditSneaker(e){
   const key = e.target.dataset.key
   sessionStorage.setItem('key',key)
   window.location.assign('edit.html')

}

function onDeleteSneaker(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key',key)
    // window.location.assign('delete.html')

        console.log(key)    
        const removeSneakerRef = databaseRef(db, `sneakers/${key}`)
        remove(removeSneakerRef)

        .then(()=>{
            alert(`Deleted successfully`)
          })
          .catch((error)=>{
            alert("Deleted successfully. Refresh Page")
          })
    

}

export { sneakerTemplate }