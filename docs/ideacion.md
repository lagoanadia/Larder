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
> compra a ojo con papel y boli, van a la tienda 1-2 veces por semana sin
> planificación previa, y a menudo acaban comprando algo duplicado o
> volviendo por algo olvidado — un gasto que ronda entre 260€ y 520€ al
> año en compras mal planificadas.

**Cómo se calculó el número:** 5€ perdidos de media por viaje (no 10€ —
la primera estimación estaba inflada) × 1-2 viajes/semana × 52
semanas/año ≈ 260-520€/año. Se deja como rango a propósito, en vez de un
único número, porque la frecuencia real varía semana a semana y forzar
una cifra puntual sería más dramático de lo que da de sí el dato.

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
| ~~Out of Milk~~ | — | **Descartada**: al verificarla no se encontró como app activa/real — el hallazgo de la búsqueda por IA no se pudo confirmar en la fuente original, así que se retira en vez de darla por buena | — |

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

(Esta cita de reseña externa se mantiene como dato secundario verificado.
La fuente principal de esta sección ya no es la búsqueda por IA, sino las
conversaciones directas con estudiantes/gente joven descritas arriba.)

### Huecos detectados

- **De posicionamiento (el más importante):** ni Bring! ni AnyList —las dos
  apps "serias" analizadas— están construidas para el acto simple de
  apuntar y compartir la lista. Ambas apuntan a **cocinar y planificar
  recetas**. No es que les falte pulir una función: apuntan a un problema
  distinto al vuestro.
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

### La objeción que hay que anticipar: "¿pero tu app no tiene nada chulo?"

Un desarrollador de AnyList o Bring! podría replicar a todo lo anterior:
"tu solución (Notas) no tiene ninguna función atractiva como la mía —
meal prep, recetas, incluso agentes de IA." Es cierto. Pero tampoco la
tiene el **papel y boli**, que es el sistema que en realidad se está
intentando digitalizar. Ahí el argumento se vuelve en contra de quien lo
hace: si ni Notas ni Papel tienen esas funciones y aun así ganan en el uso
real (sección 2), lo que esas funciones añaden no es "lo que faltaba para
digitalizar la lista" — es **complejidad y ruido visual encima de un
sistema que no los pedía**. Es el mismo principio ya escrito más abajo
("digitalizar no es añadir, es no estorbar"), aplicado aquí antes de que
lo objete alguien de fuera.

Además, el enfoque de recetas encaja con un público concreto que no es el
nuestro. Guardar y explorar recetas es relevante para alguien a quien de
verdad le guste cocinar — un perfil más asentado, quizá de más edad (el
ejemplo que nos sirve de referencia: una madre de familia que guarda
recetas). El estereotipo medio de un estudiante independizado no es el de
una persona apasionada por la cocina; si acaso, la tendencia actual va en
sentido contrario: el "meal prep" que está de moda entre gente joven
consiste en cocinar lo mínimo posible — unos tuppers básicos para toda la
semana, precisamente para **no tener que cocinar cada día**. Están
apareciendo sistemas para cocinar menos, no para explorarlo más. Para el
público de AnyList (gente a la que le gusta cocinar) puede que las
recetas tengan sentido; para estudiantes, no. La propia encuesta lo
confirma sin que se preguntara por ello: "I buy random things sometimes
thinking of making elaborate meals but I never actually make anything out
of them and they end up rotting" — comprar pensando en cocinar algo
elaborado y no llegar a hacerlo nunca es exactamente el hueco entre lo
que asume una app de recetas y lo que la gente joven hace de verdad.

Y el resultado práctico es que ni siquiera cumplen bien su función
principal: el paso intermedio de recetas/funciones da pereza, así que la
lista en sí queda peor servida que en Notas. La app puede dar una
sensación bonita de estar más organizado, incluso de ser productivo — pero
si a la larga nadie quiere seguir abriéndola, esa sensación no vale nada.

### Conclusión

