import axios from "axios";
import { Idispatch, Iproduct } from "../types";
import { tagType } from "../../components/uielements/tag";

export const getAllProducts = () => async (dispatch: Idispatch) => {
  try {
    dispatch({ type: 'setAppLoading', payload: true });

    const { data } = await axios.get('https://mocki.io/v1/64b0a1b2-fa32-4a97-b5c0-840d24a5a40c');

    dispatch({ type: 'getAllProducts', payload: { products: data?.products } });

    dispatch({ type: 'setAppLoading', payload: false });
  } catch (error) {
    console.log('error', error)
  }
}

export const addProduct = () => (dispatch: Idispatch, getState: any) => {
  try {
    dispatch({ type: 'setAppLoading', payload: true });

    const lastProduct = getState().App.products;

    const lastProductId = lastProduct[lastProduct.length - 1].productId;

    const randomBrands = ['Tata', 'Chaverlot', 'Yamaha', 'Porche', 'Ferrari', 'Buggati', 'Lambohini']

    const newProduct = {
      productId: lastProductId + 1,
      productName: `Product ${parseInt(lastProductId) + Number(1)}`,
      brand: randomBrands[Math.floor(Math.random() * randomBrands.length)],
      price: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
      quantity: Math.floor(Math.random() * (100 - 1 + 1) + 1).toString(),
      total: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
      status: '',
    }

    dispatch({ type: 'addProduct', payload: newProduct });

    dispatch({ type: 'setAppLoading', payload: false });
  } catch (error) {
    console.log('error', error)
  }
}

export const closeModal = () => (dispatch: Idispatch) => {
  dispatch({ type: 'closeModal', payload: { isModalOpen: false, modalProductId: -1 } })
}

export const openModal = (productId: number) => (dispatch: Idispatch,) => {
  dispatch({ type: 'openModal', payload: { isModalOpen: true, modalProductId: productId } })
}

export const updateStatus = (productId: number, status: tagType) => (dispatch: Idispatch, getState: any) => {
  try {
    const product = getState().App.products.find((product: Iproduct) => product.productId === productId)
    const updatedProduct = { ...product, status: status };
    const allProducts = getState().App.products;
    const productIndex = allProducts.findIndex((product: Iproduct) => product.productId === productId)
    allProducts[productIndex] = updatedProduct;

    dispatch({ type: 'updateStatus', payload: allProducts })
  } catch (error) {
    console.log('error', error);
  }
}

export const updateOrder = () => (dispatch: Idispatch) => {
  try {
    dispatch({ type: 'updateOrder', payload: true })
  } catch (error) {
    console.log('error', error);
  }
}

export const searchProduct = (productName: string) => (dispatch: Idispatch, getState: any) => {
  try {
    if (productName !== '') {
      const products = getState().App.products.filter((product: Iproduct) => product.productName.includes(productName))
      dispatch({ type: 'searchProduct', payload: products })
    } else {
      dispatch({ type: 'searchProduct', payload: [] })
    }
  } catch (error) {
    console.log('error', error);
  }
}