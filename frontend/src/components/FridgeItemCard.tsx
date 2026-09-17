import type { FridgeItem, FridgeItemStatus } from '../types'

interface FridgeItemCardProps {
  item: FridgeItem
  onStatusChange: (status: FridgeItemStatus) => void
}

function FridgeItemCard({ item, onStatusChange }: FridgeItemCardProps) {
  // TODO (tuyo) — actualizado al nuevo modelo (17/09): ya no hay
  // cantidades ni botones +/-, eso quedó atrás con el giro de producto
  // (ver docs/ideacion.md, "Fridge — cómo evita ser otra AnyList").
  // Monta la tarjeta. Debe mostrar/hacer:
  //   - item.name (ej. "Milk")
  //   - un indicador visual de item.status ('ok' | 'low' | 'out') —
  //     puede ser texto ("Bien" / "Queda poco" / "Se acabó") o color,
  //     lo que prefieras
  //   - dos botones de ACCIÓN, no de cantidad:
  //       "Queda poco"  -> onClick llama a onStatusChange('low')
  //       "Se acabó"    -> onClick llama a onStatusChange('out')
  //
  // Estructura sugerida (ajústala a tu gusto, el CSS lo haremos después):
  //   <div className={`fridge-card fridge-card--${item.status}`}>
  //     <p className="fridge-card-name">{item.name}</p>
  //     <div className="fridge-card-controls">
  //       <button type="button" onClick={...}>Queda poco</button>
  //       <button type="button" onClick={...}>Se acabó</button>
  //     </div>
  //   </div>
  //
  // EXTRA (cuando lo de arriba funcione y se vea en el navegador):
  // un tercer botón "Reponer" -> onStatusChange('ok') te viene bien para
  // poder probar el ciclo completo a mano mientras no exista la Lista.
  //
  // Borra el `return null` de abajo cuando tengas tu versión.
  return null
}

export default FridgeItemCard
