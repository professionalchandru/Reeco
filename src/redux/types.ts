import { ThunkDispatch } from 'redux-thunk'
import { tagType } from '../components/uielements/tag'

export interface ApplicationState {
  app: IappState
}

export interface IgetAllProducts {
  type: "getAllProducts",
  payload: {
    products: Iproduct[]
  }
}

export interface IsetAppLoading {
  type: "setAppLoading",
  payload: boolean
}

export interface IaddProduct {
  type: "addProduct",
  payload: Iproduct
}

export interface IcloseModal {
  type: 'closeModal',
  payload: {
    modalProductId: number,
    isModalOpen: boolean
  }
}

export interface IOpenModal {
  type: 'openModal',
  payload: {
    modalProductId: number,
    isModalOpen: boolean
  }
}

export interface IupdateStatus {
  type: 'updateStatus',
  payload: Iproduct[]
}

export interface IupdateOrder {
  type: 'updateOrder',
  payload: boolean
}

export interface Iproduct {
  productId: number;
  productName: string;
  brand: string;
  price: number;
  quantity: string;
  total: number;
  status: tagType | string;
}

export interface IappState {
  products: Iproduct[];
  isLoading: boolean;
  isModalOpen: boolean;
  modalProductId: number;
  isOrderApproved: boolean;
}

export type AppActions = IgetAllProducts | IsetAppLoading | IaddProduct | IcloseModal | IOpenModal | IupdateStatus | IupdateOrder;

export type ApplicationAction = AppActions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Idispatch = ThunkDispatch<ApplicationState, any, ApplicationAction> 