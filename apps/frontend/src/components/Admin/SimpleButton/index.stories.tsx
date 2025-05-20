import type { Meta, StoryObj } from '@storybook/react'

import { SimpleButton } from './'

type T = typeof SimpleButton

const meta = {
  component: SimpleButton,
  args: {
    label: 'Simple Button',
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
