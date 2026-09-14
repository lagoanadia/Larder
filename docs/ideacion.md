# Larder — Documentos de ideación (Proyecto Transversal, P1)

Este documento acumula, paso a paso, las piezas que pide la Sesión 00 antes de
construir nada más: frase del dolor, estado del arte, estudio de mercado,
servilleta de 6 casillas, las 3 columnas y el documento de una página final.

## 1 · Frase del dolor

**ANTES (intuición, sin datos):**

> En mi casa perdemos tiempo controlando qué queda en la nevera y organizando
> la compra.

**DESPUÉS (con datos reales):**

> Iago y [tu nombre] pierden 10-15 minutos cada vez que hacen la lista de la
> compra a ojo con papel y boli, van a la tienda 2 veces por semana sin
> planificación previa, y casi siempre acaban comprando algo duplicado o
> volviendo por algo olvidado — un gasto que ronda los 1.000€ al año en
> compras mal planificadas.

**Cómo se calculó el número:** 10€ perdidos de media por viaje × 2 viajes/semana
× 52 semanas/año ≈ 1.040€/año.

**Fuente:** experiencia directa del hogar (Iago, Nadia, Muxia). Sin fuente
externa — es un dato de primera mano, no una estimación de mercado.

## 2 · Estado del arte

Delimitación: soluciones para gestionar la compra/nevera de un hogar
compartido, vivas hoy, en español o inglés.

### Fichas por solución analizada

