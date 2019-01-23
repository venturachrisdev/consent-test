import {
  calculateOffset,
  getMinMaxRange,
  getPaginatedData,
  getTotalPages,
} from '../paginationUtils';

describe('Pagination helpers', () => {
  it('should calculate the offset based on default item per page', () => {
    // ITEM_PER_PAGE = 2
    const offset = calculateOffset(5);
    expect(offset).toBe(8);
  });

  it('should calculate the offset based on custom item per page', () => {
    // ITEM_PER_PAGE = 2
    const offset = calculateOffset(5, 10);
    expect(offset).toBe(40);
  });

  it('should return the range based on current page', () => {
    const range = getMinMaxRange(5, 10);
    // [3, 4, (5), 6, 7] => [3, 7]
    expect(range).toHaveLength(2);
    expect(range).toEqual([3, 7]);
  });

  it('should return the range when current page is one', () => {
    const range = getMinMaxRange(1, 10);
    // [(1), 2, 3, ...] => [1, 4]
    expect(range).toHaveLength(2);
    expect(range).toEqual([1, 3]);
  });

  it('should return the range when current page is lest', () => {
    const range = getMinMaxRange(10, 10);
    // [..., 8, 9, (10)] => [7, 10]
    expect(range).toHaveLength(2);
    expect(range).toEqual([8, 10]);
  });

  it('should return the data paginated', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const offset = calculateOffset(2);
    const paginated = getPaginatedData(data, offset);

    expect(paginated).toEqual([3, 4]);
  });

  it('should return the total pages of the data', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pagesFive = getTotalPages(data, 5);
    const pagesThree = getTotalPages(data, 3);

    expect(pagesFive).toEqual(2);
    expect(pagesThree).toEqual(4); // 3 x 3 + 1
  });

});
