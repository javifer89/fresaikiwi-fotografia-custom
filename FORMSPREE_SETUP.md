# 📋 Guía de Setup Formspree

## ¿Por qué Formspree?
Solución simple y gratuita para formularios. Mantiene la misma funcionalidad que los formularios de contacto y reservas.

## Pasos para Configurar

### 1. Crear Cuenta en Formspree
1. Ve a [formspree.io](https://formspree.io)
2. Haz click en "Sign Up"
3. Registrate con tu email (puedes usar la misma de contacto del sitio)
4. Confirma tu email

### 2. Crear Formulario en Formspree
1. En tu dashboard, haz click en "Create" o "New Project"
2. Dale un nombre: "Fresaikiwi - Contacto"
3. Copia el **Form ID** que te aparece (ejemplo: `xyzaabcd`)

### 3. Actualizar tus Formularios
Busca en el proyecto los lugares donde dice:
```
formId="xyzaabcd"
```

Actualmente están en:
- `app/contacto/page.tsx` (línea ~101)
- `components/contact-cta.tsx` (línea ~45)

Reemplaza `"xyzaabcd"` con tu Form ID real de Formspree.

### 4. ¡Listo!
Los formularios ahora enviarán directamente a Formspree. Recibirás:
- ✅ Emails con cada respuesta
- ✅ Panel web para ver los datos
- ✅ Exportar datos a CSV
- ✅ Respuestas automáticas (en plan pro)

## Verificar que Funciona

1. `npm run dev` para iniciar desarrollo
2. Ve a http://localhost:3000/contacto
3. Llena el formulario y envía
4. Deberías ver un mensaje de éxito
5. Verifica en tu email y dashboard de Formspree

## Notas

- Plan gratuito: Hasta 50 respuestas por mes
- No hay límite de formularios
- Cuando tengas dominio propio, sigue funcionando sin cambios

---

**¿Necesitas ayuda?** Contacta con Formspree desde su página de soporte.
