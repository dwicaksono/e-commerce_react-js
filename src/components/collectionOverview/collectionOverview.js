import React from "react";
import CollectionPreview from "../PreviewCollection/PreviewCollection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectColletion } from "../../redux/shop/shopSelector";
import "./collectionOverView.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherColletionProps }) => (
      <CollectionPreview key={id} {...otherColletionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectColletion,
});

export default connect(mapStateToProps)(CollectionOverview);
