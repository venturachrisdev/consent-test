import UserEntity from '../../core/entities/UserEntity';
import ItemEntity from '../../core/entities/ItemEntity';

export interface IConsentState {
  form: UserEntity;
  items: ItemEntity[];
  loading: boolean;
  created: boolean;
  error?: string;
  users: UserEntity[];
  pagination: {
    currentPage: number,
  };
}

export const consentInitialState: IConsentState = {
  form: {
    name: '',
    email: '',
    agreeTo: [],
  },
  items: [{ id: 1, text: 'Example item' }],
  loading: false,
  created: false,
  users: [],
  pagination: {
    currentPage: 1,
  },
};
