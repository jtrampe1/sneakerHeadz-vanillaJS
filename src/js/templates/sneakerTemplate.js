// Sneakers Template

function sneakerTemplate({ sneakerName, key, sneakerPrice, imageUrl }) {
    const template = `
    <div class="card" data-key="${key}">
        <img src="${imageUrl}" alt="${sneakerName}">
        <h3>${sneakerName}</h3>
        <h4>$${sneakerPrice}</h4>
        <a href="#">BUY</a>
    </div>
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element
}

export { sneakerTemplate }