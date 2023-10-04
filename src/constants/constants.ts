export const MOVIE_TITLE = 'Star Wars'

export const CREATOR_USERNAME = 'Eleanor Pena'

export const USER_ROLE = 'Creator'

export const MOVIE_DESCRIPTION =
  'Just as troubled medium Roman Mercer prepares to leave the one-horse town of Port Moore, an earthquake strikes the Alaskan island and awakens a supernatural force hell-bent on destruction.Just as troubled medium Roman Mercer prepares to leave the one-horse town of Port Moore, an earthquake strikes t'

export const CAST_INFORMATION = [
  {
    id: 0,
    data: {
      title: 'Directors',
      text: 'Vincent d’Onofrio, Kim Coates, Avan Jogia, Kandyse Mcclure, Meat Loaf, Kristin Lehman',
    },
  },
  {
    id: 2,
    data: {
      title: 'Stars',
      text: 'Vincent d’Onofrio, Kim Coates, Avan Jogia, Kandyse Mcclure, Meat Loaf, Kristin Lehman, Luvia Petersen Vincent d’Onofrio, Kim Coates, Avan Jogia',
    },
  },
]

export enum BTN_TITLES {
  Watch = 'Watch Now',
  Details = 'Details',
  ContactUs = 'Contact us',
  ContactUsForms = 'Contact us, using eff-forms',
}

export const MOVIE_TAGS = [
  { id: 0, tagText: 'Thriller' },
  { id: 1, tagText: 'Horror' },
  { id: 2, tagText: 'Drama' },
  { id: 3, tagText: 'Action' },
  { id: 4, tagText: 'Comedy' },
]

export const MOVIE_LABELS = [
  { id: 0, text: 'PG-13' },
  { id: 1, text: '1h 42m' },
]

export const BTN_TEXT_SQUARE = 'Just for a test'

export const COUNTRIES = ['France', 'Italy', 'Spain']

export const GENDER_RADIO_VALUES = [
  { id: 0, value: 'man', label: 'Man' },
  { id: 1, value: 'woman', label: 'Woman' },
]

export const responseError = 'Error. Something went wrong.'

export const MSG = {
  THANKS_REQ: ', thanks for your request!',
  SIGNED_AS: 'Signed in as ',
}

export enum ERROR_MSG {
  Required = 'Required field',
  NotChecked = 'Should be checked',
  NotEmail = `Doesn't match email format`,
  NotPhone = `Doesn't match phone format`,
  MinSymb = 'Should be at least 2 symbols',
  MaxSymb = 'Should be not more than 20 symbols',
}
