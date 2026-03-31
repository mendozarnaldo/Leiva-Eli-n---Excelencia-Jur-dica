# Instrucciones de Despliegue para Hostinger

Este proyecto es una aplicación de React construida con Vite. Para desplegarla en Hostinger, sigue estos pasos:

## 1. Exportar el Proyecto
En la interfaz de **AI Studio Build**, ve al menú **Settings** (Ajustes) y selecciona **Export to ZIP**. Esto descargará el código fuente completo.

## 2. Preparar el Entorno Local
Una vez que tengas el ZIP en tu computadora:
1. Extrae el contenido del archivo ZIP.
2. Abre una terminal (o consola) en la carpeta del proyecto.
3. Asegúrate de tener **Node.js** instalado (puedes descargarlo en [nodejs.org](https://nodejs.org/)).
4. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```

## 3. Generar la Versión de Producción
Ejecuta el siguiente comando para compilar la aplicación:
   ```bash
   npm run build
   ```
Este comando creará una carpeta llamada `dist` en la raíz de tu proyecto. Esta carpeta contiene los archivos optimizados para producción.

## 4. Subir a Hostinger
1. Inicia sesión en tu panel de Hostinger (hPanel).
2. Ve al **Administrador de Archivos** de tu sitio web.
3. Entra en la carpeta `public_html`.
4. Sube **todo el contenido** de la carpeta `dist` (no la carpeta `dist` en sí, sino los archivos que están dentro: `index.html`, la carpeta `assets`, etc.).

## Notas Adicionales
- Si usas un dominio personalizado, asegúrate de que apunte correctamente a Hostinger.
- Si tu aplicación tiene rutas de React Router (SPA), es posible que necesites un archivo `.htaccess` en Hostinger para que las rutas funcionen correctamente al recargar la página.

### Ejemplo de .htaccess (para public_html):
```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
