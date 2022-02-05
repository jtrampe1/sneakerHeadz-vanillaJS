import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";


    // read data in
    // update form values
    // submit event
    // pull data from the values
    // create object
    // send the object to firebase

const editSneakerForm = document.forms['editSneakerForm']
document.querySelector("#sneakerImage").addEventListener("change", onImageSelected);

async function pageInit(){
    const key = sessionStorage.getItem('key')
    const sneakerRef = databaseRef(db,`sneakers/${key}`)
    const sneakerSnapShot = await get(sneakerRef)

    const sneaker = sneakerSnapShot.val()
    
    // formatter for Form
    if(sneakerSnapShot.exists()){
        setFieldValues(sneakerSnapShot.val())
    }

    editSneakerForm.addEventListener('submit', onUpdateSneaker)
  
}


function onUpdateSneaker(e){
    e.preventDefault();
    updateSneaker()
}

function setFieldValues({sneakerName, imageUrl, size, sneakerPrice}){

    editSneakerForm.elements['sneakerName'].value = sneakerName
    editSneakerForm.elements['size'].value = size
    editSneakerForm.elements['sneakerPrice'].value = sneakerPrice
    document.querySelector('#sneaker-image img').src = imageUrl

}


 function onImageSelected(e) {

    let file = e.target.files[0];
    document.querySelector(".display img").src = URL.createObjectURL(file);
}



async function updateSneaker(){
    const sneakerName = editSneakerForm.elements['sneakerName'].value.trim()
    const size = editSneakerForm.elements['size'].value.trim()
    const sneakerPrice = editSneakerForm.elements['sneakerPrice'].value.trim()
    const file = editSneakerForm.elements['sneakerImage'].files[0]


 
    const imageRef = storageRef( storage, `sneakers/${file.name}`);
        
    const uploadResult = await uploadBytes(imageRef, file);

        const storagePath = uploadResult.metadata.fullPath;

  
    const key = sessionStorage.getItem('key')
    const dataRef = databaseRef(db,`sneakers/${key}`)
    const imageUrl =  await getDownloadURL(imageRef) 


    set(dataRef, {
        key,
        sku:`snkrs${key}`,
        imageUrl,
        storagePath,
        sneakerName,
        sneakerPrice,
        size
    })

    .then(()=>{
        alert(`${sneakerName} updated successfully`)
      })
      .catch((error)=>{
        alert("Error. Try Again")
      })
}

pageInit()