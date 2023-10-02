import { render, screen } from '../../test-utils'
import Button from './Button'

describe('<Button/>', () => {
  it('should have primary mode', () => {
    render(<Button>button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button.getAttribute('mode')).toBe('primary')
  })
  it('should have secondary mode', () => {
    render(<Button mode="secondary">button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button.getAttribute('mode')).toBe('secondary')
  })
})
