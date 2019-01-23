
export const MAX_PAGINATION_RANGE = 5;
export const ITEMS_PER_PAGE: number = 2;

/**
 * This method is responsible for calculating the offset for pagination based on the current page
 * @param currentPage
 * @param perPage
 * Ex:
 * calculateOffset(1) => 0
 * calculateOffset(2) => 2
 * calculateOffset(3) => 4
 */
export const calculateOffset = (currentPage: any,
                                perPage: number = ITEMS_PER_PAGE) => (currentPage - 1) * perPage;

/**
 * This method is responsible for setting the range (min and max) of pages to print
 * based on the current page. It uses the MAX_PAGINATION_RANGE constants to set the range
 * biased to one side or another if there's enough space.
 * @param currentPage
 * @param totalPages
 * Ex:
 * [..., 3, 4, (5), 6, 7, ...] => [3, 7]
 * [..., 5, 6, (7), 8, 9, ...] => [5, 9]
 */
export const getMinMaxRange = (currentPage: number, totalPages: number) => {
  let min = 1;
  let max = totalPages;
  // one side should content the half of the number of pages
  const half = Math.floor(MAX_PAGINATION_RANGE / 2);
  // if current is min possible, give all the space to the right.
  if (currentPage === min) {
    max = MAX_PAGINATION_RANGE;
  } else if (currentPage - half > min) {
    min = currentPage - half;
  }
  if (currentPage + half < max) {
    max = currentPage + half;
  }

  return [min, max];
};

/**
 * This method return the portion of the data based on the limit and offset
 * @param data
 * @param offset
 * @param perPage
 */
export const getPaginatedData = (data: any[],
                                 offset: number,
                                 perPage: number = ITEMS_PER_PAGE) => {
  return data.slice(offset, offset + perPage);
};

/**
 * This method returns the pages calculated by the data size and items per page
 * @param data
 * @param perPage
 */
export const getTotalPages = (data: any[],
                              perPage: number = ITEMS_PER_PAGE) => {
  return Math.ceil(data.length / perPage);
};
