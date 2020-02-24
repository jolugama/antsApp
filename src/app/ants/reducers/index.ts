
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromRoot from '@redux/reducers';
import * as fromItems from './items.reducer';
import * as fromFavorites from './favorites.reducer';
import * as fromSearch from './search.reducer';
import { Ant } from '@ants/models';

export const itemsFeatureKey = 'ants';

export interface ItemsState {
  [fromFavorites.collectionFeatureKey]: fromFavorites.State;
  [fromItems.ItemsFeatureKey]: fromItems.State;
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.State {
  [itemsFeatureKey]: ItemsState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ItemsState | undefined, action: Action) {
  return combineReducers({
    [fromFavorites.collectionFeatureKey]: fromFavorites.reducer,
    [fromItems.ItemsFeatureKey]: fromItems.reducer,
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
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

export const selectItemsSearch = createSelector(
  selectItemsState,
  (state: ItemsState) => {
    const arr = [];
    for (const item of state.search.ids) {
      arr.push(state.items.entities[item]);
    }

    const resp: fromSearch.SelectState = {
      items: arr,
      loading: state.search.loading,
      error: state.search.error,
      query: state.search.query
    };

    return resp;
  }
);

// export const selectBookCollection = createSelector(
//   selectItemsState,
//   selectCollectionBookIds,
//   (entities, ids) => {
//     return ids
//       .map(id => entities[id])
//       .filter((book): book is Book => book != null);
//   }
// );


// export const selectCollectionLoaded = createSelector(
//   selectCollectionState,
//   fromFavorites.getLoaded
// );
// export const getCollectionLoading = createSelector(
//   selectCollectionState,
//   fromFavorites.getLoading
// );




export const selectItemEntitiesState = createSelector(
  selectItemsState,
  state => state.items
);

export const selectSelectedItemId = createSelector(
  selectItemEntitiesState,
  fromItems.selectId
);



// export const selectBookCollection = createSelector(
//   selectItemEntitiesState,
//   selectSelectedItemId,
//   (entities, ids) => {
//     return ids
//       .map(id => entities[id])
//       .filter((item): item is Ant => item != null);
//   }
// );


export const selectSelectedItem = createSelector(
  selectItemEntitiesState,
  selectSelectedItemId,
  (entities, selectedId) => {
    debugger;
    return selectedId && entities[selectedId];
  }
);
