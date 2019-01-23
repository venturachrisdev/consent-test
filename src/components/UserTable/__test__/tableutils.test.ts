import ItemEntity from '../../../core/entities/ItemEntity';
import { joinConsents } from '../userTableUtils';

describe('UserTable utils', () => {
  it('should join all the consents by comma', () => {
    const items: ItemEntity[] = [
      { id: 1, text: 'A' },
      { id: 2, text: 'B' },
      { id: 3, text: 'C' },
      { id: 4, text: 'D' },
    ];
    const expected = 'A, B, C, D';
    const joined = joinConsents(items);
    expect(joined).toEqual(expected);
  });
});
