import type { FridgeItem } from '../types'

interface FridgeItemCardProps {
  item: FridgeItem
  onQuantityChange: (delta: number) => void
}

function FridgeItemCard({ item, onQuantityChange }: FridgeItemCardProps) {
  // TODO (tuyo): monta la tarjeta. Debe mostrar/hacer:
  //   - item.name (ej. "Milk")
  //   - la cantidad: `${item.quantity} ${item.unit}` (ej. "1 L")
  //   - un botón "-" cuyo onClick llame a onQuantityChange(-1)
  //   - un botón "+" cuyo onClick llame a onQuantityChange(1)
  //
  // Estructura sugerida (ajústala a tu gusto, el CSS lo haremos después):
  //   <div className="fridge-card">
  //     <p className="fridge-card-name">{item.name}</p>
  //     <div className="fridge-card-controls">
  //       <button type="button" onClick={...}>-</button>
  //       <span>{item.quantity} {item.unit}</span>
  //       <button type="button" onClick={...}>+</button>
  //     </div>
  //   </div>
  //
  // EXTRA (cuando lo de arriba funcione y se vea en el navegador):
  // calcula si el item está bajo de stock y añade una clase extra:
  //   const isLow = item.quantity <= item.lowStockThreshold
  //   className={isLow ? 'fridge-card low' : 'fridge-card'}
  //
  // Borra el `return null` de abajo cuando tengas tu versión.
  return null
}

export default FridgeItemCard
