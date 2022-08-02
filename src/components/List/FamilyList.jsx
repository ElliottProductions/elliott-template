import { useRef } from 'react';
import { useFamilies } from '../../state/hooks/fuzzyBunny.js';
import { InputControl } from '../Forms/FormControls.jsx';
import styles from './List.css';

export default function FamilyList() {
  const { families } = useFamilies();

  if (!families) return null;

  return (
    <>
      <p>testing testing</p>
      <ul className={styles.FamilyList}>
        
        {families.map((family) => (
          <Family key={family.id} family={family} />
        ))}
      </ul>
    </>
  );
    
}

function Family({ family }) {
//   const [editing, setEditing] = useState(false);
  const ref = useRef();
  return (
    <li className={styles.Family}>
      <InputControl
        ref={ref}
        name="name"
        value={name}
      />
      <h2>{family.name}</h2>
      
      <button>X</button>
    </li>

  );
}


