import React from "react";
import { Route } from "react-router-dom";
import CollectionOverView from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../Collection/CollectionPage";
import {
  firestore,
  convertonSnapshotToMap,
} from "../../components/Firebase/FirebaseUtil";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shopAction";

class Shoppage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    // console.log(updateCollections, "???");
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertonSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverView} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchProps = (dipatch) => ({
  updateCollections: (collectionsMap) =>
    dipatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchProps)(Shoppage);
