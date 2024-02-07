import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li className={css.contactListItem}>
      <p>{filteredContact.name}:</p>
      <p>{filteredContact.number}</p>
      <button className={css.delBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
