import styles from "./Button.module.css";
import PropTypes from "prop-types";
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children' as a React node
  onClick: PropTypes.func.isRequired, // Validate 'onClick' as a function
  type: PropTypes.string, // Validate 'type' as a string (optional)
};

export default Button;
