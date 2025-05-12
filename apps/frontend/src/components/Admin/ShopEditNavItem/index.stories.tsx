import type { Meta, StoryObj } from '@storybook/react'

import { ShopEditNavItem } from '.'

import { shopEditMenuNavItems } from '~/components/Admin/ShopEditNavMenu/type'

type T = typeof ShopEditNavItem

const meta = {
  component: ShopEditNavItem,
  args: {
    ...shopEditMenuNavItems[1],
    onClick: (id: number) => {
      console.warn(id)
    },
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Current: Story = {
  args: {
    isCurrent: true,
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
