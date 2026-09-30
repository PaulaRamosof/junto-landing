// ==========================================
// INTERACTIVIDAD JAVASCRIPT - PROYECTO JUNTO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú Hamburguesa Móvil (Off-Canvas)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Modal de Simulación Biométrica (Huella Dactilar)
    const btnSimularHuella = document.getElementById('btnSimularHuella');
    const modalHuella = document.getElementById('modalHuella');
    const closeModal = document.getElementById('closeModal');
    const statusHuella = document.getElementById('statusHuella');

    if (btnSimularHuella && modalHuella) {
        btnSimularHuella.addEventListener('click', () => {
            modalHuella.style.display = 'flex';
            statusHuella.textContent = 'Leyendo huella dactilar...';
            statusHuella.style.color = '#E65100';

            // Simular tiempo de lectura biométrica de 2 segundos
            setTimeout(() => {
                statusHuella.textContent = '¡Huella Confirmada! Acceso Concedido.';
                statusHuella.style.color = '#25D366';
            }, 2000);
        });

        closeModal.addEventListener('click', () => {
            modalHuella.style.display = 'none';
        });
    }

    // 3. Modal de Simulación de Escaneo de Código QR
    const btnSimularQR = document.getElementById('btnSimularQR');
    const modalQR = document.getElementById('modalQR');
    const closeModalQR = document.getElementById('closeModalQR');

    if (btnSimularQR && modalQR) {
        btnSimularQR.addEventListener('click', () => {
            modalQR.style.display = 'flex';
        });

        closeModalQR.addEventListener('click', () => {
            modalQR.style.display = 'none';
        });
    }

    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modalHuella) {
            modalHuella.style.display = 'none';
        }
        if (event.target === modalQR) {
            modalQR.style.display = 'none';
        }
    });

    console.log('Script de JUNTO cargado correctamente.');
});
