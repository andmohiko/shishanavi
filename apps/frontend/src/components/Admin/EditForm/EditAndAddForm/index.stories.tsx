import type { Meta, StoryObj } from '@storybook/react'

import { EditAndAddShopForm } from '.'

type T = typeof EditAndAddShopForm

const meta = {
  component: EditAndAddShopForm,
  args: {
    currentId: 1,
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Feature: Story = {
  args: {
    currentId: 2,
  },
}

export const Price: Story = {
  args: {
    currentId: 3,
  },
}

export const Equipment: Story = {
  args: {
    currentId: 4,
  },
}
export const Payment: Story = {
  args: {
    currentId: 5,
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
