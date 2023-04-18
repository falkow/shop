import { initialState } from '../context/Cart/CartContext';
import { ACTIONS } from '../context/Cart/actions';
import { DummyProductType } from '../types/types';
import { reducer } from '../context/Cart/reducer';
import { test, describe, expect } from 'vitest';

describe('Test reducer used in Cart', () => {
  test('should return initial state', () => {
    expect(initialState).toEqual({ items: [], price: 0 });
  });
  const testProduct: DummyProductType = {
    brand: 'Apple',
    category: 'smartphones',
    description: 'An apple mobile which is nothing like apple',
    discountPercentage: 12.96,
    id: 1,
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    title: 'iPhone 9',
  };
  const testProduct2: DummyProductType = {
    brand: 'Apple',
    category: 'smartphones',
    description: 'An apple mobile which is nothing like apple',
    discountPercentage: 12.96,
    id: 1,
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    title: 'iPhone 9',
  };
  test('should add product to initial state', () => {
    const newState = reducer(initialState, {
      type: ACTIONS.ADD,
      payload: testProduct,
    });

    expect(newState).toEqual({
      items: [{ ...testProduct, quantity: 1 }],
      price: testProduct.price,
    });
  });
  test('should remove product from initial state', () => {
    const newStateAfterAdding = reducer(initialState, {
      type: ACTIONS.ADD,
      payload: testProduct,
    });
    const newStateAfterDeleting = reducer(newStateAfterAdding, {
      type: ACTIONS.DELETE,
      payload: testProduct,
    });

    expect(newStateAfterDeleting).toEqual({
      items: [],
      price: 0,
    });
  });
  test('should increace product quantity ', () => {
    const newStateAfterAdding = reducer(initialState, {
      type: ACTIONS.ADD,
      payload: testProduct,
    });
    const newStateAfterIncreasing = reducer(newStateAfterAdding, {
      type: ACTIONS.INCREASE,
      payload: testProduct2,
    });

    expect(newStateAfterIncreasing).toEqual({
      items: [{ ...testProduct, quantity: 2 }],
      price: testProduct.price * 2,
    });
  });

  test('should decrease product quantity ', () => {
    const newStateAfterAdding = reducer(initialState, {
      type: ACTIONS.ADD,
      payload: testProduct,
    });
    const newStateAfterIncreasing = reducer(newStateAfterAdding, {
      type: ACTIONS.INCREASE,
      payload: testProduct2,
    });
    const newStateAfterIncreasing2 = reducer(newStateAfterIncreasing, {
      type: ACTIONS.INCREASE,
      payload: testProduct2,
    });
    const newStateAfterDecreasing = reducer(newStateAfterIncreasing2, {
      type: ACTIONS.DECREASE,
      payload: testProduct,
    });

    expect(newStateAfterDecreasing).toEqual({
      items: [{ ...testProduct, quantity: 2 }],
      price: testProduct.price * 2,
    });
  });
  test('should change product quantity on given quantity ', () => {
    const newStateAfterAdding = reducer(initialState, {
      type: ACTIONS.ADD,
      payload: testProduct,
    });
    const newStateAfterChange = reducer(newStateAfterAdding, {
      type: ACTIONS.CHANGEQTY,
      payload: testProduct2,
      newQty: 5,
    });

    expect(newStateAfterChange).toEqual({
      items: [{ ...testProduct, quantity: 5 }],
      price: testProduct.price * 5,
    });
  });
  test('should rerset cart ', () => {
    const anotherProduct: DummyProductType = {
      brand: 'Samsung',
      category: 'laptops',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      discountPercentage: 4.15,
      id: 7,
      images: [
        'https://i.dummyjson.com/data/products/7/1.jpg',
        'https://i.dummyjson.com/data/products/7/2.jpg',
        'https://i.dummyjson.com/data/products/7/3.jpg',
        'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      ],
      price: 1499,
      rating: 4.25,
      stock: 50,
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      title: 'Samsung Galaxy Book',
    };
    const newStateAfterAdding = reducer(initialState, {
      type: ACTIONS.ADD,
      payload: testProduct,
    });
    const newStateAfterAnotherAdding = reducer(newStateAfterAdding, {
      type: ACTIONS.ADD,
      payload: anotherProduct,
    });

    const newFinalStateAfterChange = reducer(newStateAfterAnotherAdding, {
      type: ACTIONS.RESET,
    });

    expect(newFinalStateAfterChange).toEqual({
      items: [],
      price: 0,
    });
  });
});
