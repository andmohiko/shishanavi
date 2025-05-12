import type { Meta, StoryObj } from '@storybook/react'

import { ShopEditLayoutHeader } from '.'

type T = typeof ShopEditLayoutHeader

const meta = {
  component: ShopEditLayoutHeader,
  args: {
    currentId: 1,
    onClickEdit: () => {
      console.warn('onClickEdit')
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
