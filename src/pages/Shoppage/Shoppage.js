import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shopAction";
import { selectColletionLoaded } from "../../redux/shop/shopSelector";

import CollectionOverViewContainer from "../../components/collectionOverview/collectionOverview.container";
import CollectionPageContainer from "../Collection/CollectionContainer";

class Shoppage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
    // const collectionRef = firestore.collection("collections");
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertonSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertonSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({ isLoading: false });
    //   }
    // );
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionisLoaded: selectColletionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
