import { createAction, props } from '@ngrx/store';

import { Ant } from '../models';


// carga de json

export const loadAntsCollection = createAction(
  '[Carga JSON] Load Ants'
);


export const loadAntsSuccess = createAction(
  '[Carga JSON] Load Ants Success',
  props<{ ants: Ant[] }>()
);

export const loadAntsFailure = createAction(
  '[Carga JSON] Load Ants Failure',
  props<{ error: any }>()
);



