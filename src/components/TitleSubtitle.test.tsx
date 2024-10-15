import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import React from 'react'
import TitleSubtitle from './TitleSubtitle'

describe('TitleSubtitle component', () => {
  const titleText = 'Imperial Unit Testing Example'
  const subtitleText = 'Show your skills'

  beforeEach(() => {
    render(<TitleSubtitle title={titleText} subtitle={subtitleText} />)
  })

  it('renders the title correctly', () => {
    expect(screen.getByRole('heading', { name: titleText })).toBeInTheDocument()
  })

  it('renders the subtitle correctly', () => {
    expect(screen.getByText(subtitleText)).toBeInTheDocument()
  })
})
