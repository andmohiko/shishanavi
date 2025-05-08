import type { Meta, StoryObj } from '@storybook/react'

import { ShopName } from '.'

type T = typeof ShopName

const meta = {
  component: ShopName,
  args: {
    name: 'SHISHA maya -cafe&Bar- 池袋東口店',
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'smallMobile',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
