

export const headerLinks = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Criar evento',
    route: '/eventos/criar-evento'
  },
  {
    label: 'Meu Perfil',
    route: '/meu-perfil',

  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  entDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: ''
}