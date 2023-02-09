import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Style from './Filter.module.css';

const searchId = uuidv4();
const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor={searchId} className={Style.labelFilter}>
      Find contacts by name
      <input
        className={Style.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        id={searchId}
      />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
