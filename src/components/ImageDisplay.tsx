import React from 'react'
import { classNames } from 'utils'
type Size = 'small' | 'medium' | 'large'

interface ImageDisplayProps {
  src: string
  alt: string
  size?: Size
}

const sizes: Record<Size, string> = {
  small: 'w-10 h-10',
  medium: 'w-12 h-12',
  large: 'w-full h-25'
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt,
  size = 'large'
}) => {
  return (
    <div className="mx-auto flex max-w-sm overflow-hidden">
      <img className={classNames('flex', sizes[size])} src={src} alt={alt} />
    </div>
  )
}

export default ImageDisplay
