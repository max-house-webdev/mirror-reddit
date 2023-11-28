interface ISetItem {
  key: string;
  value: {} | string;
}

export function setLocalSessionItem({ key, value }: ISetItem) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

export function getLocalSessionItem(key: string) {
  try {
    const jsonItem = window.sessionStorage.getItem(key);

    if (!jsonItem) return null;

    return JSON.parse(jsonItem);
  } catch (e) {
    console.error(e);
  }
}

export function removeLocalSessionItem(key: string) {
  window.sessionStorage.removeItem(key);
}
