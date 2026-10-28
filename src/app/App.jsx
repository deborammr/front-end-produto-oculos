import { LandingPage } from '../pages/landing'
import { CartProvider } from '../entities/cart-item'
import { PurchaseProvider } from '../features/purchase-modal'
import { CartDrawer } from '../features/cart'
import { CheckoutModal } from '../features/checkout'

export function App() {
  return (
    <CartProvider>
      <PurchaseProvider>
        <div id="app-content">
          <LandingPage />
        </div>
        <CartDrawer />
        <CheckoutModal />
      </PurchaseProvider>
    </CartProvider>
  )
}
