import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems);
    
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMurkup);

function createGalleryItemsMurkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="" title="${description}"/>
            </a>
        </div>
        `
    })
        .join('');
    
}

let gallery = new SimpleLightbox('.gallery a', {captionDelay: 250});
gallery.on('show.simplelightbox', function () {
    
});

