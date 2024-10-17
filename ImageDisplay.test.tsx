import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import React from 'react'
import ImageDisplay from './ImageDisplay'

describe('ImageDisplay Component', () => {
  const src = 'test-image.jpg'
  const alt = 'Test image alt text'

  test('renders image with default size (large)', () => {
    render(<ImageDisplay src={src} alt={alt} />)
    const imageElement = screen.getByAltText(alt)

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveClass('w-full h-25') // check for the default size classes
  })

  test('renders image with small size', () => {
    render(<ImageDisplay src={src} alt={alt} size="small" />)
    const imageElement = screen.getByAltText(alt)

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveClass('w-10 h-10') // check for the small size classes
  })

  test('renders image with medium size', () => {
    render(<ImageDisplay src={src} alt={alt} size="medium" />)
    const imageElement = screen.getByAltText(alt)

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveClass('w-12 h-12') // check for the medium size classes
  })

  test('should have the correct src and alt attributes', () => {
    render(<ImageDisplay src={src} alt={alt} />)
    const imageElement = screen.getByAltText(alt)

    expect(imageElement).toHaveAttribute('src', src)
    expect(imageElement).toHaveAttribute('alt', alt)
  })
})
