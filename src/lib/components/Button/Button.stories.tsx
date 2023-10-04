import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Feo/Button',
  argTypes: {
    mode: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = (args: ButtonProps) => <Button {...args} />
Primary.args = {
  mode: 'primary',
  children: 'button',
}

export const Secondary: Story = (args: ButtonProps) => <Button {...args} />
Secondary.args = {
  mode: 'secondary',
  children: 'button',
}
