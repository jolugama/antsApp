import { createAction, props } from '@ngrx/store';

import { Ant } from '../models';


// carga de json

export const loadItems = createAction(
  '[Carga JSON] Load Ants'
);


export const loadItemsSuccess = createAction(
  '[Carga JSON] Load Ants Success',
  props<{ items: Ant[] }>()
);

export const loadItemsFailure = createAction(
  '[Carga JSON] Load Ants Failure',
  props<{ error: any }>()
);


export const selectItem = createAction(
  '[Item Page] Select Item',
  props<{ id: number }>()
);