El hueco no es "una lista de la compra más bonita" — de esas ya hay varias,
y una (AnyList) hasta iguala la rapidez de Notas. El hueco real es una
herramienta **tan rápida de usar como Notas, tan colaborativa como Bring!,
que además dice quién apuntó o consumió cada cosa, y muestra qué hay ya en
casa sin pedirle a nadie que lleve la cuenta manual de cada unidad** — el
ángulo que ni la app más simple ni la más completa cubren, porque ambas
piensan en "cocinar", no en "apuntar la compra sin fricción y saber qué
falta".

**Principio de diseño: digitalizar no es añadir, es no estorbar.** El
motivo por el que hacer la encuesta era necesario es precisamente este: ya
existen apps (Bring!, AnyList), y las dos fallan en lo mismo. AnyList
tiene recetas sugeridas, categorías cuidadas y reconocimiento inteligente
— y aun así, en la encuesta, la app con más funciones es la que **nadie
usa hoy** (0/35), mientras que Papel/Notas, sin ninguna función extra,
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
hizo qué, avisar cuando algo se acaba sin que nadie tenga que contarlo a
mano) debería mirarse con sospecha, aunque quede bonita en una demo.

### Validación con encuesta real — resultados finales (n=35)

**Por qué una encuesta y no más búsqueda en foros/reseñas:** las reseñas
de Bring! y AnyList se dividían en dos tipos, y ninguno servía para
encontrar el hueco. Las reseñas buenas obviamente no aportan nada para
detectar un problema. Las malas eran, casi todas, quejas de
compatibilidad técnica (la app se cuelga, no sincroniza con el reloj...),
no gente quejándose activamente de que le faltara una función o de que el
enfoque no encajara con su forma de comprar. No parece que nadie haya
analizado esto en profundidad desde ese ángulo. Y en el propio entorno
tampoco se veía a mucha gente usando estas apps. El nicho que se quiere
atraer con Larder es gente joven/estudiantes, y no se encontró ese
público concreto analizado ni en foros ni en encuestas existentes — así
que tenía más sentido preguntarle directamente a la gente que se quiere
atraer que seguir buscando datos de terceros que no hablan de ese perfil.

Encuesta bilingüe (ES/EN) enviada a conocidos, 9 preguntas basadas en
hechos del último mes, no en opiniones sobre una app futura. **35
respuestas únicas a fecha 17/09/2026** — el formulario sigue técnicamente
abierto (no se desactivó en Vercel), así que "cerrada" se refiere a que
esta es la versión que se usa para la entrega, no a que sea físicamente
imposible que llegue alguna más.

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
| Estudiantes / no estudiantes | 29 / 35 estudiantes |
| Método actual más común | Notas (13/35), Papel (12/35), ninguno (9/35), WhatsApp (1/35), una app específica (0/35) |
| Ha probado alguna app específica alguna vez (Bring!, AnyList...) | 3/35 (9%) — pero **0/35 la usa hoy como método** (ver lectura honesta) |
| Compró algo duplicado al menos 1 vez el último mes | 26/35 (74%) |
| Tuvo que volver a la tienda por algo olvidado el último mes | 26/35 (74%) |
| Sufrió ambas cosas el mismo mes (duplicado + viaje olvidado) | 19/35 (54%) |
| Lleva alguna cuenta de gastos compartidos | 11/35 sí, 12/35 no, 12/35 no aplica |

**Lectura honesta:** el "método ganador" **sigue sin asentarse** — Papel y
Notas llevan toda la recogida cambiando de líder por 1-2 respuestas; a
este tamaño de muestra es un empate técnico, no una tendencia, y se deja
escrito así en vez de forzar un ganador. Los dos porcentajes de dolor
(duplicado, olvido) han vuelto a coincidir exactamente en 74% — ya había
pasado antes y se había deshecho con más muestra, así que se trata como
coincidencia, no como una corrección real. El dato conjunto (54%, 19/35)
se mantiene estable y claramente por encima de la mitad en toda la
recogida — la señal más sólida de toda la encuesta.

