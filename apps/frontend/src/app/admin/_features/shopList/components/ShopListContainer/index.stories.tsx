import type { Meta, StoryObj } from '@storybook/react'

import { ShopListContainer } from './'

type T = typeof ShopListContainer

const meta = {
  title: 'admin/features/containers/ShopListContainer',
  component: ShopListContainer,
  args: {},
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
