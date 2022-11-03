import React from 'react'
import LineChart from '../components/Chart/LineChart/LineChart'
import Pie from '../components/Chart/Pipechart/PipeChart'
import "../Styles/Analytics.css"
function Analytics() {
  return (
    <div className='tic'>
      <LineChart/>
       <Pie/>
    </div>
  )
}

export default Analytics