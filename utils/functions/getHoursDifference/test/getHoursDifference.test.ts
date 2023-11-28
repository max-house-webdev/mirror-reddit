// import '@typet';

import { getHoursDifference } from '../getHoursDifference';

const msNow = Math.floor(Date.now());
// eslint-disable-next-line no-console
console.log('now is: ', msNow, 'ms');

const oneMinute = 60 * 1000;
const oneHour = 60 * oneMinute;
const tenMinutes = 10 * oneMinute;
const thirtyMinutes = 30 * oneMinute;

describe('getHoursDifference should return', () => {
  it('incorrect argument if ms > argument date more than today date', () => {
    expect(getHoursDifference(msNow + 1e6)).toBe('incorrect argument');
  });

  it('менее 30 минут назад', () => {
    expect(getHoursDifference(msNow - thirtyMinutes + tenMinutes)).toBe(
      'менее 30 минут назад'
    );
  });

  it('менее часа назад', () => {
    expect(getHoursDifference(msNow - thirtyMinutes - tenMinutes)).toBe(
      'менее часа назад'
    );
  });

  it('час назад', () => {
    expect(getHoursDifference(msNow - oneHour)).toBe('час назад');
  });

  it('21 час назад', () => {
    expect(getHoursDifference(msNow - oneHour * 21)).toBe('21 час назад');
  });

  it('2 часа назад', () => {
    expect(getHoursDifference(msNow - oneHour * 2)).toBe('2 часа назад');
  });

  it('3 часа назад', () => {
    expect(getHoursDifference(msNow - oneHour * 3)).toBe('3 часа назад');
  });

  it('4 часа назад', () => {
    expect(getHoursDifference(msNow - oneHour * 4)).toBe('4 часа назад');
  });

  it('22 часа назад', () => {
    expect(getHoursDifference(msNow - oneHour * 22)).toBe('22 часа назад');
  });

  it('23 часа назад', () => {
    expect(getHoursDifference(msNow - oneHour * 23)).toBe('23 часа назад');
  });

  it('5 часов назад', () => {
    expect(getHoursDifference(msNow - oneHour * 5)).toBe('5 часов назад');
  });

  it('вчера', () => {
    expect(getHoursDifference(msNow - oneHour * 24)).toBe('вчера');
  });

  it('20 января 1970 г.', () => {
    expect(getHoursDifference(1643384283)).toBe('20 января 1970 г.');
  });
});
