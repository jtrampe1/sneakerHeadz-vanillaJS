import { ref as dataRef, get, set, update } from 'firebase/database';
import { db } from './libs/firebase/firebaseConfig';
import { galleryTemplate } from './templates/galleryTemplate';


async function pageInit() {
    const galleryRef = dataRef(db, 'gallery/');
    const gallerySnapShot = await get(galleryRef)
    const data = gallerySnapShot.val();

    const galleryImgs = Object.values(data).map(singleImg => {

        const galleryImg = galleryTemplate(singleImg)
        document.querySelector('.gallery-images').appendChild(galleryImg)

        return null

    })



}

pageInit()