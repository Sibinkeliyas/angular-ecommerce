import { createFeatureSelector } from "@ngrx/store";
import { InitialState } from "./cart.reducer";

export const selectCartState = createFeatureSelector<InitialState>('cart')