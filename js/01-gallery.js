import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMurkup)

galleryContainer.addEventListener('click', onGalleryContainerClick)

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

function onGalleryContainerClick(event) {
    // console.log(event.target.nodeName)

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault()


    const originalImgUrl = event.target.dataset.source
    console.log(originalImgUrl)
}