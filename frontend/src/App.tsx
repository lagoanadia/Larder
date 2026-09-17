import { useState } from 'react'
import type { FridgeItemStatus, Tab } from './types'
import { mockFridgeItems, mockMembers } from './data/mockData'
import Header from './components/Header'
import TabNav from './components/TabNav'
import BottomBar from './components/BottomBar'
import FridgeView from './components/FridgeView'
import ListView from './components/ListView'
import HistoryView from './components/HistoryView'
import PricesView from './components/PricesView'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('fridge')
  const [activeMemberId, setActiveMemberId] = useState(mockMembers[0].id)

  // El estado de los items vive AQUÍ (en App), no dentro de FridgeView.
  // Motivo: el Header necesita saber cuántos items están bajos de stock
  // para pintar el badge "2 low", y Header es "hermano" de FridgeView, no
  // su hijo — así que el dato tiene que vivir en un antepasado común.
  const [fridgeItems, setFridgeItems] = useState(mockFridgeItems)

  const activeMember = mockMembers.find((m) => m.id === activeMemberId) ?? mockMembers[0]
  // Antes esto se CALCULABA comparando quantity con lowStockThreshold.
  // Con el modelo nuevo (17/09) ya no hay nada que calcular: el estado
  // bajo de stock se MARCA directamente, así que basta con contar
  // cuántos items no están en 'ok'.
  const lowStockCount = fridgeItems.filter((item) => item.status !== 'ok').length

  function handleStatusChange(itemId: string, status: FridgeItemStatus) {
    // TODO (tuyo): actualiza `fridgeItems` usando setFridgeItems.
    // Mismo patrón inmutable de siempre, con el campo nuevo:
    //
    // - NUNCA mutes el array directamente (nada de fridgeItems[i].status = ...).
    //   En React el estado se trata como inmutable: hay que crear un array
    //   NUEVO para que React se entere de que algo cambió y vuelva a renderizar.
    // - `.map()` es tu amigo aquí: recorre fridgeItems y devuelve un array
    //   nuevo donde el item que coincide con itemId tiene un status
    //   distinto, y todos los demás se devuelven tal cual.
    //
    // Algo así (rellena los huecos):
    //
    // setFridgeItems(
    //   fridgeItems.map((item) =>
    //     item.id === itemId ? { ...item, status } : item
    //   )
    // )
    //
    // Cuando ataquemos List de verdad, aquí también habrá que registrar
    // un FridgeEvent (ver types/index.ts) para no perder el historial de
    // consumo — pero eso es para cuando lleguemos a esa pantalla, no ahora.
  }

  return (
    <div className="app">
      <Header memberName={activeMember.name} lowStockCount={lowStockCount} />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="app-content">
        {activeTab === 'fridge' && (
          <FridgeView items={fridgeItems} onStatusChange={handleStatusChange} />
        )}
        {activeTab === 'list' && <ListView />}
        {activeTab === 'history' && <HistoryView />}
        {activeTab === 'prices' && <PricesView />}
      </main>

      <BottomBar members={mockMembers} activeMemberId={activeMemberId} onSelectMember={setActiveMemberId} />
    </div>
  )
}

export default App
