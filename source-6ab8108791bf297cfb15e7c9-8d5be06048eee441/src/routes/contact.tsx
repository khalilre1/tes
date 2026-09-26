import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { PageShell } from '@/components/PageShell'
import { locations } from '@/data/restaurant'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <PageShell title="Contact us">
      <div className="flex flex-col gap-5">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="rounded-2xl border border-amber-500/30 bg-black/45 backdrop-blur-sm p-5 flex flex-col gap-3"
          >
            <h2 className="font-display text-amber-300 font-semibold uppercase tracking-wide text-sm">
              {loc.name}
            </h2>

            <div className="flex items-start gap-3 text-sm text-white/90">
              <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span>{loc.address}</span>
            </div>

            <a
              href={loc.phoneHref}
              className="flex items-center gap-3 text-sm text-white/90 hover:text-amber-300"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              {loc.phone}
            </a>

            <div className="flex items-start gap-3 text-sm text-white/70">
              <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span>{loc.hours}</span>
            </div>

            <div className="flex gap-3 mt-2">
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 py-2 text-xs font-semibold uppercase tracking-wide text-amber-200 hover:bg-amber-500/10"
              >
                Itin&eacute;raire
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={loc.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-amber-400"
              >
                Uber Eats
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
