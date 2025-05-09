import type { Meta, StoryObj } from '@storybook/react'

import { NavItem } from '.'

import { locationNavItems } from '~/components/Admin/NavMenu/type'

type T = typeof NavItem

const meta = {
  component: NavItem,
  args: {
    ...locationNavItems[1],
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
