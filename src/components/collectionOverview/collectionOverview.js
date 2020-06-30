import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../PreviewCollection/PreviewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import { selectDiretorySection } from "../../redux/directory/directorySelector";
import "./collectionOverView.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherColletionProps }) => (
      <CollectionPreview key={id} {...otherColletionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  sections: selectDiretorySection,
});

export default connect(mapStateToProps)(CollectionOverview);
