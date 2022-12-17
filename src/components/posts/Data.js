import Alzheimer from "./Alzheimer";
import "./App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
const Data = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div className="container">
      <Alzheimer />
    </div>
  );
};
Data.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, { logout })(Data);
