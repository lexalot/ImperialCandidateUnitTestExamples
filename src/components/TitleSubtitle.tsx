// src/components/TitleSubtitle.tsx
import React from 'react'

interface TitleSubtitleProps {
  title: string
  subtitle: string
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mx-auto mb-8 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}

export default TitleSubtitle
