import type { Meta, StoryObj } from '@storybook/react'

import { ShopPaymentMethodForm } from '.'

type T = typeof ShopPaymentMethodForm

const meta = {
  component: ShopPaymentMethodForm,
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
