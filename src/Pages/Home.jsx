import React from 'react'
import Carosel from '../Components/Carosel'
import Rotate from '../Components/Rotate'
import PlannerCollection from '../Components/PlannerCollection'
import SampleCard from '../Components/SampleCard'
import CallendarCollection from '../Components/CallendarCollection'
import JournalCollection from '../Components/JournalCollection'
import Standards from '../Components/Standards'
import StandardsinDetails from '../Components/StandardsinDetails'

function Home() {
  return (
    <>
    <Carosel  />
    <Rotate />
    <PlannerCollection />
<CallendarCollection />
<JournalCollection />
<Standards />
{/* <StandardsinDetails /> */}
    {/* <SampleCard /> */}
       
    </>
  )
}

export default Home