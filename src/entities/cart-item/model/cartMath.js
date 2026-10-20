import { plans } from '../../plan'
import { frames } from '../../frame'

export const MIN_QUANTITY = 1
export const MAX_QUANTITY = 10

export const itemKey = (item) => `${item.planId}-${item.frameId}`

export const findPlan = (planId) => plans.find((plan) => plan.id === planId)
export const findFrame = (frameId) => frames.find((frame) => frame.id === frameId)

export const clampQuantity = (quantity) => Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, quantity))

export const unitPrice = (item) => findPlan(item.planId).price + findFrame(item.frameId).surcharge

export const lineTotal = (item) => unitPrice(item) * item.quantity

export const cartTotal = (items) => items.reduce((sum, item) => sum + lineTotal(item), 0)

export const cartCount = (items) => items.reduce((sum, item) => sum + item.quantity, 0)

export function addOrMerge(items, newItem) {
  const key = itemKey(newItem)
  const exists = items.some((item) => itemKey(item) === key)
  if (!exists) return [...items, { ...newItem, quantity: clampQuantity(newItem.quantity) }]
  return items.map((item) =>
    itemKey(item) === key ? { ...item, quantity: clampQuantity(item.quantity + newItem.quantity) } : item,
  )
}
