import { useMemo, type ComponentProps, type ReactNode } from 'react'

import styles from './styles.module.css'
import { radiusSize, whiteColor, type Radius, type Variant } from './type'

type Props = {
  label: ReactNode
  variant?: Variant
  color?: string
  width?: string
  height?: string
  radius?: Radius
} & ComponentProps<'button'>

export const Button = ({
  label,
  variant = 'filled',
  color = 'var(--black-900)',
  width = '100%',
  height = '100%',
  radius = 'md',
  ...props
}: Props): ReactNode => {
  const style = useMemo(() => {
    const baseStyle = {
      color: whiteColor,
      backgroundColor: color,
      width,
      height,
      borderRadius: radiusSize[radius],
      border: 'none',
    }

    switch (variant) {
      case 'filled':
        return baseStyle
      case 'reverseFilled':
        return {
          ...baseStyle,
          color,
          backgroundColor: whiteColor,
        }
      default:
        return baseStyle
    }
  }, [color, variant, width, radius, height])

  return (
    <button className={styles.button} style={{ ...style }} {...props}>
      {label}
    </button>
  )
}
