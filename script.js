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

    const tab_cerrar = document.querySelector('#tabcerrarbtn');
    if (tab_cerrar) {
        tab_cerrar.addEventListener('click', (e) => {
            e.preventDefault();
            window.close();
        });
    }

    const emailValor = document.getElementById('emailvalor');
    if (emailValor) {
        window.CopiarEmail = async () => {
            const textoemail = emailValor.innerText;
            try {
                await navigator.clipboard.writeText(textoemail);
                console.log('Contenido copiado al portapapeles: ' + textoemail);
            } catch (err) {
                console.error('Error al copiar: ', err);
            }
        };
    }

    // Actualización automática de la duración de la experiencia
    const durationElement = document.getElementById('experiencia-duracion');
    if (durationElement) {
        const startDate = new Date(2004, 0, 20); // 20 de enero de 2004
        const today = new Date();

        let years = today.getFullYear() - startDate.getFullYear();
        let months = today.getMonth() - startDate.getMonth();

        if (months < 0 || (months === 0 && today.getDate() < startDate.getDate())) {
            years--;
            months += 12;
        }

        durationElement.innerText = `Período: 20/01/2004 - Actualmente (${years} años y ${months} meses)`;
    }
});


