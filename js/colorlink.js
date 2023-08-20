menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const itemReciente = document.querySelector('.active');
        itemReciente.classList.remove('active');
        e.target.classList.add('active'); 
    });
});