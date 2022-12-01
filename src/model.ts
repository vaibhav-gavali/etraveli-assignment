import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit/dist/createAction';

export interface CommonActionsType {
  actionsWithPayload: ActionCreatorWithPayload<any, `${string}/${string}`>;
  actionsWithoutPayloadload: ActionCreatorWithoutPayload<`${string}/${string}`>;
}
