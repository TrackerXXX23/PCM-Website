import React from 'react'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: '$1B+', label: 'Assets Under Management' },
  { value: '2', label: 'Provinces Served' },
]

const Stats = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
