import { useMemo } from "react";
import { createStore, Reducer, Store } from "redux";

export enum AppActionType {
  INCREMENT,
  DECREMENT,
}

export interface AppAction {
  type: AppActionType;
}

interface AppState {
  count: number;
}

let store: Store<AppState, AppAction> | undefined;

const initialState: AppState = {
  count: 0,
};

const reducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AppActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case AppActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const initStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState);
};

export const initializeStore = (preloadedState?: AppState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;
  // log changes
  _store.subscribe(() => console.log(_store.getState()));
  return _store;
};

export function useStore(initialState?: AppState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export default store;
