import type { Meta, StoryObj } from '@storybook/react'

import { ShopEditNavMenu } from '.'

type T = typeof ShopEditNavMenu

const meta = {
  component: ShopEditNavMenu,
  args: {
    currentId: 1,
    onClick: (id: number) => {
      console.warn(id)
    },
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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
