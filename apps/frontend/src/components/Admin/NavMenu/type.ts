import type { NavMenuType } from '~/components/Admin/NavItem/type'

export const locationNavItems: Array<NavMenuType> = [
  {
    label: 'すべて',
    href: '/admin',
  },
  {
    label: '池袋',
    href: '/admin?area=2',
  },
  {
    label: '新宿',
    href: '/admin?area=3',
  },
  {
    label: '渋谷',
    href: '/admin?area=4',
  },
  {
    label: '難波',
    href: '/admin?area=5',
  },
]
