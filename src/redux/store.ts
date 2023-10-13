import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AppReducer } from "./reducer/app_reducer";

const composeEnhancers = composeWithDevTools({});

const RootReducer = combineReducers({
  App: AppReducer,
})

export type RootState = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))