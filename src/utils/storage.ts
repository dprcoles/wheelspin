const OPTIONS_STORAGE_KEY = "wheelOptions";

export const setOptionsInStorage = (options: Array<string>) =>
  localStorage.setItem(OPTIONS_STORAGE_KEY, JSON.stringify(options));

export const getOptionsFromStorage = () =>
  JSON.parse(localStorage.getItem(OPTIONS_STORAGE_KEY) || "[]");
