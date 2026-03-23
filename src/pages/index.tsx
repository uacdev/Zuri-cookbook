import { Hero } from "../sections/hero"
import { OurFlavours } from "../sections/our-flavours"
import { Photos } from "../sections/photos"
import { WhatsCooking } from "../sections/whats-cooking"
import { WhyZuri } from "../sections/why-zuri"

function LandingPage() {

  return (
    <>
      <Hero />
      <WhatsCooking />
      <OurFlavours />
      <WhyZuri />
      <Photos />
    </>
  )
}

export default LandingPage
