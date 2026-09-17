# Larder — Documentos de ideación (Proyecto Transversal, P1)

Este documento acumula, paso a paso, las piezas que pide la Sesión 00 antes de
construir nada más: frase del dolor, estado del arte, estudio de mercado,
servilleta de 6 casillas, las 3 columnas y el documento de una página final.

## 1 · Frase del dolor

**ANTES (intuición, sin datos):**

> En mi casa perdemos tiempo controlando qué queda en la nevera y organizando
> la compra.

**DESPUÉS (con datos reales):**

> Iago y Nadia pierden 10-15 minutos cada vez que hacen la lista de la
> compra a ojo con papel y boli, van a la tienda 2 veces por semana sin
> planificación previa, y casi siempre acaban comprando algo duplicado o
> volviendo por algo olvidado — un gasto que ronda los 1.000€ al año en
> compras mal planificadas.

**Cómo se calculó el número:** 10€ perdidos de media por viaje × 2 viajes/semana
× 52 semanas/año ≈ 1.040€/año.

**Fuente:** experiencia directa del hogar (Iago y Nadia). Sin fuente
externa — es un dato de primera mano, no una estimación de mercado.

## 2 · Estado del arte

Delimitación: soluciones para gestionar la compra/nevera de un hogar
compartido, vivas hoy, en español o inglés.

**Método (actualizado):** en vez de depender solo de reseñas encontradas
por búsqueda, se hicieron conversaciones informales con amigos que
gestionan la compra en piso compartido — **estudiantes y gente joven**,
el mismo perfil que el mercado objetivo (sección 3). Es la vía de
validación que el propio guion marca como "la más cara y la más fiable de
las tres": hablar con quien vive el problema, no solo leer sobre él.

### Fichas por solución analizada (con investigación directa)

