import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { addOrMerge, cartCount, cartTotal, clampQuantity, itemKey } from './cartMath'

const CartContext = createContext(null)

// panel: qual painel do carrinho está aberto — 'none' | 'cart' | 'checkout'
export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [panel, setPanel] = useState('none')

  const addItem = useCallback((item) => setItems((prev) => addOrMerge(prev, item)), [])

  const setQuantity = useCallback((key, quantity) => {
    setItems((prev) =>
      prev.map((item) => (itemKey(item) === key ? { ...item, quantity: clampQuantity(quantity) } : item)),
    )
  }, [])

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((item) => itemKey(item) !== key))
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setPanel('cart'), [])
  const openCheckout = useCallback(() => setPanel('checkout'), [])
  const closePanel = useCallback(() => setPanel('none'), [])

  const value = useMemo(
    () => ({
      items,
      count: cartCount(items),
      total: cartTotal(items),
      panel,
      addItem,
      setQuantity,
      removeItem,
      clear,
      openCart,
      openCheckout,
      closePanel,
    }),
    [items, panel, addItem, setQuantity, removeItem, clear, openCart, openCheckout, closePanel],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider')
  return context
}
