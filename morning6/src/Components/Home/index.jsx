import React from 'react'
import HomeDisplay from '../HomeDisplay'

const Home = ({houses, setHouses}) => {
  return (
    <div>
        <HomeDisplay houses={houses} setHouses={setHouses}/>
    </div>
  )
}

export default Home