import HotelFilter from '@/components/hotels/HotelFilter'
import HotelList from '@/components/hotels/HotelList'
import PagesHero from '@/components/PagesHero'
import React from 'react'

const HotelsPage = () => {
  return (
    <div>
      <PagesHero />
      <HotelFilter />
      <HotelList />
    </div>
  )
}

export default HotelsPage