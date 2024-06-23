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
// section 2
const header = document.getElementById('header');
const classHeader = document.querySelector('.header');
const classTitle = document.querySelector('.title-header');
const classSearchUnduh = document.querySelector('.container-search-unduh');
const classListHeader = document.querySelector('.list-header');
const classTextSection1 = document.querySelector('.text-section-1');
const classThumbnailSection1 = document.querySelector('.thumbnail-section-1');
const classH2Section2 = document.querySelector('.h-2-title-section-2');
const classImgSection2 = document.querySelector('.element-img-section-2');
const classP1Section1 = document.querySelector('.p-1-text-section-2');
const classP2Section1 = document.querySelector('.p-2-text-section-2');
const ulSection2 = document.querySelector('.ul-section-2');
// section 3
// text 1 vol 1
const h2Text1section3Vol1 = document.querySelector('.h2-text-1-section-3');
const p1Text1Section3Vol1 = document.querySelector('.p-1-text-1-section-3');
const p2Text1Section3Vol1 = document.querySelector('.p-2-text-1-section-3');
// text 2 vol 1
const h2Text2section3Vol1 = document.querySelector('.h2-text-2-section-3');
const p1Text2Section3Vol1 = document.querySelector('.p-1-text-2-section-3');
const p2Text2Section3Vol1 = document.querySelector('.p-2-text-2-section-3');
// text 1 vol 1
const h2Text1section3Vol2 = document.querySelector('.container-text-2-h2-section-3');
const p1Text1section3Vol2 = document.querySelector('.container-text-2-p-1-text-1-section-3');
const p2Text1section3Vol2 = document.querySelector('.container-text-2-p-2-text-1-section-3');
// text 2 vol 2
const h2Text2section3Vol2 = document.querySelector('.container-text-2-text-2-h2-section-3');
const p1Text2section3Vol2 = document.querySelector('.container-text-2-p-1-text-2-section-3');
const p2Text2section3Vol2 = document.querySelector('.container-text-2-p-2-text-2-section-3');

// img section 3
const imgSection3 = document.querySelector('.content-img-section-3');

// load
window.addEventListener('load', () => {
    classHeader.classList.add('header-active');
    classListHeader.classList.add('content-active');
    classTitle.classList.add('content-active');
    classSearchUnduh.classList.add('content-active');
    classTextSection1.classList.add('content-active');
    classThumbnailSection1.classList.add('content-active');
});

// Paralax active
class Paralax {
    constructor(scroll) {
        this.scroll = scroll;
    };

    ParalaxActive(element, event, value) {
        if (this.scroll > value) {
            element.classList.add(event);
        };
    };

    ParalaxHidden(element, event, value) {
        if (this.scroll < value) {
            element.classList.remove(event);
        };
    };
};

// scroll 
window.addEventListener('scroll', () => {
    let scrolY = window.scrollY; // Mendapatkan posisi scroll
    // section 2
    classTextSection1.style.transform = `translate( ${scrolY * -0.3 + '%'}, ${scrolY * -0.3 + '%'})`;
    classThumbnailSection1.style.transform = `translate( ${scrolY * 0.3 + '%'}, ${scrolY * -0.3 + '%'})`;
    console.log(scrolY);

    const section = new Paralax(scrolY);
    // h2
    section.ParalaxActive(classH2Section2, 'content-active', 258);
    section.ParalaxHidden(classH2Section2, 'content-active', 258);
    // img
    section.ParalaxActive(classImgSection2, 'content-active', 290);
    section.ParalaxHidden(classImgSection2, 'content-active', 290);
    // p1
    section.ParalaxActive(classP1Section1, 'content-active', 280);
    section.ParalaxHidden(classP1Section1, 'content-active', 280);
    // p2
    section.ParalaxActive(classP2Section1, 'content-active', 350);
    section.ParalaxHidden(classP2Section1, 'content-active', 350);
    // ul 
    section.ParalaxActive(ulSection2, 'content-active', 450);
    section.ParalaxHidden(ulSection2, 'content-active', 450);

    // section 3
    // img section 3
    section.ParalaxActive(imgSection3, 'content-active', 844);
    section.ParalaxHidden(imgSection3, 'content-active', 844);
    // h2 text 1 vol 1
    section.ParalaxActive(h2Text1section3Vol1, 'content-active', 715);
    section.ParalaxHidden(h2Text1section3Vol1, 'content-active', 715);
    // h2 text 2 vol 1
    section.ParalaxActive(h2Text2section3Vol1, 'content-active', 890);
    section.ParalaxHidden(h2Text2section3Vol1, 'content-active', 890);
    // h2 text 1 vol 2
    section.ParalaxActive(h2Text1section3Vol2, 'content-active', 715);
    section.ParalaxHidden(h2Text1section3Vol2, 'content-active', 715);
    // h2 text 2 vol 2
    section.ParalaxActive(h2Text2section3Vol2, 'content-active', 890);
    section.ParalaxHidden(h2Text2section3Vol2, 'content-active', 890);
    // p1 text 1 vol 1
    section.ParalaxActive(p1Text1Section3Vol1, 'content-active', 740);
    section.ParalaxHidden(p1Text1Section3Vol1, 'content-active', 740);
    // p2 text 1 vol 1
    section.ParalaxActive(p2Text1Section3Vol1, 'content-active', 780);
    section.ParalaxHidden(p2Text1Section3Vol1, 'content-active', 780);
    // p1 text 2 vol 1
    section.ParalaxActive(p1Text2Section3Vol1, 'content-active', 915);
    section.ParalaxHidden(p1Text2Section3Vol1, 'content-active', 915);
    // p2 text 2 vol 1
    section.ParalaxActive(p2Text2Section3Vol1, 'content-active', 930);
    section.ParalaxHidden(p2Text2Section3Vol1, 'content-active', 930);
    // p1 text 1 vol 2
    section.ParalaxActive(p1Text1section3Vol2, 'content-active', 740);
    section.ParalaxHidden(p1Text1section3Vol2, 'content-active', 740);
    // p2 text 1 vol 2
    section.ParalaxActive(p2Text1section3Vol2, 'content-active', 780);
    section.ParalaxHidden(p2Text1section3Vol2, 'content-active', 780);
    // p1 text 2 vol 2
    section.ParalaxActive(p1Text2section3Vol2, 'content-active', 915);
    section.ParalaxHidden(p1Text2section3Vol2, 'content-active', 915);
    // p2 text 2 vol 2
    section.ParalaxActive(p2Text2section3Vol2, 'content-active', 930);
    section.ParalaxHidden(p2Text2section3Vol2, 'content-active', 930);


});