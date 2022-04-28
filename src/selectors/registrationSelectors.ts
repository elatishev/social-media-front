import { createSelector } from "@reduxjs/toolkit";
import {
  IState,
  IRegistrationState,
  IUserRegistrationState,
} from "./types/registrationSelectorsTyhpes";

export const selectIsUserRegistered = (state: IState) => state?.registration;

export const selectRegisteredUser = createSelector(
  selectIsUserRegistered,
  ({ user }: IRegistrationState): IUserRegistrationState => user
);
