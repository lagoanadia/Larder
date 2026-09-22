// Tipos de datos compartidos por toda la app.
//
// Modelo actualizado (17/09) tras el giro de producto: la lista de la
// compra deja de ser algo que se ESCRIBE y pasa a ser algo que se CALCULA
// a partir del estado de la nevera. Ver docs/ideacion.md, sección
// "Fridge — cómo evita ser otra AnyList".
//
// Las interfaces de más abajo (FridgeEvent, ShoppingListItem, Purchase,
// PurchaseItem) todavía no las usa ningún componente — se declaran ya
// para que, cuando ataquemos List/History/Prices, las tablas no haya que
// rehacerlas ni migrar datos que nunca se guardaron.

export interface Household {
  id: string
  name: string
}

export interface Member {
  id: string
  householdId: string
  name: string
}

// Qué pestaña está activa. Usamos un "union type" de strings literales en
// vez de un string cualquiera: así TypeScript te avisa en rojo si en algún
// sitio escribes 'fridg' por error, en vez de descubrirlo en producción.
export type Tab = 'fridge' | 'list' | 'history' | 'prices'

// Antes este proyecto tenía `quantity: number` + `unit` + un
// `lowStockThreshold` con el que comparar — es decir, la nevera funcionaba
// como un contador que había que teclear a mano cada vez que gastabas
// algo (un huevo, un vaso de leche...). Es exactamente el mismo error que
// le criticamos a AnyList: pedir un tecleo que el papel ni siquiera
// exigía. Se sustituye por un estado de 3 valores que se marca con un
// toque, sin números:
//   'ok'   — hay de sobra, no hace falta hacer nada
//   'low'  — "queda poco" (aviso temprano; todavía no entra en la Lista)
//   'out'  — "se acabó" (esto es lo que hace que el item entre solo en
//            la Lista de la compra — ver ShoppingListItem más abajo)
export type FridgeItemStatus = 'ok' | 'low' | 'out'

export interface FridgeItem {
  id: string
  householdId: string
  name: string
  icon: string // clave del icono (ej. "milk", "cheese") — texto simple por ahora
  status: FridgeItemStatus
  lastRestockedAt?: string // fecha ISO — cuándo se marcó 'ok' por última vez
}

// Cada vez que alguien toca "queda poco" / "se acabó", o repone el
// producto, se guarda una fila NUEVA aquí — nunca se sobreescribe un
// campo existente. Es la diferencia entre poder preguntar algún día
// "¿cuánto dura la leche de media en esta casa?" (hace falta el
// historial completo) y solo poder preguntar "¿cuándo fue la última
// vez?" (con un campo que se pisa, el resto del historial ya se perdió
// para siempre). No lo consume ningún componente todavía.
export interface FridgeEvent {
  id: string
  fridgeItemId: string
  type: 'restocked' | 'marked_low' | 'marked_out'
  occurredAt: string
  memberId: string
}

// Un item de la lista puede haber entrado solo (porque algo se marcó
// "se acabó" en Fridge) o porque alguien lo añadió a mano. Guardamos
// cuál de los dos para poder demostrar, con datos reales y no solo de
// palabra, que "la lista se genera sola" no es un eslogan vacío.
export interface ShoppingListItem {
  id: string
  householdId: string
  name: string
  source: 'auto' | 'manual'
  status: 'pending' | 'bought'
  addedAt: string
  boughtAt?: string
  boughtByMemberId?: string
  fridgeItemId?: string // a qué item de Fridge repone, si source === 'auto'
}

// Una compra completa (un ticket). Alimenta History (quién pagó, cuánto,
// quién debe qué) y, a través de sus PurchaseItem, también Prices.
export interface Purchase {
  id: string
  householdId: string
  storeName: string
  purchasedAt: string
  paidByMemberId: string
  totalAmount: number
  source: 'manual' | 'ocr_ticket'
}

// Una línea dentro de un ticket. Va separado de Purchase porque un
// ticket tiene UNA tienda/fecha/pagador pero VARIAS líneas de producto —
// si se aplastara todo en una sola tabla, no se podría calcular a la vez
// el precio por producto y tienda (Prices) y el total repartido por
// ticket (History).
export interface PurchaseItem {
  id: string
  purchaseId: string
  name: string
  unitPrice?: number
  fridgeItemId?: string
}
