export function saveToLocalStorage(key: string, data: unknown): void {
  try {
    if (typeof data !== 'undefined' && data !== null) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      throw new Error('Error saving to localStorage: data is undefined or null');
    }
  } catch (error: unknown) {
    throw new Error(`Error saving to localStorage: ${(error as Error).message}`);
  }
}

export function getFromLocalStorage(key: string) {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error: unknown) {
    throw new Error(`Error getting from localStorage: ${(error as Error).message}`);
  }
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error: unknown) {
    throw new Error(`Error removing from localStorage: ${(error as Error).message}`);
  }
}
