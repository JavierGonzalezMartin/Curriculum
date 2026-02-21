addEventListener('DOMContentLoaded', () => {
    const menu_btn = document.querySelector('#burgerbtn');
    const menu_items = document.querySelector('#navitems');
    const cerrar = document.querySelector('#cerrarbtn');

    if (menu_btn && menu_items) {
        menu_btn.addEventListener('click', () => {
            menu_items.classList.add('showmenu');
        });
    }

    if (cerrar && menu_items) {
        cerrar.addEventListener('click', () => {
            menu_items.classList.remove('showmenu');
        });
    }

    const emailValor = document.getElementById('emailvalor');
    if (emailValor) {
        window.CopiarEmail = async () => {
            const textoemail = emailValor.innerText;
            try {
                await navigator.clipboard.writeText(textoemail);
                console.log('Contenido copiado al portapapeles: ' + textoemail);
                // Optional: add a visual feedback here
            } catch (err) {
                console.error('Error al copiar: ', err);
            }
        };
    }
});


