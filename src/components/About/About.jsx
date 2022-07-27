/* eslint-disable max-len */
import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/FormControls.jsx';
  
import styles from './About.css';

export default function About() {
  return (<>
    <p className={styles.About} >I think The X-Files is very nineties, because everything is left in doubt.
There’s no closure, no answers. . . . Obviously it’s tapping in to something
the nation wants. I think it has to do with religious stirrings—a sort of New
Age yearning for an alternate reality and the search for some kind of
extrasensory god. Couple that with a cynical, jaded, dispossessed feeling of
having been lied to by the government, and you’ve got a pretty powerful
combination for a TV show. Either that, or the Fox network has an amazing marketing department..</p>
    <br/>
    <h1 className={styles.About} >—David Duchovny</h1>
    <section className={styles.About}>
      We welcome your feedback:
      <form>
        <Fieldset legend="Credentials">
          <InputControl
            label="email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />

          <InputControl
            className={styles.PasswordControl}
            label="password"
            name="password"
            placeholder="choose a password"
            type="password"
            required
          />
        </Fieldset>

        <SelectControl label="type">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" />

        <TextAreaControl
          label="bio"
          placeholder="tell us about yourself"
        />

        <FormButton>Submit</FormButton>
      </form>
    </section>
  </>);
}
