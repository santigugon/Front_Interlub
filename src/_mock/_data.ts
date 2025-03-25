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
    'Pedido #IVP04039, $4220',
    'Factura de IVP07169 ha sido pagada',
    'Pedido #37745 de IVP04009 desde Septiembre',
    'Nuevo pedido de IVP11694 colocado #XF-2356',
    'Nuevo pedido de IVP11159 colocado #XF-2346',
  ][index],
  type: `order${index + 1}`,
  time: _times(index), // Adjusted time, 1 hour less for each index
}));

// ----------------------------------------------------------------------

export const _tasks = [
  {
    id: _id(1),
    name: 'Reabastecer IVP04039',
    description: 'Reponer stock del IVP04039',
    assignedTo: 'Juan Pérez',
    status: 'Pendiente',
    time: _times(1),
  },
  {
    id: _id(2),
    name: 'Reabastecer IVP07165',
    description: 'Reponer stock del IVP07165',
    assignedTo: 'Ana Gómez',
    status: 'Completado',
    time: _times(2),
  },
  {
    id: _id(3),
    name: 'Reabastecer IVP04009',
    description: 'Reponer stock del IVP04009',
    assignedTo: 'Carlos Martínez',
    status: 'Pendiente',
    time: _times(3),
  },
  {
    id: _id(4),
    name: 'Actualizar inventario de IVP11694',
    description: 'Actualizar el inventario de IVP11694',
    assignedTo: 'Lucía Rodríguez',
    status: 'En Progreso',
    time: _times(4),
  },
  {
    id: _id(5),
    name: 'Enviar IVP11159 al Cliente',
    description: 'Enviar IVP11159 al cliente X',
    assignedTo: 'Pedro López',
    status: 'Completado',
    time: _times(5),
  },
  {
    id: _id(6),
    name: 'Enviar IVP11162 al Cliente',
    description: 'Enviar IVP11162 al cliente Y',
    assignedTo: 'María Torres',
    status: 'En Progreso',
    time: _times(6),
  },
  {
    id: _id(7),
    name: 'Reabastecer IVP07331',
    description: 'Reponer stock del IVP07331',
    assignedTo: 'Ricardo Sánchez',
    status: 'Pendiente',
    time: _times(7),
  },
];

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
    title: 'IVP04009',
    description: 'El producto está en stock y listo para ser enviado',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: '2025-03-25T17:00:00.000Z',
    isUnRead: false,
  },
];
