import React from "react";
import { Route } from "react-router-dom";
import CollectionOverView from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../Collection/CollectionPage";
import "../Shoppage/shoppage.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
