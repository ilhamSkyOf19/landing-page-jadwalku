document.addEventListener('click', e => {
    const inputSearchHeader = document.querySelector('.input-search-header');
    const aksiSectionOne = document.querySelectorAll('.a-aksi-section-1');
    if (e.target.classList.contains('icon-search-header')) {
        inputSearchHeader.classList.add('input-search-header-active');
        inputSearchHeader.classList.remove('input-search-header-hiden');
    };
    if (!e.target.classList.contains('icon-search-header') && !e.target.classList.contains('input-search-header')) {
        inputSearchHeader.classList.remove('input-search-header-active');
        inputSearchHeader.classList.add('input-search-header-hiden');
    };
    if (e.target.classList.contains('a-aksi-section-1')) {

        aksiSectionOne.forEach(element => {
            element.classList.remove('a-aksi-section-1-active');
            element.classList.add('a-aksi-section-1-hidden')
        });

        e.target.classList.remove('a-aksi-section-1-hidden');
        e.target.classList.add('a-aksi-section-1-active')
    };

});