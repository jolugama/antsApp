import { createAction, props } from '@ngrx/store';

import { Ant } from '../models';

// export const searchSuccess = createAction(
//   '[Ants/API] Search Success'
// );

// export const searchFailure = createAction(
//   '[Ants/API] Search Failure',
//   props<{ errorMsg: string }>()
// );


export const loadAntsCollection = createAction('[Collection Page] Load Ants Collection');


export const loadAntsSuccess = createAction(
  '[Collection/API] Load Ants Success',
  props < { ants: Ant[] } > ()
);

export const loadAntsFailure = createAction(
  '[Collection/API] Load Ants Failure',
  props<{ error: any }>()
);
