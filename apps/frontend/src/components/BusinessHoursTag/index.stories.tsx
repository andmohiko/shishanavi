import type { Meta, StoryObj } from '@storybook/react'

import { BusinessHoursTag } from '.'

type T = typeof BusinessHoursTag

const meta = {
  component: BusinessHoursTag,
  args: {
    isOpen: true,
    startTime: '12:00',
    endTime: '18:00',
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Closed: Story = {
  args: {
    isOpen: false,
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
