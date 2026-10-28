import { useState } from 'react'
import { FaqItem } from '../../../entities/faq-item'

export function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null)

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <FaqItem
            item={item}
            open={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        </li>
      ))}
    </ul>
  )
}
