import { useEffect, useRef, useState } from 'react';
import { useFamilies, useFamilyActions } from '../../state/hooks/fuzzyBunny.js';
import { InputControl } from '../Forms/FormControls.jsx';
import styles from './List.css';

export default function FamilyList() {
  const { families } = useFamilies();

  if (!families) return null;

  return (
    <>
      <div className={styles.FamilyList}>
        <ul>
        
          {families.map((family) => (
            <Family key={family.id} family={family} />
          ))}
        </ul>
        <br/>
        <input></input>
        <button>Add Family</button>
      </div>
    </>
  );
    
}

function Family({ family }) {
  

  const { update, remove } = useFamilyActions();

  const handleEdit = async (edited) => {
    await update(family.id, edited);
  };

  const handleRemove = async () => {
    const message = `Are you sure you want to remove family ${family.name}?`;
    if (confirm(message)) {
      await remove(family.id);
    }
  };

  
  return (
    <li className={styles.Family}>
      <EditableHeader
        initialValue={family.name}
        onEdit={handleEdit}/>
      <button onClick={handleRemove}>ⓧ</button>
    </li>

  );
}

function EditableHeader({ initialValue, onEdit }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [name, setName] = useState(initialValue);
  
  const handleDoubleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing) ref.current.focus();
  }, [editing]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleEdit = async () => {
    setEditing(false);
    if (name === initialValue) return;
    await onEdit({ name });
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <header>
      {editing ? (
        <InputControl
          ref={ref}
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h2 onDoubleClick={handleDoubleClick}>{name}</h2>
      )}
    </header>
  );

}


