addEventListener('DOMContentLoaded',()=>{
 const menu_btn = document.querySelector('#navbtn');
 if (menu_btn){
     menu_btn.addEventListener('click', ()=>{
        const menu_items = document.querySelector('#navitems');
            menu_items.classList.toggle('showmenu');
        })
    }
})

let textoemail = document.getElementById('emailvalor').innerHTML;
const CopiarEmail = async () => {
   try {
    await navigator.clipboard.writeText(textoemail);
    console.log('Contenido copiado al portapapeles:'+textoemail);
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

