import { ref as storageRef } from "firebase/database";
import { db,storage } from "../libs/firebase/firebaseConfig";
import {ref as databaseRef, push, set, get} from 'firebase/database'

    
        async function editSneaker() {
            // const sneakerName = document.querySelector('#edit-sneaker-name').value.trim();
            // const file = document.querySelector('#sneakerImage').files[0]
            // const sneakerPrice = document.querySelector('#edit-sneaker-price').value.trim();
            // const size = document.querySelector('#edit-size');
          
           
            // // Set path to storage for the image
            // const imageRef =     storageRef( storage, `sneakers/${file.name}`);
            // // Set path to RTD for the image
            // const dataRef =  databaseRef( db, 'sneakers');
            // // Upload image return
            // const uploadResult = await uploadBytes(imageRef, file);
            // // Asking for the URL which will use in the src element in the storefront
            // const imageUrl =  await getDownloadURL(imageRef) 
            // console.log(imageUrl)
            // const storagePath = uploadResult.metadata.fullPath;
            // // Key that firebase generated
            // const itemRef = await push(dataRef)
            
            
            // set(itemRef,{
            //   key:itemRef.key,
            //   sku:`snkrs${itemRef.key}`,
            //   imageUrl,
            //   storagePath,
            //   sneakerName,
            //   sneakerPrice,
            //   size
            // })
            
        }
    





export {editSneaker}