import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.country}</span>
    </li>
  );
}
CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
  //country: PropTypes.string.isRequired,
};

export default CountryItem;
