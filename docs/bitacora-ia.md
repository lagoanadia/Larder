# Larder — Bitácora de uso de IA

Registro de prompts usados y qué se corrigió después, tal como exige el
guion ("se evalúa la corrección, no el prompt"). Se actualiza a medida que
se usa IA en el proyecto — no se deja para el final.

## Nivel IA-2 — Estado del arte y estudio de mercado

**Qué se pidió:** buscar apps reales de listas de la compra compartidas y
sus quejas de usuarios (Bring!, AnyList, Out of Milk), y buscar
estadísticas públicas de hogares/estudiantes de A Coruña (INE, IGE, UDC,
Fundación CYD) para dimensionar el mercado.

**Qué se corrigió:**
- Un hallazgo generado por búsqueda IA (la app "Out of Milk" y su supuesta
  queja sobre compartir listas) **no se pudo verificar como real** al
  comprobarlo directamente. Se retiró del análisis en `docs/ideacion.md`
  en vez de darlo por bueno, y se documentó la retractación.
- La cita literal final usada (sobre Apple Watch en Bring!) se aceptó
  como está, con la salvedad explícita de que es una cita más débil para
  el argumento que la que se buscaba originalmente.
- El mercado objetivo generado inicialmente (~650 pisos de estudiantes) se
  amplió a petición del alumno para incluir parejas y cualquier grupo que
  comparta gastos; al no encontrarse una fuente fiable para ese cruce más
  amplio en A Coruña, se dejó documentado como límite de búsqueda en vez
  de inventar un porcentaje.

## Nivel IA-3 — Presentación para la entrega del viernes

**Prompt usado (resumen):** "Créame una presentación en español para la
entrega de la Sesión 00, basada en `docs/ideacion.md`, siguiendo la
estructura del documento de una página (frase del dolor, estado del arte,
estudio de mercado, servilleta de 6 casillas, 3 columnas, resumen final),
con diseño profesional en la paleta crema/naranja del producto."

**Qué generó la IA:** el archivo `docs/larder-presentacion.pptx` completo
(9 diapositivas), incluyendo textos, tablas, iconos y diseño.

**Corrección pendiente (a rellenar por el alumno antes de entregar):**
- [ ] Revisar cada diapositiva y confirmar que los datos coinciden con
  `docs/ideacion.md` sin errores de transcripción.
- [ ] Practicar la defensa oral de cada número — la condición del curso es
  poder explicar y modificar cualquier línea, no solo leerla.
- [ ] Ajustar cualquier texto, color o dato con el que no te sientas
  cómodo defendiendo tal cual.

> Sin marcar esta corrección como hecha, la entrega no cumple la condición
> de IA-3 del guion ("se evalúa la corrección, no el prompt").
