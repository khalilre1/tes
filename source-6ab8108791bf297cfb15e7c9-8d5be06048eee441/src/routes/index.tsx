import { createFileRoute } from '@tanstack/react-router'
import { ActionButton } from '@/components/ActionButton'
import { restaurant } from '@/data/restaurant'
import { Utensils, MapPin, Phone, Star, Coffee } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[url('/.netlify/images?url=/images/homestyle-bg.jpg&w=1200')] bg-cover bg-center flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-brand-bg/85 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-8 mt-10 mb-10">
        
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-brand-primary shadow-xl bg-white p-2 flex items-center justify-center">
          <img 
            src={restaurant.logo} 
            alt={restaurant.name} 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-brand-text mb-3 tracking-tight">
            {restaurant.name}
          </h1>
          <p className="text-lg text-brand-primary font-medium px-4">
            {restaurant.description}
          </p>
        </div>

        <div className="w-full flex flex-col space-y-4">
          <ActionButton 
            icon={<Utensils />} 
            label="View Our Menu" 
            href="/menu" 
            className="bg-brand-primary text-white hover:bg-brand-primary-hover btn-shadow"
          />
          <ActionButton 
            icon={<Phone />} 
            label="Order Takeout" 
            href={`tel:${restaurant.locations[0].phone}`} 
            className="bg-brand-secondary text-brand-text hover:bg-brand-secondary-hover btn-shadow"
          />
          <ActionButton 
            icon={<MapPin />} 
            label="Location & Hours" 
            href="/contact" 
            className="bg-brand-secondary text-brand-text hover:bg-brand-secondary-hover btn-shadow"
          />
          <ActionButton 
            icon={<Star />} 
            label="Read Our Reviews" 
            href="https://www.google.com/search?q=Homestead+Restaurant+Riverview+NB" 
            target="_blank"
            className="bg-brand-secondary text-brand-text hover:bg-brand-secondary-hover btn-shadow"
          />
          <ActionButton 
            icon={<Coffee />} 
            label="Decadent Desserts" 
            href="/menu#desserts" 
            className="bg-brand-secondary text-brand-text hover:bg-brand-secondary-hover btn-shadow"
          />
        </div>
      </div>
    </div>
  )
}
