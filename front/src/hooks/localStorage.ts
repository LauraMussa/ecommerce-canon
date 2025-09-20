export const saveLocalStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return item;
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
