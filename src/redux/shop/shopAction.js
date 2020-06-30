import ShopActionTypes from "./shopType";
export const updateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
