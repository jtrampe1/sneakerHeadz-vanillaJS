import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {sneakerTemplate} from './templates/sneakerTemplate'


async function pageInit(){
    const sneakerRef = dataRef(db, 'sneakers/');
    const sneakerSnapShot = await get(sneakerRef)
    const data = sneakerSnapShot.val();
   
    const cards = Object.values(data).map(sneaker=>{
        
        const card = sneakerTemplate(sneaker)
        document.querySelector('.card-container').appendChild(card)
 

        return null

    })
       


}




export {pageInit}
