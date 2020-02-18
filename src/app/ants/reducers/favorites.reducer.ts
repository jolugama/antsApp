import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  AntsActions
} from './../actions';
import { Ant } from '@ants/models';

export const collectionFeatureKey = 'favorites';

export interface State {
  loaded: boolean;
  loading: boolean;
}


export const initialState: State = {
  loaded: false,
  loading: false
};

// export const selectId = (state: State) => state.antId;

export const reducer = createReducer(
  initialState,
  on(AntsActions.loadAntsCollection, state => ({
    ...state,
    loading: true
  })),
  on(AntsActions.loadAntsSuccess,
    (state, ants) => ({
      // ...ants, ** no añadir. Con este linea recibo también las hormigas, pero las tengo ya en entities en ants.reducer.
      loaded: true,
      loading: false,

    })
  )

);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

