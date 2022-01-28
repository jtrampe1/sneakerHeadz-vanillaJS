import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, push, set, get } from 'firebase/database'
import { db, storage } from "./libs/firebase/firebaseConfig";

document.forms["sneakerForm"].addEventListener("submit", onAddSneaker);
document.querySelector("#sneakerImage").addEventListener("change", onImageSelected);


// Loading Form Submit Event Handler
function onAddSneaker(e) {
    e.preventDefault();
    uploadNewSneaker();
}


// input change event listener function
function onImageSelected(e) {
    //selected file
    // it is stored in an array file[fileObjects, fileObj, fileObj]
    let file = e.target.files[0];

    // update the display with the requested image
    document.querySelector(".display img").src = URL.createObjectURL(file);
}

// Upload form fields from storage and RTD
async function uploadNewSneaker() {
    const sneakerName = document.querySelector('#sneakerName').value.trim();
    const file = document.querySelector('#sneakerImage').files[0]


    // Set path to storage for the image
    const imageRef = storageRef(storage, `gallery/${file.name}`);
    // Set path to RTD for the image
    const dataRef = databaseRef(db, 'gallery');
    // Upload image return
    const uploadResult = await uploadBytes(imageRef, file);
    // Asking for the URL which will use in the src element in the storefront
    const imageUrl = await getDownloadURL(imageRef)
    console.log(imageUrl)
    const storagePath = uploadResult.metadata.fullPath;
    // Key that firebase generated
    const itemRef = await push(dataRef)


    set(itemRef, {
        key: itemRef.key,
        sku: `snkrs${itemRef.key}`,
        imageUrl,
        storagePath,
        sneakerName
    })

}


// File Input Change Handler
// async function testUpload(file){
//     // storageRef - path to the data
//     const imageRef = storageRef(storage, file.name);
//     // uploadBytes - passs the file from the input file type
//     const confirmation = await uploadBytes(imageRef, file);
//     console.log(confirmation.metadata.fullPath);
// }