import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

type T = typeof Input

const meta = {
  component: Input,
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

export const Number: Story = {
  args: {
    type: 'number',
    value: 123456789,
  },
}

export const Tel: Story = {
  args: {
    type: 'tel',
    value: '09012345678',
  },
}

export const Time: Story = {
  args: {
    type: 'time',
    value: '12:34',
  },
}

export const Date: Story = {
  args: {
    type: 'date',
    value: '2023-10-01',
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
