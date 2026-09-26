import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/PageShell'
import { menu } from '@/data/restaurant'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
})

function MenuPage() {
  return (
    <PageShell title="Menu">
      <div className="flex flex-col gap-6">
        {menu.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-amber-500/30 bg-black/45 backdrop-blur-sm p-5"
          >
            <h2 className="font-display text-amber-300 font-semibold uppercase tracking-wide text-sm mb-3">
              {category.name}
            </h2>
            <ul className="flex flex-col gap-2">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between text-sm gap-3"
                >
                  <span className="text-white/90">{item.name}</span>
                  <span className="flex-1 border-b border-dotted border-white/15 translate-y-[-3px]" />
                  <span className="text-amber-200 font-semibold whitespace-nowrap">
                    {item.price.toFixed(2)} $
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-center text-white/40 text-xs mt-2">
          Prix sujets à changement. Commandez en ligne via Uber Eats — voir la page Contact.
        </p>
      </div>
    </PageShell>
  )
}
