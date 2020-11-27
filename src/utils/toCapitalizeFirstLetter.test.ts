import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку, возвращать строку с большой буквы', () => {
    expect(toCapitalizeFirstLetter('test')).toEqual('Test');
  });
  test('Должна принимать символ, возвращать строку с большой буквы', () => {
    expect(toCapitalizeFirstLetter('ч')).toEqual('Ч');
  });
  test('Должна принимать пустую строку, возвращать пустую строку', () => {
    expect(toCapitalizeFirstLetter('')).toEqual('');
  });
  test('Должна принимать число, возвращать null', () => {
    expect(toCapitalizeFirstLetter(3232)).toEqual(null);
  });
});
