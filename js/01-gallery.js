import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMurkup)

galleryContainer.addEventListener('click', showModal)
// window.addEventListener('keyup', closeModalonEscKeyPress);

// console.log(createGalleryItemsMurkup(galleryItems))

function createGalleryItemsMurkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return  `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    })
    .join('')

}

function showModal(event) {

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault()

    const originalImgUrl = event.target.dataset.source
    const imgDescription = event.target.alt

    const instance = basicLightbox.create(`
    <img src="${originalImgUrl}" alt="${imgDescription}" width="800" height="600">
`)

    instance.show()
    
    const closeModalonEscKeyPress = (event) => {
        if (event.code === 'Escape') {
            instance.close()
            window.removeEventListener('keyup', closeModalonEscKeyPress);
        }
    }

    window.addEventListener('keyup', closeModalonEscKeyPress);
}

