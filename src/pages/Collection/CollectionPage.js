import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/CollectionItem/CollectionItems";
import "./collectionPage.scss";

const CategoryPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
