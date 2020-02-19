import { Ant } from './../models';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromItems from './items.reducer';
import * as fromFavorites from './favorites.reducer';
import * as fromRoot from '@redux/reducers';

export const itemsFeatureKey = 'ants';

export interface ItemsState {
  [fromFavorites.collectionFeatureKey]: fromFavorites.State;
  [fromItems.ItemsFeatureKey]: fromItems.State;
}

export interface State extends fromRoot.State {
  [itemsFeatureKey]: ItemsState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ItemsState | undefined, action: Action) {
  return combineReducers({
    [fromFavorites.collectionFeatureKey]: fromFavorites.reducer,
    [fromItems.ItemsFeatureKey]: fromItems.reducer
  })(state, action);
}

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.booksState$ = state$.pipe(select(getBooksState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectItemsState = createFeatureSelector<State, ItemsState>(
  itemsFeatureKey
);





export const selectCollectionState = createSelector(
  selectItemsState,
  (state: ItemsState) => state.favorites
);

export const selectAntsArrayState = createSelector(
  selectItemsState,
  (state: ItemsState) => state.items
);


export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromFavorites.getLoaded
);
export const getCollectionLoading = createSelector(
  selectCollectionState,
  fromFavorites.getLoading
);
// export const selectCollectionBookIds = createSelector(
//   selectCollectionState,
//   fromCollection.getIds
// );
