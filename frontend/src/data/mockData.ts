// Datos de mentira para poder construir la interfaz sin backend todavía.
// Cuando montemos la API, esto se sustituirá por un fetch() — pero la forma
// de los datos (los campos de FridgeItem) será la misma, así que el resto
// del código no debería tener que cambiar apenas.

import type { FridgeItem, Member } from '../types'

export const mockMembers: Member[] = [
  { id: 'm1', name: 'Iago' },
  { id: 'm2', name: 'Nadia' },
  { id: 'm3', name: 'Muxia' },
]

export const mockFridgeItems: FridgeItem[] = [
  { id: 'i1', name: 'Milk', icon: 'milk', quantity: 1, unit: 'L', lowStockThreshold: 1 },
  { id: 'i2', name: 'Watermelon', icon: 'watermelon', quantity: 200, unit: 'g', lowStockThreshold: 100 },
  { id: 'i3', name: 'Apples', icon: 'apple', quantity: 5, unit: 'ud.', lowStockThreshold: 2 },
  { id: 'i4', name: 'Cheese', icon: 'cheese', quantity: 300, unit: 'g', lowStockThreshold: 100 },
  { id: 'i5', name: 'Croissants', icon: 'croissant', quantity: 0, unit: 'pkt.', lowStockThreshold: 1 },
  { id: 'i6', name: 'Cookies', icon: 'cookie', quantity: 3, unit: 'ud.', lowStockThreshold: 1 },
  { id: 'i7', name: 'Strawberries', icon: 'strawberry', quantity: 0, unit: 'g', lowStockThreshold: 100 },
]
