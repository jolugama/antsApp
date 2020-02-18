import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  AntsActions
} from './../actions';
import { Ant } from '@ants/models';

export const AntsFeatureKey = 'ants';

export interface State extends EntityState<Ant> {

}

// const initialState: State = {
//   loaded: false,
//   loading: false,
//   // ants: []
// };

export const adapter: EntityAdapter<Ant> = createEntityAdapter<Ant>({
  selectId: (ant: Ant) => ant.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({

});


export const reducer = createReducer(
  initialState,
  on(AntsActions.loadAntsCollection, state => ({
    ...state,
  })),
  on(AntsActions.loadAntsSuccess,
    (state, { ants }) => adapter.addMany(ants, state)
  )
);



export const getEntities = (state: State) => state.entities;

