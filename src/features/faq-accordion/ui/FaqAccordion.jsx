import { useState } from 'react'
import { FaqItem } from '../../../entities/faq-item'

export function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div>
      {items.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          open={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  )
}
