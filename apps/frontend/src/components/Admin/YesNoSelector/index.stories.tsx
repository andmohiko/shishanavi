import type { Meta, StoryObj } from '@storybook/react'

import { YesNoSelector } from './'

type T = typeof YesNoSelector

const meta = {
  component: YesNoSelector,
  args: {
    name: 'test',
    title: 'テスト',
    value: true,
    onChange: (value: boolean) => {
      console.warn(value)
    },
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
