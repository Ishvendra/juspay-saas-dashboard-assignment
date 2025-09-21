import { getInitials } from '../utils';
describe('getInitials', () => {
  it('should return the first initial', () => {
    expect(getInitials('Tom Cook')).toBe('T');
  });
  it('should return an empty string for invalid inputs', () => {
    expect(getInitials(null)).toBe('');
  });
});
