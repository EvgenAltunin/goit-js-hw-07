import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMurkup);

galleryContainer.addEventListener('click', onGalleryImgClick);

function createGalleryItemsMurkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
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
        .join('');

}

function onGalleryImgClick(event) {

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault();

    const originalImgUrl = event.target.dataset.source;
    const imgDescription = event.target.alt;
    const html = `<img src="${originalImgUrl}" alt="${imgDescription}" width="800" height="600">`
    
    const instance = basicLightbox.create(html,
        {
            onShow: (instance) => document.addEventListener('keyup', closeModalonEscKeyPress),
            onClose: (instance) => document.removeEventListener('keyup', closeModalonEscKeyPress) 
        }
    );

    instance.show();
    
    function closeModalonEscKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        }        
    }
}

