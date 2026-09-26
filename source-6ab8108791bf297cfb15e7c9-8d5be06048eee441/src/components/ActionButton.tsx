import React from 'react'

type ActionButtonProps = {
  icon: React.ReactNode
  label: string
  href: string
  target?: string
  className?: string
}

export function ActionButton({ icon, label, href, target, className }: ActionButtonProps) {
  return (
    <a 
      href={href} 
      target={target}
      className={`flex items-center w-full p-4 rounded-2xl font-bold text-lg transition-all ${className}`}
    >
      <div className="mr-4">
        {icon}
      </div>
      <span className="flex-grow text-center pr-8">{label}</span>
    </a>
  )
}
