import { AppActions, IappState } from "../types";


const AppState: IappState = {
  products: [{
    productId: 0,
    productName: '',
    brand: '',
    price: 0,
    quantity: '',
    total: 0,
    status: '',
  }],
  isLoading: false,
  isModalOpen: false,
  modalProductId: -1,
  isOrderApproved: false
}

export const AppReducer = (state = AppState, action: AppActions) => {
  switch (action.type) {
    case 'setAppLoading':
      return { ...state, isLoading: action.payload }
    case 'getAllProducts':
      return { ...state, products: action.payload.products }
    case 'addProduct':
      return { ...state, products: [...state.products, action.payload] }
    case 'updateStatus':
      return { ...state, products: [...action.payload] }
    case 'updateOrder':
      return { ...state, isOrderApproved: action.payload }
    case 'closeModal':
    case 'openModal':
      return { ...state, isModalOpen: action.payload.isModalOpen, modalProductId: action.payload.modalProductId }
    default:
      return state;
  }
}
