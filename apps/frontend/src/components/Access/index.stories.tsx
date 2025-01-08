import type { Meta, StoryObj } from '@storybook/react'

import { Access } from './'

type T = typeof Access

const meta = {
  component: Access,
  args: {
    address: '東京都豊島区',
    access: '池袋駅から徒歩１０分',
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
