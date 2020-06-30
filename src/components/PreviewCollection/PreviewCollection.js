import React from "react";
import "../PreviewCollection/previewcollection.scss";
import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItems.js";

const PreviewCollection = ({ title, items, match, history }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
