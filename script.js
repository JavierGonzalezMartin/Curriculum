addEventListener('DOMContentLoaded',()=>{
 const menu_btn = document.querySelector('#navbtn');
    if (menu_btn){
        menu_btn.addEventListener('click', ()=>{
            const menu_items = document.querySelector('#navitems');
            menu_items.classList.toggle('showmenu');
        })
     }
})