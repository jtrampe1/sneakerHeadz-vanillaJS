// Gallery Template

function galleryTemplate({ key, sneakerName, imageUrl }) {
    const template = `
    <div class="single-img" data-key"${key}">
        <img src="${imageUrl}" alt="${sneakerName}" width="335px" height="225px">
    </div>
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element
}

export { galleryTemplate }