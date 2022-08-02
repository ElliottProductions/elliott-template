import { useEffect, useRef, useState } from 'react';
import { useFamilies, useFamilyActions } from '../../state/hooks/fuzzyBunny.js';
import { InputControl } from '../Forms/FormControls.jsx';
import BunTags from './Buntags.jsx';
import styles from './List.css';

export default function FamilyList() {
  const { families } = useFamilies();
  const [newFam, setNewFam] = useState('');
  const { add } = useFamilyActions();

  if (!families) return null;
  

  

  const handleAdd = async () => {
    if (newFam === '') { return;}
    await add({ name: newFam });
  };

  return (
    <>
      <div >
        <ul className={styles.FamilyList}>
        
          {families.map((family) => (
            <Family className={styles.Family}
              key={family.id} family={family} />
          ))}
        </ul>
        <br/>
        <input onChange={e => setNewFam(e.target.value)}></input>
        <button className={styles.FormButton}
          onClick={handleAdd}>Add Family</button>
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
      <button className={styles.DeleteButton} onClick={handleRemove}>ⓧ</button>
      <EditableHeader
        initialValue={family.name}
        onEdit={handleEdit}/>
      {family.bunnies && <BunTags bunnies={family.bunnies} />}
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


