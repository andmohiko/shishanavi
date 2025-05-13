import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '.'

type T = typeof TextArea

const meta = {
  component: TextArea,
  args: {
    title: 'Title',
    type: 'text',
    placeholder: 'Placeholder',
    value: 'Value',
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoValue: Story = {
  args: {
    value: '',
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
