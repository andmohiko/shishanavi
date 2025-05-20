import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '.'

type T = typeof Select

const meta = {
  component: Select,
  args: {
    title: 'Title',
    defaultValue: '',
    children: [
      <option key="1" value="1">
        Option 1
      </option>,
      <option key="2" value="2">
        Option 2
      </option>,
      <option key="3" value="3">
        Option 3
      </option>,
    ],
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
