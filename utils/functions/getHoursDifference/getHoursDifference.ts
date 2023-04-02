export function getHoursDifference(ms: number) {
  const now = Math.ceil(Date.now());

  const msDifference = now - ms;

  if (msDifference > 0) {
    const seconds = Math.floor(msDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 24) {
      return new Date(ms).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else {
      let timePassedAsString = '';

      if (hours < 1) {
        timePassedAsString =
          minutes < 30 ? 'менее 30 минут назад' : 'менее часа назад';
      }
      if (hours >= 1 && hours <= 24) {
        switch (hours) {
          case 1: {
            timePassedAsString = 'час назад';
            break;
          }
          case 21: {
            timePassedAsString = '21 час назад';
            break;
          }
          case 2:
          case 3:
          case 4:
          case 22:
          case 23: {
            timePassedAsString = `${hours} часа назад`;
            break;
          }
          case 24: {
            timePassedAsString = 'вчера';
            break;
          }
          default: {
            timePassedAsString = `${hours} часов назад`;
          }
        }
      }

      return timePassedAsString;
    }
  } else {
    console.log('getDateDifference: argument date more than today date');
    return 'incorrect argument';
  }
}
