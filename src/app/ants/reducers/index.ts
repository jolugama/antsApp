import { Ant } from './../models';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromAnt from './ants.reducer';
import * as fromCollection from './collection.reducer';
import * as fromRoot from '@redux/reducers';

export const antsFeatureKey = 'ants';

export interface AntsState {
  [fromCollection.collectionFeatureKey]: fromCollection.State;
  [fromAnt.AntsFeatureKey]: fromAnt.State;
}

export interface State extends fromRoot.State {
  [antsFeatureKey]: AntsState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: AntsState | undefined, action: Action) {
  return combineReducers({
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
    [fromAnt.AntsFeatureKey]: fromAnt.reducer
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
export const selectAntsState = createFeatureSelector<State, AntsState>(
  antsFeatureKey
);





export const selectCollectionState = createSelector(
  selectAntsState,
  (state: AntsState) => state.collection
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getLoading
);
// export const selectCollectionBookIds = createSelector(
//   selectCollectionState,
//   fromCollection.getIds
// );
