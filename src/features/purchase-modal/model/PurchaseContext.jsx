import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { PurchaseModal } from '../ui/PurchaseModal'

const PurchaseContext = createContext(null)

export function PurchaseProvider({ children }) {
  const [state, setState] = useState({ open: false, planId: null, frameId: null, session: 0 })

  // openPurchase({ planId, frameId }) abre o configurador com itens pré-selecionados
  const openPurchase = useCallback(({ planId = null, frameId = null } = {}) => {
    setState((prev) => ({ open: true, planId, frameId, session: prev.session + 1 }))
  }, [])

  const closePurchase = useCallback(() => {
    setState((prev) => ({ ...prev, open: false }))
  }, [])

  const value = useMemo(() => ({ openPurchase }), [openPurchase])

  return (
    <PurchaseContext.Provider value={value}>
      {children}
      <PurchaseModal
        key={state.session}
        open={state.open}
        initialPlanId={state.planId}
        initialFrameId={state.frameId}
        onClose={closePurchase}
      />
    </PurchaseContext.Provider>
  )
}

export function usePurchase() {
  const context = useContext(PurchaseContext)
  if (!context) throw new Error('usePurchase deve ser usado dentro de PurchaseProvider')
  return context
}