**Novedad de esta tanda:** por primera vez aparece una **tercera** persona
que probó una app (Bring!, de nuevo) y la dejó — pero por un motivo
distinto al de la primera vez. La primera persona la dejó por falta de
cooperación de sus compañeros de piso; esta la deja por **pereza pura**
("me acaba dando pereza usarla"). Son dos motivos de abandono distintos
apuntando al mismo sitio: cada función o paso extra sobre "simplemente
apuntar" es una razón más para volver a Notas o Papel. Sigue siendo cierto
que 0/35 usa una app hoy como método — el patrón de "prueban y abandonan"
no se ha roto ni una vez en toda la recogida, ahora con dos motivos
documentados en vez de uno.

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
> **Caducidad / frescura en la nevera** (3 menciones — ya no es una señal
> aislada): "Tener en cuenta qué productos quedan abiertos, cuáles se
> pierden antes, etc." · "Cuando la gente en mi apartamento deja la comida
> en la nevera durante mucho tiempo, y se estropea. No me gusta cuando no
> está organizado o cuando no tiran su mala comida." · "El desperdicio de
> comida o incluso la mala organización en los espacios compartidos
> referentes a la comida como la nevera o despensa"
>
> **Se acaba y nadie se entera** (1 mención, distinta a la de arriba —
> esto no es caducidad, es agotamiento sin aviso): "Pois supoño que cando
> algo se acabe ninguén avise. Ej. Miña filla acabou o xamón serrano e non
> avisou" — esta es justo la que resuelve el diseño simplificado de
> Fridge (ver sección 5): al ser una vista compartida, que alguien marque
> "se acabó" ya avisa a todo el piso, sin lógica extra.
>
> **Olvidos concretos al comprar**: "Tener que revisar varias veces que
> no me he olvidado de apuntar algo que necesito comprar y apuntar cosas
> que ya tengo en casa." · "comprar agua que siempre se nos olvida" · "el
> simple hecho de tener que mirar que me falta"
>
> **Compras aspiracionales que acaban en la basura** (2 menciones —
> validación directa del argumento sobre recetas, ver sección 2): "I buy
> random things sometimes thinking of making elaborate meals but I never
> actually make anything out of them and they end up rotting" · "since I
> grocery shop for myself I just buy whatever but don't always use
> everything I buy"
>
> **Precio** (2 menciones espontáneas, sin que se preguntara): "Está todo
> carísimo" / "Comprar, es caro"
>
> "Bring, porque si no colaboran los demás pues al ser compartida la
> compra 🛒 pues mal vamos" — la primera persona que probó una app
> colaborativa real explica ella misma por qué la dejó: no es la app, es
> que sus compañeros de piso no participaban. Una segunda persona probó
> también Bring! y la dejó por un motivo distinto: "dejé de usarla porque
> me acaba dando pereza usarla" — dos motivos de abandono distintos
> (cooperación y pereza/fricción) apuntando al mismo sitio.

