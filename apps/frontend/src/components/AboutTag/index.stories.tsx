import type { Meta, StoryObj } from '@storybook/react'

import { AboutTag } from './'

type T = typeof AboutTag

const meta = {
  component: AboutTag,
  args: {
    name: 'シーシャ',
    value: ' ¥ 1,000 ~',
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithArray: Story = {
  args: {
    name: 'その他',
    value: [
      'シェアチャージ　¥800',
      'ボトルアルコール 1ショット　¥500',
      'ボトルアイス　¥300',
    ],
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
