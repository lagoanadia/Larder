// Datos de mentira para poder construir la interfaz sin backend todavía.
// Cuando montemos la API (Supabase), esto se sustituirá por un fetch() —
// pero la forma de los datos (los campos de FridgeItem) será la misma,
// así que el resto del código no debería tener que cambiar apenas.
//
// Actualizado (17/09) al nuevo modelo: `status` en vez de
// `quantity`/`unit`/`lowStockThreshold`. Ver types/index.ts.

import type { FridgeItem, Household, Member } from '../types'

export const mockHousehold: Household = { id: 'h1', name: 'Piso de Iago y Nadia' }

export const mockMembers: Member[] = [
  { id: 'm1', householdId: 'h1', name: 'Iago' },
  { id: 'm2', householdId: 'h1', name: 'Nadia' },
]

export const mockFridgeItems: FridgeItem[] = [
  { id: 'i1', householdId: 'h1', name: 'Milk', icon: 'milk', status: 'low' },
  { id: 'i2', householdId: 'h1', name: 'Watermelon', icon: 'watermelon', status: 'ok' },
  { id: 'i3', householdId: 'h1', name: 'Apples', icon: 'apple', status: 'ok' },
  { id: 'i4', householdId: 'h1', name: 'Cheese', icon: 'cheese', status: 'low' },
  { id: 'i5', householdId: 'h1', name: 'Croissants', icon: 'croissant', status: 'out' },
  { id: 'i6', householdId: 'h1', name: 'Cookies', icon: 'cookie', status: 'ok' },
  { id: 'i7', householdId: 'h1', name: 'Strawberries', icon: 'strawberry', status: 'out' },
]
