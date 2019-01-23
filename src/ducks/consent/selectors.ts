import {
  calculateOffset,
  getPaginatedData,
  getTotalPages,
} from '../../components/Pagination/paginationUtils';
import UserEntity from '../../core/entities/UserEntity';

export const getPaginatedUsers = (users: UserEntity[], currentPage: number) => {
  const offset = calculateOffset(currentPage);
  return getPaginatedData(users, offset);
};

export const getUserPages = (users: UserEntity[]) => {
  return getTotalPages(users);
};
