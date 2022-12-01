import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit/dist/createAction';

export interface CommonActionsType {
  actions:
    | ActionCreatorWithPayload<any, `${string}/${string}`>
    | ActionCreatorWithoutPayload<`${string}/${string}`>;
}
