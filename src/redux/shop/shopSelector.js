import { createSelector } from "reselect";

const selectCollection = (state) => state.shop;

export const selectColletion = createSelector(
  [selectCollection],
  (shop) => shop.collections
);
