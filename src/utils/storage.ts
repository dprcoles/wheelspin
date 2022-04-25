const OPTIONS_STORAGE_KEY = "wheelOptions";

export const setOptionsInStorage = (options: Array<string>) =>
  typeof window !== "undefined" &&
  localStorage.setItem(OPTIONS_STORAGE_KEY, JSON.stringify(options));

export const getOptionsFromStorage = () =>
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(OPTIONS_STORAGE_KEY) || "[]")
    : [];
