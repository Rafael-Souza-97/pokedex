import '@testing-library/jest-dom/extend-expect';
import {
  clear,
  getItem,
  removeItem,
  setItem,
  store
} from './mocks/LocalStorageMock';

describe(' Testes do Local Storage', () => {
  beforeEach(() => {
    clear();
  });

  it('Deveria retornar null para chave inexistente', () => {
    expect(getItem('chave-inexistente')).toBeNull();
  });

  it('Deveria salvar uma string', () => {
    const key = 'minha-chave';
    const value = 'meu-valor';
    setItem(key, value);

    expect(store[key]).toBe(value);
  });

  it('Deveria retornar valor salvo por setItem', () => {
    const key = 'minha-chave';
    const value = 'meu-valor';
    setItem(key, value);

    expect(getItem(key)).toBe(value);
  });

  it('Deveria remover a chave do armazenamento', () => {
    const key = 'minha-chave';
    const value = 'meu-valor';
    setItem(key, value);

    removeItem(key);
    expect(getItem(key)).toBeNull();
  });

  it('Deveria remover todas as chaves do armazenamento', () => {
    setItem('chave-1', 'valor-1');
    setItem('chave-2', 'valor-2');
    setItem('chave-3', 'valor-3');

    clear();

    expect(Object.keys(store).length).toBe(0);
  });
});
