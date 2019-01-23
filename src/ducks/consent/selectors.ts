import { calculateOffset, ITEMS_PER_PAGE } from 'src/components/Pagination/paginationUtils';
import UserEntity from 'src/core/entities/UserEntity';

export const getPaginatedUsers = (users: UserEntity[], currentPage: number) => {
  const offset = calculateOffset(currentPage);
  return users.slice(offset, offset + ITEMS_PER_PAGE);
};

export const getTotalPages = (users: UserEntity[]) => {
  return Math.round(users.length / ITEMS_PER_PAGE);
};