| Solución | Categoría | Qué resuelve bien | Qué le reprochan | Precio |
|---|---|---|---|---|
| Papel y boli | Solución analógica | Gratis, cero curva de aprendizaje | No hay overview fija: no evita duplicados ni olvidos | 0 € |
| Grupo de WhatsApp | Solución improvisada | Ya está instalado, todos lo miran a diario | El aviso se pierde entre otros mensajes; no hay estado de "comprado / no comprado" | 0 € |
| [Bring!](https://apps.apple.com/us/app/bring-grocery-shopping-list/id580669177) | Producto vertical | Listas simples por categorías | Fácil borrar un item sin querer al editar; exige cuenta incluso para uso individual; suscripción sin apenas novedades | Gratis + suscripción opcional |
| [AnyList](https://justuseapp.com/en/app/522167641/anylist-grocery-shopping-list/reviews) | Producto vertical | Listas compartidas + integración con recetas | Interfaz calificada de "obtusa"; al marcar un item comprado a veces se borra del todo y hay que reescribirlo | Gratis + suscripción opcional |
| ~~Out of Milk~~ | — | — | **Descartada**: al verificarla no se encontró como app activa/real — el hallazgo de la búsqueda por IA no se pudo confirmar en la fuente original, así que se retira en vez de darla por buena | — |

> **Nota sobre el método (verificación real, no solo declarada):** la fila
> de "Out of Milk" se generó con una búsqueda por IA (nivel IA-2) y **no
> superó la verificación** — al comprobarlo, la app no aparece como
> real/activa. Se deja constancia aquí en vez de borrarlo sin más, porque es
> justo lo que pide el guion: "un dato inventado por una IA y entregado
> como cierto invalida el apartado entero" — así que se corrige, no se
> disimula.

### Citas literales de usuarios reales

> "El icono de la aplicación aparece marcado como comprado en el Apple
> Watch pero no llega a descargarse ni a instalarse."
>
> — Reseña real verificada de **Bring! Grocery Shopping List**, App Store.

(Nota: la queja verificable que se encontró no es sobre "compartir listas"
como se buscaba en un principio — es sobre el Apple Watch. Sigue siendo
válida como cita literal real, pero es más débil para defender el hueco de
Larder que si hubiera sido sobre sincronización entre personas. Es lo que
hay con lo verificado; mejor esto que una cita más bonita pero inventada.)

### Huecos detectados

- **De usabilidad**: las dos apps analizadas (Bring!, AnyList) exigen abrir
  "otra app" aparte del canal que la familia ya usa a diario (el grupo de
  WhatsApp). Es justo lo que hizo que en casa se probara algo así 2 veces y
  se abandonara por pereza — esta parte sí es testimonio directo vuestro,
  no de una búsqueda.
- **Funcional**: ninguna de las dos combina lista de la compra con
  inventario real de nevera (saber qué queda, no solo qué falta comprar).
- **De fiabilidad básica**: incluso en herramientas ya establecidas hay
  fallos tontos pero reales (AnyList borra un item entero al marcarlo como
  comprado, en vez de simplemente tacharlo). Es una señal de que ni las
  apps "serias" tienen esto resuelto del todo.

### Conclusión

El hueco no es "una lista de la compra más bonita" — de esas ya hay varias,
gratis. El hueco es una herramienta que combine **nevera + lista
compartida** sin fricción de aprendizaje (sin tener que abrir/aprender otra
app aparte del móvil de siempre), y que resista bien lo básico de que dos
personas la usen al mismo tiempo — algo en lo que ni siquiera las
soluciones establecidas analizadas están libres de fallos.

## 3 · Estudio de mercado

**Definición del mercado:** hogares de más de una persona que gestionan la
compra y la nevera de forma conjunta. Delimitación geográfica: A Coruña
ciudad, por ser la zona que se puede atender de verdad (canal directo,
enseñarlo en persona).

### Los 3 niveles

| Nivel | Cifra | Cómo se calculó | Fuente |
|---|---|---|---|
| **Mercado total** | Todos los hogares de España con 2+ personas | No se cuenta un número exacto: España tiene un tamaño medio de hogar de 2,50 personas, lo que indica que la mayoría de hogares ya son multi-persona | [INE, tamaño medio del hogar 2023](https://www.ine.es/jaxiT3/Tabla.htm?t=60132) |
| **Mercado accesible** | ≈ 99.700 hogares en A Coruña ciudad | 249.261 habitantes ÷ 2,50 personas/hogar (media nacional aplicada a la ciudad — **es una estimación**, no un conteo directo de hogares de A Coruña) | Población: [INE/IGE 2024](https://hoydiario.es/noticias/galicia/demografia/poblacion-coruna-ine-2024.html) · Tamaño medio: INE 2023 |
| **Mercado objetivo** | ≈ 99.700 hogares no unipersonales de A Coruña (coincide con el accesible) | Ver nota de ampliación de segmento, abajo | Ver mercado accesible |

### Método de conteo del mercado objetivo (con supuestos explícitos)

1. La UDC tiene >13.300 matriculados (curso 2025-26, ambos campus).
2. El 31% de universitarios españoles cambia de ciudad para estudiar
   (Fundación CYD) → **supuesto**: aplicamos ese % nacional a la UDC, sin
   dato específico de la propia universidad → ≈ 4.123 estudiantes que se
   mudan a A Coruña.
3. De esos, el 55% elige piso compartido → ≈ 2.268 estudiantes viviendo en
   piso compartido.
4. **Supuesto**: un piso compartido tiene de media 3-4 personas → dividimos
   entre 3,5 → **≈ 650 pisos compartidos de estudiantes**.

**Margen de error reconocido:** esta cifra encadena 3 supuestos (el % de
cambio de ciudad, el % que comparte piso, y el tamaño medio del piso), así
que es una estimación gruesa, no un conteo. Además, deja fuera un segmento
real que no es de estudiantes: pisos compartidos de jóvenes trabajadores,
que también sufren el mismo problema pero no salen en estas estadísticas.

**Nota de ampliación de segmento:** al decidir que Larder sirve igual a
estudiantes, parejas o cualquier grupo que comparta piso y compra, se buscó
un desglose público de "hogares no familiares / parejas sin hijos" en A
Coruña para acotar mejor el objetivo — **no se encontró con la fecha y el
detalle geográfico necesarios** (el INE tiene la categoría a nivel estatal,
pero no un cruce fiable y reciente a nivel de A Coruña sin encadenar más
suposiciones de las razonables). Es un resultado válido en sí mismo: mejor
reconocer el límite de la búsqueda que inventar un porcentaje.

**Consecuencia práctica:** si el producto sirve a cualquier hogar
multi-persona, el mercado objetivo pasa a coincidir con el mercado
accesible (~99.700 hogares). Lo que de verdad queda por acotar no es "qué
tipo de hogar", sino el **canal de entrada** — por quién empezáis de
verdad (vuestro propio círculo) — que se define en el documento de una
página (paso 6), no aquí.

El dato de ~650 pisos de estudiantes (arriba) se mantiene documentado como
un **suelo verificable** dentro de ese mercado más amplio: sabemos que, como
mínimo, esos existen con fuente pública.

### Conclusión (provisional, se cierra en el paso 4 — servilleta de números)

Con un mercado accesible de ~99.700 hogares en A Coruña, hay margen de sobra
para que el punto de equilibrio (siguiente paso) tenga sentido, incluso
siendo conservadores. El riesgo ya no es "no hay suficiente gente" — es más
bien lograr que os conozcan, que es un problema de canal (P2), no de P1.

## 4 · Servilleta de 6 casillas

| Casilla | Contenido |
|---|---|
| Qué vendemos | Suscripción mensual por hogar (no por persona individual) |
| A quién | La persona que suele encargarse de organizar la compra en un hogar compartido de A Coruña (estudiante, pareja o grupo que comparte gastos) |
| A cuánto | 0,99 €/mes por hogar |
| Qué nos cuesta | Coste fijo: 0 €/mes (nivel gratuito de Render + subdominio gratuito tipo `larder.onrender.com`, sin dominio propio de pago). Coste variable por hogar: 0 € |
| Cuántos hacen falta | Punto de equilibrio: 1 hogar (con coste fijo 0, cualquier cliente ya es beneficio) |
| Cuántos hay | ~99.700 hogares accesibles en A Coruña (sección 3) |

**Punto de equilibrio:** margen por cliente = 0,99 € − 0 € = 0,99 €.
Coste fijo ÷ margen = 0 € ÷ 0,99 € = 0 → en la práctica, **desde el primer
hogar que pague, hay beneficio**, porque el fundador no adelanta dinero.

> Decisión explícita: no se asume ningún coste de hosting de pago mientras
> el proyecto no genere ingresos. Esto es válido y muy habitual en
> proyectos indie, pero tiene un precio técnico que hay que declarar (ver
> abajo), no solo económico.

**Lectura honesta (y el matiz técnico que viene con "gratis"):** el nivel
gratuito de Render tiene dos límites reales que afectan al proyecto:
1. El servicio "duerme" tras un rato sin uso y tarda unos segundos en
   despertar en la siguiente petición (mala primera impresión para un
   usuario nuevo).
2. El disco es **efímero**: si usamos SQLite tal cual, el archivo de la
   base de datos puede perderse en cada despliegue o reinicio, salvo que
   se configure almacenamiento persistente (que en Render ya no es
   gratuito).

Esto no invalida la decisión de no pagar — es información que hay que
tener antes de decidir dónde vivirán los datos reales de producción más
adelante (quizá valga usar el disco persistente solo cuando/si el
proyecto consigue sus primeros hogares de pago). Y el reto de fondo sigue
siendo el mismo: conseguir que alguien pague por algo que la competencia
(WhatsApp, papel) da gratis — ese es un problema de canal (P2), no de
números (P1).

## 5 · Las 3 columnas (alcance)

| Lo construimos (Larder) | Lo hace Odoo (ERP) | No se hace este curso |
|---|---|---|
| Nevera: inventario + aviso de stock bajo + botones +/- | Catálogo maestro de productos y sus precios por tienda (Odoo Products + Pricelists) — Larder solo lo **consulta** vía API para la pestaña Prices | Escaneo de código de barras |
| Lista de la compra compartida, con control de concurrencia (dos personas marcando a la vez) | Facturación real de la suscripción de 0,99€/mes, si algún día se cobrase de verdad (Odoo Invoicing) | Cobro real con tarjeta / pasarela de pago |
| Historial de compras + cálculo de quién debe a quién (solo se calcula y se muestra, no se paga automáticamente) | | Notificaciones push |
| Comparador de precios por tienda, resaltando el más barato | | Liquidar deudas de verdad (transferencias) |

**Por qué así:** nadie os elegiría por construir vuestro propio sistema de
facturación o de cobro con tarjeta — eso ya está resuelto y cambia con la
normativa. Sí os elegirían por cómo lleváis la nevera y la lista
compartida, que es donde está el dolor real (sección 1).

**La rebanada vertical de P1, en una frase:**

> "En P1, un hogar de A Coruña controla su nevera y organiza la lista de la
> compra compartida sin usar el grupo de WhatsApp, y puede consultar su
> historial de gasto repartido y comparar precios entre tiendas."

**Orden de construcción:** Nevera → Lista (con concurrencia) → History →
Prices. Cada una completa (pantalla + lógica + datos reales) antes de
abrir la siguiente.

## 6 · Documento de una página

| Bloque | Contenido |
|---|---|
| **Nombre y mensaje** | **Larder** — Ayudamos a los hogares que comparten piso en A Coruña a controlar qué hay en la nevera y organizar la compra sin duplicados ni viajes extra, sin depender de un grupo de WhatsApp desordenado. |
| **Público** | La persona que organiza la compra en un hogar compartido de A Coruña — estudiantes, parejas o cualquier grupo que comparte gastos. ~99.700 hogares accesibles en la zona (sección 3). |
| **Problema** | Iago y [tu nombre] pierden 10-15 min cada vez que hacen la lista a ojo con papel y boli, van a la tienda 2 veces/semana sin planificar, y casi siempre acaban comprando algo duplicado o volviendo por algo olvidado — un gasto que ronda los 1.000€/año (sección 1). |
| **Números** | 0,99€/mes por hogar. Coste fijo: 0€ (hosting gratuito). Punto de equilibrio: 1 hogar. Mercado accesible: ~99.700 hogares (sección 4). |
| **Alcance de P1** | Nevera + Lista compartida (con concurrencia) + Historial de gasto + Comparador de precios (datos de precios vía Odoo). Facturación y cobro real, fuera de alcance (sección 5). |
| **Canal** | Directo: el propio hogar (Iago, Nadia, Muxia y tú) es el primer usuario real — no hace falta convencer a nadie externo para la primera prueba de fuego. |
| **Qué no haremos** | Escaneo de código de barras, cobro real con tarjeta, notificaciones push, liquidación automática de deudas (sección 5). |

> **Nota sobre el nombre:** "Larder" es una palabra inglesa común (significa
> "despensa"), lo que puede dificultar encontraros en un buscador frente a
> resultados de diccionario — algo a revisar en el Bloque P5 (identidad),
> no ahora. De momento se mantiene el nombre ya elegido.
