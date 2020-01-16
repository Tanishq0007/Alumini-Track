var active_elem = document.querySelector('.active'),
    selector = document.querySelector('.selector'),
    feed_box = document.querySelector('.feed-main-box'),
    account_box = document.querySelector('.account-box'),
    pic_box = document.querySelector('.pic-box'),
    peek_box = document.querySelector('.peek'),
    post_content = document.querySelector('.post-content'),
    gear = document.querySelector('.setting-opt'),
    gear_options = document.querySelector('.setting-options');
    

Array.from(selector.children).map((elem, id) => {
    elem.addEventListener('click', () => {
        active_elem.classList.remove('active');
        elem.classList.add('active');
        
        active_elem = elem;
        
        
        if(id === 0) {
            feed_box.style.display = 'block';
            account_box.style.display = 'none';
        } else if(id === 1) {
            feed_box.style.display = 'none';
            account_box.style.display = 'block';
        }
        
    })
})


Array.from(post_content.children).map((box, id) => {
    box.addEventListener('mouseover', () => {
        post_content.children[id].children[0].style.display = 'block';
    })
})


Array.from(post_content.children).map((box, id) => {
    box.addEventListener('mouseout', () => {
        post_content.children[id].children[0].style.display = 'none';
    })
})

gear.addEventListener('click', () => {
    gear.classList.toggle('active');
    gear_options.classList.toggle('show');
})