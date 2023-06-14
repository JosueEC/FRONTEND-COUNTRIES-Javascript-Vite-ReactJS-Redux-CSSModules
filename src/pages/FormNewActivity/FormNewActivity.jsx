import InputValidate from '../../components/InputValidate/InputValidate'
import { validateActivityName } from '../../services/validators/formValidators'

import styles from './FormNewActivity.module.css'

export default function FormNewActivity () {
  return (
    <section>
      <form className={styles.form}>
        <div className={styles.containerInputs}>
          <InputValidate inputType='text' nameLabel='name' textLabel='Activity Name' validateFunction={validateActivityName} />
          <InputValidate inputType='password' nameLabel='difficulty' textLabel='Difficulty' validateFunction={validateActivityName} />
        </div>
      </form>
    </section>
  )
}
