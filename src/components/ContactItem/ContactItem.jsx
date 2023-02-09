import Style from './ContactItem.module.css';
import PropTypes from 'prop-types';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={Style.contactsItem}>
      <p className={Style.contactsText}>
        {name}: <span>{number}</span>
      </p>

      <button
        className={Style.contactsBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  // id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
