import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

type T = typeof Button

const meta = {
  component: Button,
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'var(--black-900)',
    width: '100%',
    height: '100%',
    radius: 'md',
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ReverseFilled: Story = {
  args: {
    variant: 'reverseFilled',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'smallMobile',
    },
  },
}
