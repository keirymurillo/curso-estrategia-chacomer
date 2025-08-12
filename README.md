# Curso Interactivo – Estrategia Empresarial (Chacomer)

Este paquete contiene el **curso interactivo** listo para publicar en **GitHub Pages**.

## Contenido
- `index.html` → curso completo (slides, expandibles, evaluación con guardado local y ensayo imprimible).
- `.nojekyll` → evita que GitHub procese archivos con guiones bajos (seguro para sitios estáticos).
- `README.md` → este paso a paso.

---

## Publicar en GitHub Pages (UI web)
1. Creá un repositorio en GitHub (ej.: `curso-estrategia-chacomer`).
2. Subí los tres archivos: `index.html`, `.nojekyll` y `README.md` a la raíz del repo.
3. Abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Source: Deploy from a branch**.
5. **Branch:** `main` y **/ (root)**. Guardá.
6. Esperá ~1–2 min. Tu sitio quedará publicado en:  
   `https://TU-USUARIO.github.io/curso-estrategia-chacomer/`

> Si cambia el nombre del repo, cambia la URL en consecuencia.

## Publicar con Git (línea de comandos)
```bash
# 1) En una carpeta vacía, descomprimir este ZIP
unzip curso-estrategia-chacomer.zip
cd curso-estrategia-chacomer

# 2) Inicializar repo local
git init
git add .
git commit -m "Deploy curso Chacomer"

# 3) Conectar a GitHub (reemplazá ORG/REPO por tu org/repositorio)
git branch -M main
git remote add origin https://github.com/ORG/REPO.git
git push -u origin main
```

Luego activá Pages: **Settings → Pages → Deploy from a branch → Branch: `main` / root**.

---

## ¿Cómo actualizar el curso?
- Editá `index.html` y hacé commit/push a `main`. GitHub vuelve a publicar en ~1–2 min.
- Podés cambiar el mínimo de aprobación editando la comparación `score >= 85` en el JS.

## Notas de privacidad
- El curso **no** envía datos a ningún servidor.
- Los avances (slide actual, respuestas y ensayo) se guardan **solo en el navegador** con `localStorage`.

---

_Última actualización: 2025-08-12_
