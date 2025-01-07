import type { Meta, StoryObj } from '@storybook/react'

import { BudgetAndVacation } from './'

type T = typeof BudgetAndVacation

const meta = {
  component: BudgetAndVacation,
  args: {
    budget: 1000,
    vacation: ['第一日曜日', '祝日'],
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
