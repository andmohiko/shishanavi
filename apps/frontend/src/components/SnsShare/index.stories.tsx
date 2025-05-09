import type { Meta, StoryObj } from '@storybook/react'

import { SnsShare } from '.'

type T = typeof SnsShare

const meta = {
  component: SnsShare,
  args: {
    instagramUrl: 'https://example.com',
    xUrl: 'https://example.com',
    lineUrl: 'https://example.com',
    googleMapUrl: 'https://example.com',
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SnsEmpty: Story = {
  args: {
    instagramUrl: undefined,
    xUrl: undefined,
    lineUrl: undefined,
    googleMapUrl: undefined,
  },
}

export const SnsOnlyGoogleMap: Story = {
  args: {
    instagramUrl: undefined,
    xUrl: undefined,
    lineUrl: undefined,
    googleMapUrl: 'https://example.com',
  },
}

export const SnsOnlyInstagram: Story = {
  args: {
    instagramUrl: 'https://example.com',
    xUrl: undefined,
    lineUrl: undefined,
    googleMapUrl: undefined,
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
