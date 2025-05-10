import type { Meta, StoryObj } from '@storybook/react'

import { StatusButtons } from './'

type T = typeof StatusButtons

const meta = {
  component: StatusButtons,
  args: {
    initialPublish: true,
    onClickPublish: () => console.warn('publish'),
    onClickUnPublish: () => console.warn('unPublish'),
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
