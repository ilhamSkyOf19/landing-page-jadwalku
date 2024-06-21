// class
class Active {
    constructor(area, even) {
        this.area = area;
        this.even = even;
    }

    // event klik active
    eventKlikActive(elemenKlik, elemenRubah, elemenAktif, elemenHidden) {
        this.area.addEventListener(`${this.even}`, e => {
            if (e.target.classList.contains(`${elemenKlik}`)) {
                elemenRubah.classList.add(`${elemenAktif}`);
                elemenRubah.classList.remove(`${elemenHidden}`);
            };
        });
    };

    eventKlikHidden(elemenRubah, elemenAktif, elementHidden, ...elemenKlik) {
        this.area.addEventListener(`${this.even}`, e => {
            let shouldHide = true;
            for (const element of elemenKlik) {
                if (e.target.classList.contains(element)) {
                    shouldHide = false;
                    break;
                };
            };
            if (shouldHide) {
                elemenRubah.classList.remove(elemenAktif);
                elemenRubah.classList.add(elementHidden);
            }
        });
    };
};

// input header active
const inputSearchHeader = document.querySelector('.input-search-header');
const inputSearch = new Active(document, 'click');
inputSearch.eventKlikActive('icon-search-header', inputSearchHeader, 'input-search-header-active', 'input-search-header-hiden');
// input header hidden
inputSearch.eventKlikHidden(inputSearchHeader, 'input-search-header-active', 'input-search-header-hiden', 'icon-search-header', 'input-search-header');


// aksi section 1
const aksiSectionOne = document.querySelectorAll('.a-aksi-section-1');
// list header
const listHeader = document.querySelector('.list-header');
// icon X list header
const iconX = document.querySelector('.icon-x-list-header');
document.addEventListener('click', e => {
    if (e.target.classList.contains('a-aksi-section-1')) {
        aksiSectionOne.forEach(element => {
            element.classList.remove('a-aksi-section-1-active');
            element.classList.add('a-aksi-section-1-hidden')
        });

        e.target.classList.remove('a-aksi-section-1-hidden');
        e.target.classList.add('a-aksi-section-1-active')
    };
    // event aksi section 1
    if (!e.target.classList.contains('a-aksi-section-1')) {
        aksiSectionOne.forEach(element => {
            element.classList.add('a-aksi-section-1-hidden');
            element.classList.remove('a-aksi-section-1-active');
        })
    };

    // event bars header
    if (e.target.classList.contains('bars-header-i')) {
        listHeader.classList.add('list-header-active');
        barsHeader.classList.remove('bars-header-active');
        iconX.classList.add('icon-x-list-header-active');
        // event animasi icon x
        if (iconX.classList.contains('icon-x-list-header-active')) {
            iconX.classList.add('animasi-icon-x-list-header');
        };
    };
    // event icon x
    if (e.target.classList.contains('icon-x-list-header')) {
        listHeader.classList.remove('list-header-active');
        barsHeader.classList.add('bars-header-active');
        iconX.classList.add('icon-x-header-active');
        iconX.classList.remove('animasi-icon-x-list-header');
    };

    // event bars header 
    if (!e.target.classList.contains('bars-header-i') && !e.target.classList.contains('list-header') && !e.target.classList.contains('a-list-header')) {
        listHeader.classList.remove('list-header-active');
        barsHeader.classList.add('bars-header-active');
        iconX.classList.add('icon-x-header-active');
        iconX.classList.remove('animasi-icon-x-list-header');
    }

});

// bars header
const barsHeader = document.querySelector('.bars-header');


// paralax

// saat halaman di refres
const header = document.getElementById('header');
const classHeader = document.querySelector('.header');
const classTitle = document.querySelector('.title-header');
const classSearchUnduh = document.querySelector('.container-search-unduh');
const classListHeader = document.querySelector('.list-header');
const classTextSection1 = document.querySelector('.text-section-1');
const classThumbnailSection1 = document.querySelector('.thumbnail-section-1');

// load
window.addEventListener('load', () => {
    classHeader.classList.add('header-active');
    classListHeader.classList.add('content-active');
    classTitle.classList.add('content-active');
    classSearchUnduh.classList.add('content-active');
    classTextSection1.classList.add('content-active');
    classThumbnailSection1.classList.add('content-active');
});

// scroll 
window.addEventListener('scroll', () => {
    let scrolY = window.scrollY; // Mendapatkan posisi scroll
    classTextSection1.style.transform = `translate( ${scrolY * -0.3 + '%'}, ${scrolY * -0.3 + '%'})`;
    classThumbnailSection1.style.transform = `translate( ${scrolY * 0.3 + '%'}, ${scrolY * -0.3 + '%'})`;
});