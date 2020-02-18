import { createAction, props } from '@ngrx/store';

import { Ant } from '../models';


// busqueda y filtrado

export const searchItems = createAction(
    '[Filtrado] Search Ants',
    props<{ query: string }>()
);

export const searchSuccess = createAction(
    '[Filtrado] Search Ants Success',
    props<{ ants: Ant[] }>()
);

export const searchFailure = createAction(
    '[Filtrado] Search Ants Failure',
    props<{ error: string }>()
);
