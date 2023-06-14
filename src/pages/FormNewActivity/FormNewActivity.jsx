import InputValidate from '../../components/InputValidate/InputValidate'
import { validateActivityName, validateDifficultyActivity, validateActivityDuration, validateActivitySeason, validateActivityImage } from '../../services/validators/formValidators'

import styles from './FormNewActivity.module.css'

export default function FormNewActivity () {
  return (
    <section>
      <form className={styles.form}>
        <div className={styles.containerInputs}>
          <InputValidate inputType='text' nameLabel='name' textLabel='Activity Name' validateFunction={validateActivityName} />
          <InputValidate inputType='number' nameLabel='difficulty' textLabel='Difficulty' validateFunction={validateDifficultyActivity} />
          <InputValidate inputType='number' nameLabel='duration' textLabel='Duration' validateFunction={validateActivityDuration} />
          <InputValidate inputType='text' nameLabel='season' textLabel='Season' validateFunction={validateActivitySeason} />
          <InputValidate inputType='text' nameLabel='image' textLabel='Image' validateFunction={validateActivityImage} />
        </div>
      </form>
    </section>
  )
}
