import { ItemPayload, OptionsValue, SortMenuTypes } from 'todo-types'
import { Terbaru, Terlama, AZ, ZA, BelumSelesai } from '../assets/sort-menu'

export const sortMenu: SortMenuTypes[] = [
  {
    value: 'terbaru',
    label: 'Terbaru',
    Icon: Terbaru,
  },
  {
    value: 'terlama',
    label: 'Terlama',
    Icon: Terlama,
  },
  {
    value: 'a-z',
    label: 'A-Z',
    Icon: AZ,
  },
  {
    value: 'z-a',
    label: 'Z-A',
    Icon: ZA,
  },
  {
    value: 'belum-selesai',
    label: 'Belum Selesai',
    Icon: BelumSelesai,
  },
]
export const defaultSortMenu = sortMenu[0]
export const intialActivities = {
  title: 'New Activity',
  email: 'xvnyan@gmail.com',
}

export const intialFormItem: ItemPayload = {
  activity_group_id: 0,
  priority: 'very-high',
  title: '',
}

export const priority: OptionsValue[] = [
  {
    label: 'Very High',
    value: 'very-high',
    selected: true,
    color: '#ED4C5C',
  },
  {
    label: 'High',
    value: 'high',
    selected: false,
    color: '#F8A541',
  },
  {
    label: 'Medium',
    value: 'normal',
    selected: false,
    color: '#00A790',
  },
  {
    label: 'Low',
    value: 'low',
    selected: false,
    color: '#428BC1',
  },
  {
    label: 'Very Low',
    value: 'very-low',
    selected: false,
    color: '#8942C1',
  },
]
