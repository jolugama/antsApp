
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





/**
 *  De Ants, solo items
 */
export const selectItemEntitiesState = createSelector(
  selectItemsState,
  state => state.items
);

/**
 *  De Ants, search, ids
 */
export const selectSearchState = createSelector(
  selectItemsState,
  state => state.search.ids
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



/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: selectItemsIds,
  selectEntities: selectItemEntities,
  selectAll: selectAllItems,
  selectTotal: selectTotalItems,
} = fromItems.adapter.getSelectors(selectItemEntitiesState);



export const selectItemsSearch = createSelector(
  selectItemEntities,
  selectSearchState,
  selectTotalItems,
  (items, idsSelected, total) => {
    const arr = [];
    for (const id of idsSelected) {
      arr.push(items[id]);
    }
debugger;
    return {
      items: arr,
      totalItems: total,
      filterItems: arr.length

      // [itemsFeatureKey]: items
    };
  }

  // selectItemsState,
  // selectTotalItems,
  // (state: ItemsState) => {
  //   debugger;
  //   const arr = [];
  //   for (const item of state.search.ids) {
  //     arr.push(state.items.entities[item]);
  //   }

  //   const resp: fromSearch.State = {
  //     items: arr,
  //     loading: state.search.loading,
  //     error: state.search.error,
  //     query: state.search.query
  //   };

  //   return {
  //     [itemsFeatureKey]: resp
  //   };
  // }
);
