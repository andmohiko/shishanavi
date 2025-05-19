import type { Meta, StoryObj } from '@storybook/react'

import { ShopEquipmentAndRulesForm } from '.'

type T = typeof ShopEquipmentAndRulesForm

const meta = {
  component: ShopEquipmentAndRulesForm,
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
