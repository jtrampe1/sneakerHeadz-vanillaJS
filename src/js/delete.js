import {ref as databaseRef, push, set, get, remove} from 'firebase/database'
import { db  } from "./libs/firebase/firebaseConfig";

function pageInit(){
    const key = sessionStorage.getItem('key')
    console.log(key)
    const removeSneakerRef = databaseRef(db, `sneakers/${key}`)

    remove(ref(db,`sneakers/${key}`))

}

pageInit()