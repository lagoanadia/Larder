// Tipos de datos compartidos por toda la app.
// De momento solo modelamos lo que necesita la pestaña "Fridge".
// Cuando ataquemos List/History/Prices, añadiremos más interfaces aquí.

export interface Member {
  id: string
  name: string
}

// Qué pestaña está activa. Usamos un "union type" de strings literales en
// vez de un string cualquiera: así TypeScript te avisa en rojo si en algún
// sitio escribes 'fridg' por error, en vez de descubrirlo en producción.
export type Tab = 'fridge' | 'list' | 'history' | 'prices'

export interface FridgeItem {
  id: string
  name: string
  icon: string // clave del icono (ej. "milk", "cheese") — de momento un string simple
  quantity: number
  unit: string // "L", "g", "ud.", "pkt." — texto libre por ahora
  lowStockThreshold: number
}

// Fíjate en lo que NO hay aquí: no guardamos un campo "isLow: boolean".
// Si un item está bajo de stock es algo que se puede CALCULAR a partir de
// quantity y lowStockThreshold — no tiene sentido guardarlo aparte, porque
// se podría desincronizar (ej. bajas quantity a mano y te olvidas de
// actualizar isLow). Esto es la misma idea de "no dupliques datos" que
// vimos en el modelo de la base de datos.
