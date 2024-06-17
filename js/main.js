// input header
const inputSearchHeader = document.querySelector('.input-search-header');
// aksi section 1
const aksiSectionOne = document.querySelectorAll('.a-aksi-section-1');
// list header
const listHeader = document.querySelector('.list-header');
// icon X list header
const iconX = document.querySelector('.icon-x-list-header');
document.addEventListener('click', e => {
    // event input header
    if (e.target.classList.contains('icon-search-header')) {
        inputSearchHeader.classList.add('input-search-header-active');
        inputSearchHeader.classList.remove('input-search-header-hiden');
    };
    // input input header
    if (!e.target.classList.contains('icon-search-header') && !e.target.classList.contains('input-search-header')) {
        inputSearchHeader.classList.remove('input-search-header-active');
        inputSearchHeader.classList.add('input-search-header-hiden');
    };
    // event aksi section 1
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
    }

});

// bars header
const barsHeader = document.querySelector('.bars-header');
// media hp
let mediaHp = window.matchMedia("(max-width: 450px)")

mediaHp.addEventListener("change", () => {
    if (mediaHp.matches) {
        barsHeader.classList.add('bars-header-active');
    } else {
        barsHeader.classList.remove('bars-header-active');
    }
})