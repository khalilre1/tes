import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'

export function PageShell({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen w-full relative text-white">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/.netlify/images?url=/images/charcoal-bg.jpg&w=900&fm=webp&q=70')",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/70" />

      <div className="max-w-md mx-auto px-5 pt-6 pb-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-amber-300/90 text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>
        <h1 className="font-display text-2xl font-bold gold-gradient-text mb-6">{title}</h1>
        {children}
      </div>
    </div>
  )
}
