import ItemEntity from 'src/core/entities/ItemEntity';

export default interface UserEntity {
  name: string;
  email: string;
  agreeTo: ItemEntity[];
}
