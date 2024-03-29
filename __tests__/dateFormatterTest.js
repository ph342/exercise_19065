import {format} from '../src/dateFormatter';

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('when the system date and the date to format are not the same day formats as "DD/MM/YYYY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2017, December, 15, 10, 5).getTime(); //Different day same time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('15/12/2017');
});