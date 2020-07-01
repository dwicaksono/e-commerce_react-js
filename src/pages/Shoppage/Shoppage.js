import React from "react";
import { Route } from "react-router-dom";
import CollectionOverView from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../Collection/CollectionPage";
import WithSpinner from "../../components/with-spinner/with-spinner";
import {
  firestore,
  convertonSnapshotToMap,
} from "../../components/Firebase/FirebaseUtil";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shopAction";

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shoppage extends React.Component {
  state = {
    isLoading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertonSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ isLoading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverViewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
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
