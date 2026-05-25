"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="hairline-b"
          style={{ borderTop: i === 0 ? "1px solid var(--rule)" : undefined }}
        >
          <AccordionTrigger
            className="font-serif text-left py-7 gap-8 hover:no-underline"
            style={{
              fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              color: "var(--foreground)",
            }}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className="pb-7 max-w-prose"
            style={{
              color: "var(--ink-light)",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
