document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.tabs-nav__btn').forEach(function(tabContent) {
                tabContent.classList.remove('tabs-nav__btn--active') 
            })
            event.currentTarget.classList.add('tabs-nav__btn--active');
            document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
            })    
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
        });
    });
})
