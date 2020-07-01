import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionisFetching } from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionOverView from "../../components/collectionOverview/collectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionisFetching,
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverView);

export default CollectionOverViewContainer;
