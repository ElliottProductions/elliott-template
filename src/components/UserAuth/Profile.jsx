import { useState } from 'react';
import { useProfile } from '../../state/hooks/userAuth.js';
import { useForm } from '../../state/hooks/formData.js';
import { FormButton, InputControl } from '../Forms/FormControls.jsx';
import Avatar from './Avatar.jsx';
import styles from './UserAuth.css';

export default function Profile() {
  const [, updateProfile] = useProfile();
  const [profile, handleChange] = useForm();
  const [preview, setPreview] = useState();
  const [updating, setUpdating] = useState(false);

  const handlePreview = (e) => {
    const target = e.target;
    const [file] = target.files;
    setPreview(URL.createObjectURL(file));
    handleChange({
      target: {
        name: target.name,
        value: file,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await updateProfile(profile);
    setUpdating(false);
  };

  return (
    <section className={styles.Profile}>
      <form onSubmit={handleSubmit}>
        <h1>User Profile</h1>

        <InputControl
          label="User Name"
          name="username"
          required
          placeholder="enter a user name"
          value={profile.username}
          onChange={handleChange}
        />

        <InputControl
          className={styles.Avatar}
          label="Avatar"
          name="avatar"
          type="file"
          required
          onChange={handlePreview}
        >
          <Avatar src={preview} username={profile.username} />
        </InputControl>

        <FormButton disabled={updating}>
          {updating ? 'Updating...' : 'Update'}
        </FormButton>
      </form>
    </section>
  );
}
