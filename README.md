# Evaluación Final Módulo 4
## Aplicación de Gestión de Usuarios

Esta aplicación web permite gestionar y visualizar información de usuarios obtenidos desde la API de JSONPlaceholder. Ofrece una interfaz moderna e intuitiva para consultar datos básicos, direcciones, información de contacto y datos corporativos de los usuarios.

---

## 📁 Estructura del Proyecto

```
Evaluacion final modulo 4/
│
├── index.html                    # Página principal de la aplicación
├── README.md                     # Documentación del proyecto
│
├── css/
│   └── estilos.css              # Estilos personalizados de la interfaz
│
├── js/
│   └── usuarios.js              # Lógica de negocio y gestión de datos
│
└── assets/
    └── documents/
        └── Links GitHub.txt      # Enlaces y documentación adicional
```

---

## 🔗 Relación entre Archivos

### **index.html** (Capa de Presentación)
- **Función:** Define la estructura HTML y la interfaz de usuario
- **Relaciones:**
  - Importa `css/estilos.css` para aplicar los estilos visuales
  - Importa `js/usuarios.js` para ejecutar la lógica de la aplicación
  - Contiene 6 botones que ejecutan métodos de la clase `AdministradorUsuarios`
  - Define el div `#salida` donde se renderizan los resultados
  - Utiliza Bootstrap 5.3.2 para componentes responsivos
  - Utiliza Animate.css 4.1.1 para animaciones

### **css/estilos.css** (Capa de Estilos)
- **Función:** Define la apariencia visual de la aplicación
- **Relaciones:**
  - Es importado por `index.html` en el `<head>`
  - Estiliza los botones con clase `.btn-custom`
  - Estiliza el contenedor `.container`
  - Define gradientes personalizados para las tarjetas generadas por `usuarios.js`
  - Aplica efectos hover y transiciones a los elementos interactivos

### **js/usuarios.js** (Capa de Lógica)
- **Función:** Implementa toda la lógica de negocio de la aplicación
- **Relaciones:**
  - Es importado por `index.html` al final del `<body>`
  - Accede al DOM para obtener referencia al div `#salida`
  - Sus métodos son llamados por los eventos `onclick` de los botones
  - Genera HTML dinámico usando clases de Bootstrap
  - Utiliza XMLHttpRequest para obtener datos de la API externa
  - Modifica el contenido del `#salida` según las acciones del usuario

---

## 🔄 Flujo de Funcionamiento

```
1. CARGA INICIAL
   ├── index.html carga en el navegador
   ├── Se aplican estilos de estilos.css
   └── Se ejecuta usuarios.js
       └── Se crea instancia global 'usuarios'
           └── Constructor llama a obtenerDatos()
               └── XMLHttpRequest obtiene datos de la API
                   └── Datos se transforman (nombres españoles)

2. INTERACCIÓN DEL USUARIO
   ├── Usuario hace clic en un botón
   ├── Se ejecuta método correspondiente de AdministradorUsuarios
   ├── El método genera HTML con tarjetas Bootstrap
   ├── Se inyecta el HTML en div#salida
   └── CSS aplica estilos y animaciones a las tarjetas

3. RENDERIZADO VISUAL
   ├── Bootstrap aplica diseño responsivo
   ├── estilos.css aplica gradientes y colores personalizados
   ├── Animate.css ejecuta animaciones de entrada
   └── El usuario visualiza el resultado
```

---

## 🎨 Características Visuales

### Paleta de Colores
- **Primario:** #7c3aed (Violeta)
- **Secundario:** #06b6d4 (Cian)
- **Fondo:** Gradiente degradado (gris-azul-violeta)
- **Tarjetas:** 6 combinaciones de gradientes diferentes según el tipo de información

### Animaciones
- Efecto hover en botones (elevación y cambio de gradiente)
- Animaciones de entrada en tarjetas (fadeIn, zoomIn, slideIn)
- Transiciones suaves en todos los elementos interactivos

---

## 🚀 Funcionalidades

### 1. **Listar nombres de usuarios**
   - Muestra todos los nombres en tarjetas con fondo azul-violeta
   - Clase relacionada: `card[style*="#e3f2fd"]`

### 2. **Mostrar info básica por nombre**
   - Solicita nombre mediante prompt
   - Muestra username y email
   - Tarjetas con fondo amarillo-violeta
   - Clase relacionada: `card[style*="#fff3cd"]`

### 3. **Mostrar dirección por nombre**
   - Solicita nombre mediante prompt
   - Muestra calle, suite, ciudad, código postal y coordenadas
   - Tarjetas con fondo verde-violeta
   - Clase relacionada: `card[style*="#d1f7c4"]`

### 4. **Mostrar info avanzada por nombre**
   - Solicita nombre mediante prompt
   - Muestra teléfono, web, compañía y datos corporativos
   - Tarjetas con fondo rosa-violeta
   - Clase relacionada: `card[style*="#f8bbd0"]`

### 5. **Listar compañías y frases**
   - Lista todas las empresas con sus frases corporativas
   - Tarjetas con fondo violeta
   - Clase relacionada: `card[style*="#ede7f6"]`

### 6. **Listar nombres ordenados**
   - Muestra nombres ordenados alfabéticamente
   - Tarjetas con fondo turquesa-violeta
   - Clase relacionada: `card[style*="#b2dfdb"]`

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| HTML5 | - | Estructura de la aplicación |
| CSS3 | - | Estilos y diseño visual |
| JavaScript (ES6+) | - | Lógica de negocio |
| Bootstrap | 5.3.2 | Framework CSS responsivo |
| Animate.css | 4.1.1 | Librería de animaciones |
| JSONPlaceholder API | - | Fuente de datos de usuarios |

---

## 📡 API Externa

- **URL:** `https://jsonplaceholder.typicode.com/users`
- **Método:** GET
- **Tecnología:** XMLHttpRequest
- **Respuesta:** JSON con 10 objetos de usuarios
- **Transformación:** Los nombres originales se reemplazan por nombres en español

---

## 💻 Instrucciones de Uso

1. **Abrir la aplicación:**
   - Abre el archivo `index.html` en tu navegador web preferido

2. **Esperar la carga:**
   - La aplicación cargará automáticamente los datos de la API
   - Los estilos y scripts se aplicarán automáticamente

3. **Interactuar con los botones:**
   - Haz clic en cualquier botón para ejecutar su funcionalidad
   - Para las opciones que requieren nombre, ingresa el nombre exacto cuando se solicite

4. **Visualizar resultados:**
   - Los resultados se mostrarán en el área debajo de los botones
   - Cada función muestra la información en un formato diferente

---

## 👨‍💻 Autor

**Rubén**
Participante del curso Fullstack Talento Digital

---

## 📝 Notas Técnicas

### Comentarios en el Código
Todos los archivos del proyecto incluyen:
- **Títulos descriptivos** para cada bloque funcional
- **Comentarios de relación** indicando cómo se conectan con otros archivos
- **Explicaciones de flujo** detallando el funcionamiento de cada método
- **Documentación de dependencias** especificando librerías y APIs utilizadas

### Buenas Prácticas Implementadas
- ✅ Separación de responsabilidades (HTML/CSS/JS)
- ✅ Uso de clases ES6 para organización del código
- ✅ Nomenclatura descriptiva de variables y métodos
- ✅ Comentarios claros y estructurados
- ✅ Diseño responsivo
- ✅ Experiencia de usuario mejorada con animaciones

---

*Desarrollado como parte del proceso de aprendizaje en el curso Fullstack Talento Digital.*
