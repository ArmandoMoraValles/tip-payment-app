# Proyecto de Propinas

## Requisitos

- **Node.js** v18 o superior
  
Node.js incluye npm, lo cual te permite instalar todas las dependencias del proyecto (tanto para el backend como para el frontend).
Tanto el backend (Express, TypeScript, etc.) como el frontend (Vite, Vue.js) se ejecutan sobre Node.js.

## Cómo Ejecutar

### Backend

1. Ingresa a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. El servidor se ejecutará en `http://localhost:3000` (o el puerto configurado).

### Frontend

1. Ingresa a la carpeta del frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```
4. Abre la URL que se muestre en la terminal (generalmente `http://localhost:5173`) en el navegador.

## Video con el funcionamiento
https://github.com/user-attachments/assets/2e12f313-c57f-4f42-b39d-0d4c7f72d17c

##  Cosas por Mejorar

A continuación, algunas áreas de mejora detectadas durante el desarrollo:

###  Mejora de la Interfaz
La interfaz actual es funcional, pero puede mejorar estéticamente:
- Cuidar mejor los espacios, márgenes y tamaños para mayor armonía visual.
- Incorporar íconos personalizados que refuercen la experiencia del usuario.
- Ajustes de responsividad para una experiencia aún más fluida en dispositivos móviles.

###  Seguridad
Actualmente la API no cuenta con medidas de seguridad:
- Implementar autenticación con token de acceso (JWT).
- Limitar los orígenes permitidos mediante configuración de **CORS**.
- Validar y sanitizar los datos recibidos en el backend.

###  Testeo Riguroso
El proyecto puede beneficiarse de pruebas automatizadas:
- Pruebas unitarias y de integración para cada componente y la API.
- Validación de edge cases como montos inválidos o divisiones por cero.
- Garantizar el funcionamiento correcto en distintos escenarios.

###  Integración de Base de Datos
El backend está diseñado para integrarse fácilmente con bases de datos:
- Permite migrar el almacenamiento actual en archivo JSON a bases de datos SQL (MySQL, PostgreSQL) o NoSQL (MongoDB).
- Facilitaría la persistencia de datos y generación de reportes a futuro.

---

##  Nota
Este proyecto fue desarrollado como parte de una **prueba técnica en un solo día de trabajo**. 
Soy consciente de que hay muchas áreas que se pueden mejorar y optimizar, pero espero haber demostrado una base sólida y clara sobre la que seguir construyendo.

¡Gracias por la oportunidad!
