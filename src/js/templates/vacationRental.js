/*
    Templating
        template literals setup
*/

function vacationRental({key,city,imagePath}){
    const template = `
        <aside class="vacation-rental" data-key="${key}">

            <figure>
                <img src="${imagePath}" width="160" alt="property in ${city}">
                <figcaption>
                    <h2>City</h2>
                </figcaption>
            </figure>

            <footer>
                <button id="edit" data-key="${key}">edit</button>
                <button id="delete" data-key="${key}">delete</button>
            </footer>

        </aside>
    `

    const element = document.createRange().createContextualFragment(template).children[0]

    addVacationControls(element)

    return element
}

function addVacationControls(rental){
    rental.querySelector('#edit').addEventListener('click', onEditRental)
    rental.querySelector('#delete').addEventListener('click', onRemoveRental)

}

function onEditRental(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onRemoveRental(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}



export{vacationRental}