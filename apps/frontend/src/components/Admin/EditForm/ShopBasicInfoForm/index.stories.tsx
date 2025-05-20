import type { Meta, StoryObj } from '@storybook/react'

import { ShopBasicInfoForm } from '.'

type T = typeof ShopBasicInfoForm

const meta = {
  component: ShopBasicInfoForm,
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
