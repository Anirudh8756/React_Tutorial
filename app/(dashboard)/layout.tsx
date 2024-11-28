import React from 'react'

const Dashboard = ({children} :{children: React.ReactNode}) => {
  return (
    <div>
        <section className="h-[40px] pt-[8px] rounded-b-lg bg-purple-700 text-center text-white">
                DASHBOARD NAVBAR
        </section>
  {children}
    </div>
  )
}

export default Dashboard