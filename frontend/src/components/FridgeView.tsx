import type { FridgeItem } from '../types'
import FridgeItemCard from './FridgeItemCard'

interface FridgeViewProps {
  items: FridgeItem[]
  onQuantityChange: (itemId: string, delta: number) => void
}

function FridgeView({ items, onQuantityChange }: FridgeViewProps) {
  // TODO (tuyo):
  // 1. Devuelve un <div className="fridge-grid"> que envuelva todo.
  // 2. Dentro, recorre `items` con items.map(...) y por cada uno
  //    devuelve un <FridgeItemCard />.
  // 3. Ponle a cada FridgeItemCard la prop `key={item.id}` — React la
  //    necesita internamente para saber qué tarjeta es cuál cuando la
  //    lista cambia; si no la pones, verás un warning en la consola.
  // 4. Pásale también la prop `item={item}`.
  // 5. Y la prop `onQuantityChange={(delta) => onQuantityChange(item.id, delta)}`
  //    — fíjate que aquí "envolvemos" la función: FridgeItemCard no necesita
  //    saber el id del item, solo dice "+1" o "-1" y es FridgeView quien
  //    añade el id antes de avisar a App. Esto se llama closure: la función
  //    de flecha "recuerda" el `item` de esa vuelta del .map().
  //
  // Borra el `return null` de abajo cuando tengas tu versión.
  return null
}

export default FridgeView
