import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  ItemsActions
} from './../actions';
import { Ant, Taxonomy } from '@modules/ants/models';

export const ItemsFeatureKey = 'items';

export interface State extends EntityState<Ant> {
  // ids --> hereda de EntityState
  // entities --> hereda de EntityState
  selectedItemId: number | null;
}

export function sortBySpecie(a: Ant, b: Ant): number {
  return a.taxonomy.specie.localeCompare(b.taxonomy.specie);
}
 

export const adapter: EntityAdapter<Ant> = createEntityAdapter<Ant>({
  selectId: (ant: Ant) => ant.id,
  sortComparer: sortBySpecie,
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
  ),
  on(ItemsActions.selectItem, (state, { id }) => ({
    ...state,
    selectedItemId: id,
  }))
);



// export const getEntities = (state: State) => state.entities;
export const selectId = (state: State) => state.selectedItemId;
