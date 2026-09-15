import { useState } from 'react'
import type { Tab } from './types'
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
  const lowStockCount = fridgeItems.filter((item) => item.quantity <= item.lowStockThreshold).length

  function handleQuantityChange(itemId: string, delta: number) {
    // TODO (tuyo): actualiza `fridgeItems` usando setFridgeItems.
    //
    // Pistas:
    // - NUNCA mutes el array directamente (nada de fridgeItems[i].quantity = ...).
    //   En React el estado se trata como inmutable: hay que crear un array
    //   NUEVO para que React se entere de que algo cambió y vuelva a renderizar.
    // - `.map()` es tu amigo aquí: recorre fridgeItems y devuelve un array
    //   nuevo donde el item que coincide con itemId tiene una quantity
    //   distinta, y todos los demás se devuelven tal cual.
    // - No dejes que quantity baje de 0 (usa Math.max(0, ...)).
    //
    // Algo así (rellena los huecos):
    //
    // setFridgeItems(
    //   fridgeItems.map((item) =>
    //     item.id === itemId
    //       ? { ...item, quantity: Math.max(0, item.quantity + delta) }
    //       : item
    //   )
    // )
  }

  return (
    <div className="app">
      <Header memberName={activeMember.name} lowStockCount={lowStockCount} />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="app-content">
        {activeTab === 'fridge' && (
          <FridgeView items={fridgeItems} onQuantityChange={handleQuantityChange} />
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
