import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  ItemsActions
} from './../actions';
import { Ant } from '@ants/models';

export const ItemsFeatureKey = 'items';

export interface State extends EntityState<Ant> {
  // aparte de entities e id, se añaden estos objetos
  selectedItemId: number | null;
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
  // se otorgan valores por defecto, al inicio.
  selectedItemId: null,
});


export const reducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, state => ({
    ...state,
  })),
  on(ItemsActions.loadItemsSuccess,
    (state, { items }) => adapter.addMany(items, state)
  )
);



// export const getEntities = (state: State) => state.entities;
export const selectId = (state: State) => state.selectedItemId;
