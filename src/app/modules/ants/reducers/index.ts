
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
import { Ant } from '@modules/ants/models';
import { of } from 'rxjs';



export const itemsFeatureKey = 'ants';

interface ItemsState {
  [fromFavorites.collectionFeatureKey]: fromFavorites.State;
  [fromItems.ItemsFeatureKey]: fromItems.State;
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.State {
  [itemsFeatureKey]: ItemsState;
}


export interface SearchState {
  [itemsFeatureKey]: fromSearch.State;
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






// export const selectCollectionState = createSelector(
//   selectItemsState,
//   (state: ItemsState) => state.favorites
// );

export const selectItemsSearch = createSelector(
  selectItemsState,
  (state: ItemsState) => {
    const arr = [];
    for (const item of state.search.ids) {
      arr.push(state.items.entities[item]);
    }

    const resp: fromSearch.State = {
      items: arr,
      loading: state.search.loading,
      error: state.search.error,
      query: state.search.query
    };

    return {
      [itemsFeatureKey]: resp
    };
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



/**
 *  De Ants, solo items
 */
export const selectItemEntitiesState = createSelector(
  selectItemsState,
  state => state.items
);

/**
 * de Ants, items, el id seleccionado (el que se abre en descripción)
 */
export const selectSelectedItemId = createSelector(
  selectItemEntitiesState,
  fromItems.selectId
  // la ultima fila seria igual a:
  // state => state.selectedItemId
);




// muestra solo un item, el item completo con la id seleccionado. 
export const selectedItem = createSelector(
  selectItemEntitiesState,
  selectSelectedItemId,
  (items, id) => items.entities[id]
);

// export const selectSelectedItem = createSelector(
//   selectItemEntitiesState,
//   selectSelectedItemId,
//   (entities, selectedId) => {
//     debugger;
//     return selectedId && entities[selectedId];
//   }
// );
