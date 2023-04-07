'use client'

import React from 'react'
import Image from 'next/image'
import ring from './ring.svg'

const Dashboard = () => {
  return (
    <div className="mt-2">
      I'm a dashboard!
      <Image className="mt-6" src={ring} alt="ring" />
    </div>
  )
}

export default Dashboard
