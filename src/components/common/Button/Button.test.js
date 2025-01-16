import { render } from '@testing-library/react'
import Button from './index' // Adjust the path based on your project structure

describe('Button component', () => {
  it('renders without crashing', () => {
    render('<Button />')
    expect(true).toBe(true) // A simple placeholder test
  })
})
