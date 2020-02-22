import {
  SearchActions,
  // FiltersActions
} from '../actions';
import { createReducer, on } from '@ngrx/store';
import { Ant } from '@ants/models';

export const searchFeatureKey = 'search';

export interface State {
  ids: number[];
  loading: boolean;
  error: string;
  query: string;
}

export interface SelectState {
  items: Ant[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  error: '',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(SearchActions.searchItems, (state, { query }) => {
    return query === ''
      ? {
          ids: [],
          loading: false,
          error: '',
          query,
        }
      : {
          ...state,
          loading: true,
          error: '',
          query,
        };
  }),
  on(SearchActions.searchSuccess, (state, { items }) => ({
    ids: items.map(item => item.id),
    loading: false,
    error: '',
    query: state.query,
  })),
  on(SearchActions.searchFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
