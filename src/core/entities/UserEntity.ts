import ItemEntity from './ItemEntity';

export default interface UserEntity {
  name: string;
  email: string;
  agreeTo: ItemEntity[];
}
