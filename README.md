# 🛒 Backend - Entrega 2 (Coderhouse)

Proyecto de backend para un sistema de gestión de productos con vistas en tiempo real utilizando **WebSockets**, **Express** y **Handlebars**.

Repositorio: [https://github.com/Izxy86/Backend-entrega-2](https://github.com/Izxy86/Backend-entrega-2)

---

## 🚀 Tecnologías usadas

- Node.js
- Express.js
- Socket.IO
- Express Handlebars
- JavaScript (sin frameworks frontend)
- FileSystem como persistencia

---

## 📂 Estructura del proyecto

```
/src
├── data/               → Archivos JSON (productos y carritos)
├── Managers/           → Lógica de negocio para productos y carritos
├── public/             → Recursos públicos (CSS y JS del frontend)
├── routes/             → Rutas API REST y vistas
├── sockets/            → Websockets configurados con Socket.IO
└── views/              → Plantillas Handlebars
```

---

## ⚙️ Instalación y uso

1. Clonar el repositorio:
```bash
git clone https://github.com/Izxy86/Backend-entrega-2.git
cd Backend-entrega-2
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir en navegador:
- [`http://localhost:8080/`](http://localhost:8080/) → Vista estática con listado de productos
- [`http://localhost:8080/realtimeproducts`](http://localhost:8080/realtimeproducts) → Vista en tiempo real con formulario

---

## 📡 Funcionalidad en tiempo real

- Al agregar o eliminar un producto desde la vista `/realtimeproducts`, la tabla se actualiza automáticamente para **todos los usuarios conectados**.
- Esta funcionalidad se logra mediante **Socket.IO**.

---

## 📝 Consideraciones

- La persistencia se realiza con archivos `.json`
- La vista usa Handlebars y un layout central (`main.handlebars`)
- La lógica está modularizada en carpetas: `routes`, `Managers`, `views`, etc.

---

## ✍️ Autor

- Desarrollado por [Izxy86](https://github.com/Izxy86)  
- Curso Backend - Coderhouse  


---

## 📜 Licencia

MIT