**Lo que esto valida directamente:** las quejas sobre "no saber quién
compró qué" y "que tarden en pagar" son exactamente el problema que
resuelve la pantalla **History** — hay demanda real y verbalizada por
encuestados que nunca vieron el prototipo, y la cita sobre Bring! confirma
que el problema de cooperación no es teórico: rompe incluso una app ya
colaborativa. La caducidad de productos ya no es una señal débil: con 3
menciones espontáneas es, después de cooperación, el segundo tema más
repetido — entra en el plan de construcción (sección 5) con un pequeño
campo de "días de frescura típicos" por categoría en nuestra propia base
de datos. La queja de "se acaba y nadie avisa" queda resuelta gratis en
cuanto Fridge sea una vista compartida (sección 5). Las menciones de
precio siguen siendo pocas (2), una señal a favor de **Prices** pero sin
forzarla a más de lo que da de sí. Las dos citas sobre "compras
aspiracionales que acaban pudriéndose" son la validación más directa de
todo el argumento sobre recetas (sección 2, "¿Y si tu app no tiene nada
chulo?"): son personas comprando pensando en cocinar algo elaborado y
nunca llegando a hacerlo — exactamente el hueco entre lo que una app
centrada en recetas asume y lo que la gente joven hace de verdad.

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

**Decisión explícita (17/09): sin monetización.** No se va a cobrar nada
a quien use Larder, y tampoco se va a adelantar dinero propio en ningún
momento — coste fijo 0€, siempre. Esto cambia la naturaleza de varias
casillas: no es un ejercicio de "cuánto cobro y cuándo soy rentable",
sino de demostrar que el proyecto se sostiene sin depender de que nadie
pague, porque el objetivo es resolver el problema real (sección 1), no
construir un negocio en P1.

| Casilla | Contenido |
|---|---|
| Qué vendemos | Nada — no es un producto de pago. Es una herramienta gratuita que resuelve el problema del propio hogar y, si sirve, del de otros hogares parecidos |
| A quién | Estudiantes que comparten piso en A Coruña — el perfil concreto al que se dirige esta entrega (canal de entrada: el propio círculo) |
| A cuánto | 0€ — no se cobra nada |
| Qué nos cuesta | Coste fijo: 0€/mes (niveles gratuitos de todo el stack — Render, Supabase/Neon, Vercel/Netlify, Telegram, Gemini free tier, Open Food Facts). Coste variable por hogar: 0€ |
| Cuántos hacen falta | No aplica en términos de ingresos — no hay punto de equilibrio que calcular porque no hay precio. El "éxito" aquí es adopción real (que el propio hogar, y ojalá otros, dejen de perder tiempo y dinero), no rentabilidad |
| Cuántos hay | ≈ 650 pisos de estudiantes en A Coruña (suelo verificable, sección 3) — cifra más ajustada al público concreto de esta casilla que el mercado accesible completo (~99.700 hogares), que sigue documentado en la sección 3 como techo, no como objetivo de esta entrega |

**Sin punto de equilibrio que calcular:** al no cobrar nada, no hay
margen por cliente ni cifra de rentabilidad que buscar. Lo único que
tiene que cuadrar es que el coste fijo siga siendo 0€ — eso sí es una
condición real: si algún día algún proveedor deja de ofrecer nivel
gratuito, hay que decidir entre pagar de bolsillo o migrar, no entre
"subir el precio".

> Decisión explícita: no se asume ningún coste de hosting de pago, ni se
> cobra nada a quien use la app. Esto es válido y muy habitual en
> proyectos indie/personales, pero tiene un precio técnico que hay que
> declarar (ver abajo), no solo económico.

**Lectura honesta (y el matiz técnico que viene con "gratis"):** el stack
se actualizó (17/09) de "Render + SQLite" a Render (backend) + Supabase o
Neon (Postgres) + Vercel/Netlify (frontend) + bot de Telegram + Gemini API
+ Open Food Facts + GitHub Actions (tareas programadas). Esto arregla
gratis la limitación que teníamos antes documentada — el disco efímero de
Render, que podía perder la base de datos SQLite en cada reinicio —,
porque Supabase/Neon dan Postgres persistente en su propio nivel
gratuito, no en el disco de Render. Sigue quedando un límite real: el
backend en Render "duerme" tras un rato sin uso y tarda unos segundos en
despertar en la siguiente petición (mala primera impresión para un
usuario nuevo). Los límites de las capas gratuitas (Supabase, Gemini,
Render) cambian cada pocos meses — se verificarán antes de comprometerse
con ninguna, con la misma norma que ya aplicamos al retirar el dato de
"Out of Milk" (sección 2): si no se puede confirmar, no se da por bueno.

El reto de fondo ya no es económico — es conseguir que la gente **use**
algo nuevo en vez de seguir con WhatsApp o papel, que ya conocen. Sin
precio de por medio, ese reto se reduce a adopción pura: que el propio
hogar, y luego otros parecidos, encuentren que de verdad les ahorra
tiempo — eso es un problema de canal, no de números.

## 5 · Las 3 columnas (alcance)

**Actualización (17/09):** con el giro de producto ("la lista se calcula
sola, no se escribe") se retira Odoo del plan — el comparador de Prices
pasa a calcularse sobre el propio historial de compras del hogar
(`PurchaseItem`, ver más abajo) en vez de sobre un catálogo externo que
alguien tendría que mantener actualizado a mano. También se decide
construir para esta entrega lo que antes se dejaba para un P2 hipotético
(lectura de tickets, predicción de consumo) — la columna "no se hace este
curso" se queda solo con lo que de verdad no compensa construir nunca en
este proyecto, no con lo que "todavía no tocaba".

| Lo construimos (Larder) | Lo hace un servicio externo gratuito | No se hace este curso |
|---|---|---|
| Nevera: lo que hay en casa, **sin cantidades** — 3 estados (bien / queda poco / se acabó). Se rellena sola al marcar algo como comprado en la Lista; se vacía con un toque "se acabó" que la devuelve a la Lista | Diccionario de productos para normalizar nombres al escribir, hablar o leer un ticket (Open Food Facts, API abierta y gratuita, sin clave) | Escaneo de código de barras (EAN por cámara) |
| Lista de la compra que se **genera sola** a partir de la nevera, compartida con control de concurrencia (dos personas marcando a la vez) | Lectura de tickets de compra → items estructurados (Gemini API, free tier) — la IA se usa **solo aquí**; umbrales y predicción son aritmética sobre nuestra propia base de datos | Cobro real con tarjeta / pasarela de pago |
| Historial de compras + cálculo de quién debe a quién (se calcula y se muestra, no se paga automáticamente) | Aviso al grupo de quién le toca comprar (bot de Telegram, gratis, sin tarjeta) | Facturación / cobro de ningún tipo — no hay monetización (sección 4) |
| Comparador de precios por tienda, calculado sobre el propio historial de compras del hogar | | Liquidar deudas de verdad (transferencias reales) |
| Predicción de cuándo reponer cada producto, a partir del propio historial de eventos de la nevera (sin IA — promedio de días entre reposición y "se acabó") | | Notificaciones push nativas del navegador (Web Push/VAPID) — el aviso por Telegram es la excepción declarada abajo |

**Por qué así:** nadie os elegiría por construir vuestro propio sistema de
facturación o de cobro con tarjeta — eso ya está resuelto y cambia con la
normativa. Sí os elegirían por cómo lleváis la nevera y la lista
compartida, que es donde está el dolor real (sección 1).

**Excepción declarada a "notificaciones push" (17/09):** con el giro de
producto hacia "la lista se calcula sola", el reparto de quién va a
comprar se avisa con un bot de Telegram al grupo del hogar. Es
técnicamente una notificación push por otra puerta, y se reconoce aquí en
vez de fingir que no lo es. Se acepta como excepción, no como cambio de
regla general, porque: (1) el coste es 0€ y la API de Telegram no exige
tarjeta ni infraestructura propia de notificaciones (a diferencia de Web
Push con certificados/VAPID, que sí sigue fuera); (2) sin algún aviso
fuera de la propia app, "la lista se genera sola" pierde la mitad de su
gracia — de poco sirve que nadie tenga que escribirla si alguien tiene
que acordarse de abrir la app para comprobarlo.

### Fridge — cómo evita ser "otra AnyList"

**Corrección de diseño (17/09):** la primera versión de este documento
describía Fridge como un inventario con cantidades y botones +/- por
producto. Es exactamente el mismo error que le achacamos a AnyList: pedir
a una persona que teclee cada vez que gasta un huevo o un litro de leche
no es digitalizar el papel, es añadirle una tarea que el papel ni siquiera
pedía. Se corrige aquí en vez de dejarlo pasar.

**Diseño real de Fridge** — sin cantidades, sin +/-, sin gesto humano
nuevo:
- Un producto entra en Fridge **solo**, en el momento en que alguien lo
  marca como comprado en la Lista (a mano) o cuando se procesa el ticket
  de la compra (automático, vía Gemini) — cero tecleo extra en el caso
  automático, el mismo gesto de siempre en el manual.
- Fridge es una vista compartida: cualquiera del piso puede abrirla desde
  la tienda y ver qué hay ya en casa antes de comprar — ataca
  directamente el dato más repetido de la encuesta (72% compró algo
  duplicado el último mes).
- Un producto pasa de "bien" a "queda poco" a "se acabó" con un toque,
  nunca con un número. "Se acabó" lo manda de vuelta a la Lista, así que
  el ciclo compra → Fridge → se acaba → Lista se cierra solo.
- Cada uno de esos toques (y cada reposición) queda registrado con su
  fecha (`FridgeEvent` en el modelo de datos) — no para usarlo ya, sino
  para que la predicción de consumo tenga histórico real que leer en
  cuanto haya unas semanas de datos.

Esto ya no depende de que nadie lleve la cuenta de "cuántos huevos
quedan" — solo de gestos que la persona ya iba a hacer de todas formas
(marcar comprado, marcar que se acabó).

**Apuntar hablando, no escribiendo.** Los navegadores modernos (Chrome,
Edge, con matices en Safari) traen integrada la **Web Speech API**:
convierte voz a texto dentro del propio navegador, gratis y sin servidor
propio. Un botón de micrófono devuelve texto, que se trocea (por comas,
por "y") y se intenta emparejar contra el diccionario de Open Food Facts;
si no encuentra coincidencia, se guarda igual como texto libre — nunca
bloquea. Entender frases más complejas ("dos docenas de huevos y medio
kilo de jamón cortado fino") sí necesitaría un LLM de verdad, y ahí es
donde entra Gemini — el mismo modelo que ya se usa para leer tickets,
no una pieza nueva.

**La rebanada vertical, en una frase:**

> "Un hogar de A Coruña deja de escribir la lista de la compra: la nevera
> se rellena sola al comprar, avisa cuando algo se acaba, y la lista sale
> de ahí. El grupo se entera por Telegram, marca la compra en tiempo real,
> y consulta después quién debe qué y dónde sale más barato cada cosa."

**Orden de construcción:** Nevera → Lista (con concurrencia) → History →
Prices. Cada una completa (pantalla + lógica + datos reales) antes de
abrir la siguiente — esto no cambia aunque el alcance de cada pantalla
haya crecido.

## 6 · Documento de una página

| Bloque | Contenido |
|---|---|
| **Nombre y mensaje** | **Larder** — Ayudamos a los hogares que comparten piso en A Coruña a controlar qué hay en la nevera y organizar la compra sin duplicados ni viajes extra, sin depender de un grupo de WhatsApp desordenado. |
| **Público** | Estudiantes que comparten piso en A Coruña — ≈650 pisos como suelo verificable, dentro de un mercado accesible más amplio de ~99.700 hogares (secciones 3 y 4). |
| **Problema** | Iago y Nadia pierden 10-15 min cada vez que hacen la lista a ojo con papel y boli, van a la tienda 1-2 veces/semana sin planificar, y a menudo acaban comprando algo duplicado o volviendo por algo olvidado — un gasto que ronda entre 260€ y 520€/año (sección 1). |
| **Números** | 0€ — no se cobra nada. Coste fijo: 0€ (niveles gratuitos de todo el stack). No hay punto de equilibrio que calcular: el objetivo es adopción real, no ingresos (sección 4). |
| **Alcance** | Nevera sin cantidades (3 estados) + Lista que se genera sola + Historial de gasto + Comparador de precios sobre el propio historial de compras + lectura de tickets y predicción de consumo. Facturación y cobro real, fuera de alcance (sección 5). |
| **Canal** | Directo: el propio hogar (Iago y Nadia) es el primer usuario real — no hace falta convencer a nadie externo para la primera prueba de fuego. |
| **Qué no haremos** | Escaneo de código de barras, cobro real con tarjeta, notificaciones push nativas del navegador (el aviso va por Telegram), liquidación automática de deudas (sección 5). |

> **Nota sobre el nombre:** "Larder" es una palabra inglesa común (significa
> "despensa"), lo que puede dificultar encontraros en un buscador frente a
> resultados de diccionario — algo a revisar en el Bloque P5 (identidad),
> no ahora. De momento se mantiene el nombre ya elegido.
