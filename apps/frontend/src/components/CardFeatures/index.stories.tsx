import type { Meta, StoryObj } from '@storybook/react'

import { CardFeatures } from './'

type T = typeof CardFeatures

const meta = {
  component: CardFeatures,
  args: {
    features: [
      {
        title: '機材ブランド',
        value: ['Dschinni', 'Mamay Custom', 'NOMAD', 'Union hookah', 'Maya'],
      },
      {
        title: 'フレーバー',
        value: '100種類以上',
      },
    ],
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
