import type { Tab } from '../types'

interface TabNavProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'fridge', label: 'Fridge' },
  { id: 'list', label: 'List' },
  { id: 'history', label: 'History' },
  { id: 'prices', label: 'Prices' },
]

// Fíjate en este patrón, porque lo vas a reutilizar tú mismo en
// FridgeItemCard: este componente NO decide cuál es la pestaña activa
// (no tiene su propio useState para eso). Solo recibe `activeTab` por
// props y, cuando el usuario hace click, llama a `onTabChange` — es el
// PADRE (App.tsx) quien de verdad cambia el estado. TabNav es "tonto":
// solo pinta lo que le dicen y avisa de los clicks.
function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="tab-nav">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={tab.id === activeTab ? 'tab-button active' : 'tab-button'}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default TabNav
