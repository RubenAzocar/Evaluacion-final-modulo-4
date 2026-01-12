
// Clase principal para administrar los usuarios y asociada a los botones del HTML
class AdministradorUsuarios {
    constructor() {
        // Almacena los usuarios obtenidos del endpoint
        this.usuarios = [];
        // Referencia al div de salida en el HTML
        this.salida = document.getElementById('salida');
        // Llama a la función para obtener los datos al instanciar la clase
        this.obtenerDatos();
    }

    // Obtiene los datos de usuarios usando XMLHttpRequest y reemplaza los nombres por nombres españoles
    obtenerDatos() {
        const nombresEspanoles = [
            { nombre: 'Carlos García' },
            { nombre: 'Juan Pérez' },
            { nombre: 'Luis Fernández' },
            { nombre: 'Alberto Sánchez' },
            { nombre: 'Ruben Martínez' },
            { nombre: 'Sebastián López' },
            { nombre: 'Constanza Ramírez' },
            { nombre: 'María Torres' },
            { nombre: 'Ximena Castillo' },
            { nombre: 'Joselin Herrera' }
        ];
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                // Reemplaza los nombres y username por nombres españoles
                datos = datos.map((usuario, i) => {
                    const nombreNuevo = nombresEspanoles[i % nombresEspanoles.length].nombre;
                    // Genera username a partir del nombre
                    const usernameNuevo = nombreNuevo.toLowerCase().replaceAll(' ', '.');
                    return {
                        ...usuario,
                        name: nombreNuevo,
                        username: usernameNuevo
                    };
                });
                this.usuarios = datos;
            }
        };
        xhr.send();
    }

    // Limpia el contenido del div de salida
    limpiarSalida() {
        this.salida.innerHTML = '';
    }

    // Muestra los nombres de todos los usuarios en tarjetas Bootstrap
    listarNombres() {
        this.limpiarSalida();
        if (this.usuarios.length === 0) {
            this.salida.innerHTML = '<div class="alert alert-info">Cargando datos...</div>';
            return;
        }
        // Crea tarjetas para cada nombre
        const tarjetas = this.usuarios.map(u => `
            <div class="card mb-3 animate__animated animate__fadeInDown" style="background: #e3f2fd;">
                <div class="card-body">
                    <h5 class="card-title">${u.name}</h5>
                </div>
            </div>
        `).join('');
        this.salida.innerHTML = tarjetas;
        // También muestra por consola
        console.log('Nombres de usuarios:', this.usuarios.map(u => u.name));
    }

    // Solicita el nombre de usuario y muestra su info básica en una tarjeta
    mostrarInfoBasicaPorNombre() {
        this.limpiarSalida();
        if (this.usuarios.length === 0) {
            this.salida.innerHTML = '<div class="alert alert-info">Cargando datos...</div>';
            return;
        }
        const nombre = prompt('Ingrese el nombre del usuario:');
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre?.toLowerCase());
        if (usuario) {
            const info = `
                <div class="card animate__animated animate__zoomIn" style="background: #fff3cd;">
                    <div class="card-body">
                        <h5 class="card-title">${usuario.name}</h5>
                        <p class="card-text"><strong>Username:</strong> ${usuario.username}</p>
                        <p class="card-text"><strong>Correo:</strong> ${usuario.email}</p>
                    </div>
                </div>
            `;
            this.salida.innerHTML = info;
            console.log('Información básica:', usuario.username, usuario.email);
        } else {
            this.salida.innerHTML = '<div class="alert alert-danger">Usuario no encontrado.</div>';
        }
    }

    // Solicita el nombre de usuario y muestra su dirección en una tarjeta
    mostrarDireccionPorNombre() {
        this.limpiarSalida();
        if (this.usuarios.length === 0) {
            this.salida.innerHTML = '<div class="alert alert-info">Cargando datos...</div>';
            return;
        }
        const nombre = prompt('Ingrese el nombre del usuario:');
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre?.toLowerCase());
        if (usuario) {
            const dir = usuario.address;
            const direccion = `
                <div class="card animate__animated animate__fadeInLeft" style="background: #d1f7c4;">
                    <div class="card-body">
                        <h5 class="card-title">Dirección de ${usuario.name}</h5>
                        <p class="card-text"><strong>Calle:</strong> ${dir.street}</p>
                        <p class="card-text"><strong>Suite:</strong> ${dir.suite}</p>
                        <p class="card-text"><strong>Ciudad:</strong> ${dir.city}</p>
                        <p class="card-text"><strong>Código Postal:</strong> ${dir.zipcode}</p>
                        <p class="card-text"><strong>Geo:</strong> lat ${dir.geo.lat}, lng ${dir.geo.lng}</p>
                    </div>
                </div>
            `;
            this.salida.innerHTML = direccion;
            console.log('Dirección:', dir);
        } else {
            this.salida.innerHTML = '<div class="alert alert-danger">Usuario no encontrado.</div>';
        }
    }

    // Solicita el nombre de usuario y muestra su info avanzada en una tarjeta
    mostrarInfoAvanzadaPorNombre() {
        this.limpiarSalida();
        if (this.usuarios.length === 0) {
            this.salida.innerHTML = '<div class="alert alert-info">Cargando datos...</div>';
            return;
        }
        const nombre = prompt('Ingrese el nombre del usuario:');
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre?.toLowerCase());
        if (usuario) {
            const info = `
                <div class="card animate__animated animate__fadeInUp" style="background: #f8bbd0;">
                    <div class="card-body">
                        <h5 class="card-title">Info avanzada de ${usuario.name}</h5>
                        <p class="card-text"><strong>Teléfono:</strong> ${usuario.phone}</p>
                        <p class="card-text"><strong>Sitio web:</strong> ${usuario.website}</p>
                        <p class="card-text"><strong>Compañía:</strong> ${usuario.company.name}</p>
                        <p class="card-text"><strong>Frase:</strong> ${usuario.company.catchPhrase}</p>
                        <p class="card-text"><strong>BS:</strong> ${usuario.company.bs}</p>
                    </div>
                </div>
            `;
            this.salida.innerHTML = info;
            console.log('Información avanzada:', usuario.phone, usuario.website, usuario.company);
        } else {
            this.salida.innerHTML = '<div class="alert alert-danger">Usuario no encontrado.</div>';
        }
    }

    // Lista todas las compañías y su frase en tarjetas
    listarCompaniasYFrases() {
        this.limpiarSalida();
        if (this.usuarios.length === 0) {
            this.salida.innerHTML = '<div class="alert alert-info">Cargando datos...</div>';
            return;
        }
        const lista = this.usuarios.map(u => `
            <div class="card mb-3 animate__animated animate__fadeInRight" style="background: #ede7f6;">
                <div class="card-body">
                    <h5 class="card-title">${u.company.name}</h5>
                    <p class="card-text"><strong>Frase:</strong> ${u.company.catchPhrase}</p>
                </div>
            </div>
        `).join('');
        this.salida.innerHTML = lista;
        console.log('Compañías y frases:', this.usuarios.map(u => u.company));
    }

    // Lista los nombres de usuarios ordenados alfabéticamente en tarjetas
    listarNombresOrdenados() {
        this.limpiarSalida();
        if (this.usuarios.length === 0) {
            this.salida.innerHTML = '<div class="alert alert-info">Cargando datos...</div>';
            return;
        }
        const nombres = this.usuarios.map(u => u.name).sort((a, b) => a.localeCompare(b));
        const tarjetas = nombres.map(nombre => `
            <div class="card mb-3 animate__animated animate__fadeInDown" style="background: #b2dfdb;">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                </div>
            </div>
        `).join('');
        this.salida.innerHTML = tarjetas;
        console.log('Nombres ordenados:', nombres);
    }
}

// Instancia global asociada a los botones del HTML
const usuarios = new AdministradorUsuarios();
