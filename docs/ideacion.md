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
| [Out of Milk](https://appgrooves.com/app/out-of-milk-grocery-shopping-list-by-bonial-enterprises-north-america-inc/negative) | Producto vertical | Sincroniza entre varios dispositivos | Varias reseñas dicen que para compartir con pareja/otra persona "busca en otro sitio" por fallos de sincronización | Gratis |

> **Nota sobre el método:** las quejas de arriba están **resumidas por una IA
> a partir de una búsqueda web** (nivel IA-2). Antes de dar esto por bueno en
> la entrega, hay que abrir al menos uno de los enlaces y copiar aquí 2-3
> frases **literales** de una reseña real. Sin eso, esta sección no cumple el
> requisito de "citas literales, sin corregir" del guion.

### Citas literales de usuarios reales

> _Pendiente — pegar aquí 2-3 frases exactas copiadas de una reseña real
> (idealmente de Out of Milk, sobre el fallo al compartir la lista)._

### Huecos detectados

- **De usabilidad**: las tres apps analizadas exigen abrir "otra app" aparte
  del canal que la familia ya usa a diario (el grupo de WhatsApp). Es
  justo lo que hizo que en casa se probaran 2 veces y se abandonaran por
  pereza.
- **Funcional**: ninguna combina lista de la compra con inventario real de
  nevera (saber qué queda, no solo qué falta comprar).
- **De fiabilidad en el uso compartido**: Out of Milk falla explícitamente
  en el caso de compartir con otra persona — que es exactamente el caso de
  uso de Larder.

### Conclusión

El hueco no es "una lista de la compra más bonita" — de esas ya hay varias,
gratis. El hueco es una herramienta que combine **nevera + lista
compartida** sin fricción de aprendizaje, y que de verdad aguante que dos
personas la toquen a la vez sin perder datos (algo en lo que hasta
soluciones establecidas como Out of Milk fallan).

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
| **Mercado objetivo** | ≈ 650 pisos compartidos de estudiantes en A Coruña | Ver cálculo paso a paso abajo | UDC + Fundación CYD |

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

**Nota para decidir:** este mercado objetivo se centra en estudiantes por
ser el segmento con datos públicos más fáciles de encontrar, no
necesariamente porque sea el mejor punto de partida. Puede convenir revisar
esto en la conclusión final (sección 6), sobre todo si vuestro propio hogar
no es un piso de estudiantes.

### Conclusión (provisional, se cierra en el paso 4 — servilleta de números)

Con ≈650 hogares objetivo en A Coruña, hay margen real de mercado si el
punto de equilibrio (siguiente paso) pide un número bajo de "clientes". Si
pidiera más de, digamos, 300-400, el modelo sería muy ajustado.

## 4 · Servilleta de 6 casillas

_Pendiente._

## 5 · Las 3 columnas (alcance)

_Pendiente._

## 6 · Documento de una página

_Pendiente — se rellena al final, resumiendo todo lo anterior._
