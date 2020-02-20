import { createAction, props } from '@ngrx/store';

export const buscarItemsBuscador = createAction(
  '[Buscar Items] Buscador',
  props<{ query: string }>()
);
