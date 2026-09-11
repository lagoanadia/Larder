interface HeaderProps {
  memberName: string
  lowStockCount: number
}

function Header({ memberName, lowStockCount }: HeaderProps) {
  return (
    <header className="app-header">
      <h1>Welcome home, {memberName}</h1>
      {/* Solo mostramos el badge si hay al menos 1 item bajo de stock.
          `lowStockCount > 0 && <span>...</span>` es un truco muy común en
          React: si la condición es false, React no renderiza nada. */}
      {lowStockCount > 0 && <span className="low-stock-badge">{lowStockCount} low</span>}
    </header>
  )
}

export default Header
