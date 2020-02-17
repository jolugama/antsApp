import { createAction, props } from '@ngrx/store';

import { Ant } from '../models';


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


export const searchAnts = createAction(
  '[Filtrar] Search Ants',
  props<{ query: string }>()
);
