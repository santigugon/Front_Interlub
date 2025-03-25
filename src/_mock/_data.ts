import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
  _unidades,
  _ventas,
  _tipo,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Datostadas',
  email: 'demo@datostadas.cc',
  photoURL: '/assets/images/avatar/avatar-15.webp',
};

// ----------------------------------------------------------------------

export const _users = [...Array(9)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _tipo(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/oils/${_tipo(index)}.png`,
  status: _ventas(index),
  role: _unidades(index),
}));

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: `/assets/images/cover/cover-${index + 10}.webp`,
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `/assets/images/avatar/avatar-${index + 3}.webp`,
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: `/assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status:
      ([1, 3, 5].includes(setIndex) && 'sale') || ([4, 8, 12].includes(setIndex) && 'new') || '',
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/flags/ic-flag-de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/flags/ic-flag-fr.svg',
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    '1983, orders, $4220',
    '12 Invoices have been paid',
    'Order #37745 from September',
    'New order placed #XF-2356',
    'New order placed #XF-2346',
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

// ----------------------------------------------------------------------

export const _tasks = [...Array(5)].map((_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'IVP07169',
    description: 'El stock de este producto es bajo',
    avatarUrl: '/assets/images/oils/Grasas.png',
    type: 'order-placed',
    postedAt: '2025-03-25T00:00:00.000Z',
    isUnRead: true,
  },
  {
    id: _id(2),
    title: 'IVP07169',
    description: 'El stock no es suficiente para la demanda estimada',
    avatarUrl: '/assets/images/oils/Grasas.png',
    type: 'friend-interactive',
    postedAt: '2025-03-25T00:00:00.000Z',
    isUnRead: true,
  },
  {
    id: _id(3),
    title: 'IVP07165',
    description: 'El stock no es suficiente para la demanda estimada',
    avatarUrl: '/assets/images/oils/Grasas.png',
    type: 'friend-interactive',
    postedAt: '2025-03-25T00:00:00.000Z',
    isUnRead: true,
  },
  {
    id: _id(4),
    title: 'IVP04039',
    description: 'Bimbo pidió 150 unidades',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(4),
    isUnRead: false,
  },
  {
    id: _id(5),
    title: 'IVP)4009',
    description: 'El producto está en stock y listo para ser enviado',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: '2025-03-25T17:00:00.000Z',
    isUnRead: false,
  },
];