| Solución | Lo bueno | El problema | Precio |
|---|---|---|---|
| Papel y boli | Rápido y sencillo | Se pierde fácil (ej. real: "mi madre siempre lo pierde"); poca organización; de un solo uso — se gasta papel cada vez | Gratis |
| **Notas (app del móvil)** | La solución más usada entre el círculo encuestado; simple, bien estructurada, reusable — "la que mejor funciona" en la práctica | No se puede compartir ni coeditar en tiempo real; al ser una app genérica (no específica de listas), se pierde entre el resto de notas | Gratis |
| [Bring!](https://apps.apple.com/us/app/bring-grocery-shopping-list/id580669177) | Colaborativo de verdad (varias personas a la vez, en tiempo real) | Un paso extra frente a Notas: hay que buscar el ingrediente en su base de datos en vez de solo escribirlo — esa fricción es la razón por la que la gente vuelve a Notas. Su sección "Inspiración" no tiene recetas propias, solo enlaza a webs externas, y no resuelve el caso de uso real (ser más útil que papel y boli) | Gratis + suscripción opcional |
| [AnyList](https://justuseapp.com/en/app/522167641/anylist-grocery-shopping-list/reviews) | Reconocimiento inteligente al escribir (escribes "milk" y lo categoriza solo, casi tan rápido como Notas; si no reconoce algo, se queda como texto normal sin penalizar); categorización automática; **escáner de código de barras** integrado; recetas propias o importadas | Todo el valor añadido apunta a **cocinar** (recetas, meal planning de pago) — a quien no le interesa cocinar no le aporta nada. | Gratis + suscripción (meal planning) |


### Citas literales de usuarios reales

> "El icono de la aplicación aparece marcado como comprado en el Apple
> Watch pero no llega a descargarse ni a instalarse."
>
> — Reseña real verificada de **Bring! Grocery Shopping List**, App Store.

(Esta cita de reseña externa se mantiene como dato secundario verificado.
La fuente principal de esta sección ya no es la búsqueda por IA, sino las
conversaciones directas con estudiantes/gente joven descritas arriba.)

### Huecos detectados

- **De posicionamiento (el más importante):** ni Bring! ni AnyList —las dos
  apps "serias" analizadas— están construidas para ahorrar o controlar
  stock/gasto. Ambas apuntan a **cocinar y planificar recetas**. No es que
  les falte pulir una función: apuntan a un problema distinto al vuestro.
- **De fricción:** cualquier paso extra sobre "simplemente escribir" hace
  que la gente vuelva a la solución más simple (Notas) — la barrera de
  entrada para añadir un item tiene que ser mínima, al nivel de Notas o de
  AnyList (que sí lo consigue con su reconocimiento inteligente).
- **De colaboración:** la solución que "mejor funciona" en la práctica
  (Notas) no permite compartir ni coeditar en tiempo real entre
  convivientes — ahí es donde Bring! sí acierta.
- **De usabilidad (testimonio propio del hogar):** en casa, el motivo de
  abandonar una app de listas tras 2 usos fue la pereza de abrir "otra
  app" aparte del canal de siempre — sigue siendo válido como dato de
  primera mano.

### Conclusión

El hueco no es "una lista de la compra más bonita" — de esas ya hay varias,
y una (AnyList) hasta iguala la rapidez de Notas. El hueco real es una
herramienta **tan rápida de usar como Notas, tan colaborativa como Bring!,
y centrada en ahorro y control de stock** — el ángulo que ni la app más
simple ni la más completa cubren, porque ambas piensan en "cocinar", no en
"gastar menos y no quedarse sin nada".

**Principio de diseño: digitalizar no es añadir, es no estorbar.** El
motivo por el que hacer la encuesta era necesario es precisamente este: ya
existen apps (Bring!, AnyList), y las dos fallan en lo mismo. AnyList
tiene recetas sugeridas, categorías cuidadas y reconocimiento inteligente
— y aun así, en la encuesta, la app con más funciones es la que **nadie
usa hoy** (0/32), mientras que Papel/Notas, sin ninguna función extra,
ganan. No es
casualidad: cada función que se añade encima de "escribir un item" es una
barrera más entre la persona y la lista, y la gente vota con los pies por
la opción con menos fricción. Digitalizar el papel y boli no significa
meterle recetas sugeridas por IA, categorías bonitas ni nada que Papel y
Notas no tenían — eso es **añadirle complejidad al papel y boli**, y ya
está demostrado que esa complejidad no se usa. Digitalizar significa que
el papel y boli **dejen de necesitar un empuje**: que apuntar algo sea
igual de inmediato que en Notas, pero que lo apuntado quede estructurado,
compartido y atribuido a quien lo apuntó, sin que la persona tenga que
hacer nada extra para conseguirlo. Cualquier función de Larder que no
sirva directamente a "apuntar rápido y sin fricción" o a "lo que Notas y
Papel no pueden hacer por diseño" (compartir en tiempo real, saber quién
hizo qué, avisar de stock) debería mirarse con sospecha, aunque quede
bonita en una demo.

### Validación con encuesta real — resultados finales (n=32)

Encuesta bilingüe (ES/EN) enviada a conocidos, 9 preguntas basadas en
hechos del último mes, no en opiniones sobre una app futura. **Encuesta
cerrada el 17/09/2026 con 32 respuestas únicas** — esta es la versión
final para la entrega, ya no se actualiza.

**Nota de limpieza de datos:** dos pares de envíos eran la misma persona
enviando dos veces por accidente (mismos datos, segundos o minutos de
diferencia): la que respondió "Las cantidades" y la que respondió con la
broma "Amor y Paz". Ambos pares se cuentan **una sola vez**; en el caso de
"Amor y Paz" se descarta además el texto de la frustración (era broma, no
dato) y se mantiene el resto de sus respuestas, que sí son válidas.

**Nota honesta sobre procedencia geográfica:** los encuestados no son
de A Coruña — son conocidos repartidos por Suiza, Estados Unidos (Nueva
Jersey, Washington, Texas), Madrid y el pueblo de Nadia. Esto **no
invalida** la encuesta, pero sí limita lo que se puede afirmar con ella:
sirve para validar que el problema (duplicados, olvidos, nula adopción de
apps, falta de atribución) le pasa al **perfil** — gente joven,
estudiantes o no, que comparte compra/gasto —, no que le pase
específicamente en A Coruña. El estudio de mercado (sección 3) sigue
usando A Coruña como mercado accesible por motivos de canal (es donde se
puede llegar en persona), no porque la encuesta lo demuestre
geográficamente. Es una limitación real del método, documentada aquí en
vez de disimulada.

| Dato | Resultado |
|---|---|
| Estudiantes / no estudiantes | 26 / 32 estudiantes |
| Método actual más común | Notas (12/32), Papel (11/32), ninguno (8/32), WhatsApp (1/32), una app específica (0/32) |
| Ha probado alguna app específica alguna vez (Bring!, AnyList...) | 2/32 (6%) — pero **0/32 la usa hoy como método** (ver lectura honesta) |
| Compró algo duplicado al menos 1 vez el último mes | 23/32 (72%) |
| Tuvo que volver a la tienda por algo olvidado el último mes | 24/32 (75%) |
| Sufrió ambas cosas el mismo mes (duplicado + viaje olvidado) | 17/32 (53%) |
| Lleva alguna cuenta de gastos compartidos | 9/32 sí, 12/32 no, 11/32 no aplica |

**Lectura honesta, con la muestra ya cerrada:** el "método ganador" **no
llega a asentarse en ningún momento** de toda la recogida — pasó de
empatado, a Papel por delante, a Notas por delante, cambiando de líder en
cada tanda por 1-2 respuestas. La conclusión correcta no es "gana Notas",
es que a este tamaño de muestra el primer puesto entre Papel y Notas es
un empate técnico, y así se deja escrito en vez de fingir una tendencia
clara. Los dos porcentajes de dolor (72% duplicado, 75% olvido) se separan
de nuevo tras haber coincidido en la tanda anterior — confirma que esa
coincidencia fue casualidad de muestra pequeña, no una corrección real. El
dato conjunto (53%, 17/32) se mantiene estable y claramente por encima de
la mitad en las últimas tres tandas (58% → 55% → 53%), la señal más sólida
de toda la encuesta. Se mantienen las 2 personas de 32 que alguna vez
probaron una app (Bring!, "Notas") sin que ninguna la use hoy — este
patrón de "prueban y abandonan" no cambió ni una vez en toda la recogida.

**Frases literales de la encuesta** (frustración más común al gestionar la
compra/nevera compartida), agrupadas por tema:

> **Cooperación / no saber qué hacen los demás** (8 menciones — el tema
> más repetido con diferencia): "No sé quién compró qué" / "I don't know
> who bought what" · "Not knowing what the others want, the others eating
> my stuff" · "when people use the food i planned to use... so I have to
> use something else" · "not knowing if someone bought something just for
> themself" · "Que compran cosas que no quiero" · "cada vez una compra una
> cosa, entonces lo complicado es llevar la cuenta de quién compró qué
> antes" · "People eating my food" · "dudar en si comprar algo fuera de la
> lista y que se lo coma otra persona"
>
> **Tracker de gastos** (3 menciones, dos de ellas compartidas con la
> categoría de arriba): "I don't know who bought what" · "Que la gente no
> participe a la hora de hacer la compra o que tarden en pagar cuando
> dividimos gastos" · "llevar la cuenta de quién compró qué antes"
>
> **Caducidad / frescura en la nevera** (4 menciones — ya no es una señal
> aislada): "Tener en cuenta qué productos quedan abiertos, cuáles se
> pierden antes, etc." · "Cuando la gente en mi apartamento deja la comida
> en la nevera durante mucho tiempo, y se estropea. No me gusta cuando no
> está organizado o cuando no tiran su mala comida." · "El desperdicio de
> comida o incluso la mala organización en los espacios compartidos
> referentes a la comida como la nevera o despensa" · "Pois supoño que
> cando algo se acabe ninguén avise. Ej. Miña filla acabou o xamón serrano
> e non avisou" — esta última describe literalmente el "aviso de stock
> bajo" que ya estaba en el alcance de Fridge, sin que la persona supiera
> que existía esa idea.
>
> **Olvidos concretos al comprar**: "Tener que revisar varias veces que
> no me he olvidado de apuntar algo que necesito comprar y apuntar cosas
> que ya tengo en casa." · "comprar agua que siempre se nos olvida"
>
> **Precio** (2 menciones espontáneas, sin que se preguntara): "Está todo
> carísimo" / "Comprar, es caro"
>
> "Bring, porque si no colaboran los demás pues al ser compartida la
> compra 🛒 pues mal vamos" — la única persona que probó una app
> colaborativa real explica ella misma por qué la dejó: no es la app, es
> que sus compañeros de piso no participaban.

**Lo que esto valida directamente:** las quejas sobre "no saber quién
compró qué" y "que tarden en pagar" son exactamente el problema que
resuelve la pantalla **History** — hay demanda real y verbalizada por
encuestados que nunca vieron el prototipo, y la cita sobre Bring! confirma
que el problema de cooperación no es teórico: rompe incluso una app ya
colaborativa. La caducidad de productos ya no es una señal débil: con 4
menciones espontáneas es, después de cooperación, el segundo tema más
repetido — vale la pena que **Fridge** contemple avisos de caducidad desde
el principio, no como algo "a vigilar más adelante". Las menciones de
precio siguen siendo pocas (2), una señal a favor de **Prices** pero sin
forzarla a más de lo que da de sí.

**Por qué esto no lo puede copiar Notas — el diferenciador real:** la
queja de "no sé quién compró/consumió/dejó qué" no es solo demanda para
History, es la prueba de un límite estructural del rival que gana en las
conversaciones informales (sección 2). Notas es una lista de texto sin
usuarios: cualquier línea es anónima, nadie sabe quién la escribió ni
quién la tachó. Larder, al ser colaborativa por diseño, puede atribuir
cada alta, cada compra y cada "esto es mío" a una persona concreta sin
esfuerzo extra por parte de nadie — no es una función añadida encima de la
lista, es una propiedad de cómo está construida desde el principio. Para
que Notas ofreciera lo mismo, dejaría de ser Notas y pasaría a ser,
literalmente, otra app. Esto es lo que convierte "más rápido que Notas"
(que Larder probablemente no puede prometer del todo) en "tan rápido como
Notas y además con memoria de quién hizo qué" — la ventaja no está en la
velocidad de apuntar, está en la estructura de los datos una vez
apuntados.

## 3 · Estudio de mercado

**Definición del mercado:** hogares de más de una persona que gestionan la
compra y la nevera de forma conjunta. Delimitación geográfica: A Coruña
ciudad, por ser la zona que se puede atender de verdad (canal directo,
enseñarlo en persona) — **no** porque la encuesta (sección 2) demuestre
que el problema es específico de A Coruña: los encuestados son conocidos
repartidos por varios países y ciudades (ver nota honesta en sección 2),
así que validan el perfil y el problema, no la geografía. La delimitación
a A Coruña es una decisión de canal de distribución, no un hallazgo de la
encuesta.

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

### Fridge — visión ampliada (fuera de P1, pero con ruta clara)

Esto **no es compromiso de esta entrega** — es a dónde se podría llegar
con Fridge más adelante (P2+), pensado sin la limitación mental de "esto
es demasiado para nosotros", pero anclado a recursos que ya están
decididos (Odoo, coste fijo 0€, la propia web). Se documenta aparte para
que no se cuele como alcance obligatorio de P1.

- **Apuntar hablando, no escribiendo — y es más alcanzable de lo que
  parece.** Los navegadores modernos (Chrome, Edge, con matices en
  Safari) traen integrada la **Web Speech API**: convierte voz a texto
  dentro del propio navegador, **gratis y sin servidor propio**. No hace
  falta "un asistente de IA" construido desde cero — un botón de
  micrófono ya devuelve texto, que luego se trocea (por comas, por "y") y
  se intenta emparejar contra el catálogo de Odoo. Si no encuentra
  coincidencia, se guarda igual como texto libre — nunca bloquea, porque
  bloquear sería peor que el papel. Entender frases más complejas ("dos
  docenas de huevos y medio kilo de jamón cortado fino") sí necesitaría
  un modelo de lenguaje de verdad (tipo la API de Claude), y eso ya cuesta
  céntimos por petición — el único punto de esta visión que no es 0€
  garantizado.
- **Caducidad sin que nadie escriba una fecha.** El catálogo de Odoo, que
  ya se va a usar para precios, puede llevar también un campo "días de
  frescura típicos" por categoría (lácteos abiertos: 5 días, verdura: 7
  días...). Al marcar un producto como "abierto" en Fridge, el contador
  empieza solo. Responde directamente a las 4 citas de caducidad de la
  encuesta (sección 2), con el único gesto humano que ya se iba a pedir
  de todas formas.
- **Fridge como vista compartida en tiempo real.** Con el mismo stack ya
  decidido (Node + SQLite), cualquiera del piso podría abrir el móvil
  **desde la tienda** y ver qué hay ya en casa antes de comprar. Esto
  ataca directamente el problema más repetido de la encuesta (73%
  compró algo duplicado) resolviéndolo por diseño, no por fuerza de
  voluntad de "acordarse de mirar antes de salir".
- **Fridge → List sin volver a escribir nada.** Un botón "se acabó" en un
  producto de Fridge lo manda directo a la lista de la compra. Es algo
  que Papel no puede hacer sin copiar a mano de un sitio a otro — aquí es
  una función de código.

Se deja todo esto fuera de P1 por foco y tiempo, no porque sea imposible:
la pieza más "cara" de verdad (el asistente de voz con comprensión de
frases complejas) es la única que cae en "no se hace este curso"; el
resto es alcanzable con las mismas piezas gratuitas que P1 ya usa.

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
