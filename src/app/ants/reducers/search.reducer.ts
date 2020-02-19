import {
  ItemsSearchActions
} from '../actions';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'search';

export interface State {
  ids: string[];
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
  on(ItemsSearchActions.searchItems, (state, { query }) => {
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
  on(ItemsSearchActions.searchSuccess, (state, { items }) => ({
    ids: items.map(item => item.id.toString()),
    loading: false,
    error: '',
    query: state.query,
  })),
  on(ItemsSearchActions.searchFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

// export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
