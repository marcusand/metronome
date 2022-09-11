export type SaveToLocalStorage = <T>(state: T, storageItemName: string) => void;
export type LoadFromLocalStorage = <T>(storageItemName: string) => T | undefined;

export const saveToLocalStorage: SaveToLocalStorage = (state, storageItemName) => {
  try {
    const stateSerialized = JSON.stringify(state);
    localStorage.setItem(storageItemName, stateSerialized);
  } catch (error) {
    console.warn(error);
  }
};

export const loadFromLocalStorage: LoadFromLocalStorage = (storageItemName) => {
  try {
    const stateSerialized = localStorage.getItem(storageItemName);

    if (stateSerialized === null) {
      return undefined;
    }

    return JSON.parse(stateSerialized);
  } catch (error) {
    console.warn(error);

    return undefined;
  }
};
