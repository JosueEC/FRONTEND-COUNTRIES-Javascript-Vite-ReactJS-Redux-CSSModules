import { useForm } from '../../hooks/useForm'
import { validationForm } from '../../services/validators/formValidators'
import SelectorCountry from '../../components/SelectorCountry/SelectorCountry'

import styles from './FormNewActivity.module.css'

const initialForm = {
  name: '',
  difficulty: 0,
  duration: 0,
  season: '',
  image: ''
}

export default function FormNewActivity () {
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationForm)

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.containerInputs}>
          <div className={styles.inputBox}>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.name} required
            />
            <label htmlFor='name'>Activity Name</label>
            {(errors.name) && <span className={styles.messageError}>{errors.name}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type='number'
              name='difficulty'
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.difficulty} required
            />
            <label htmlFor='difficulty'>Difficulty of the Activity</label>
            {(errors.difficulty) && <span className={styles.messageError}>{errors.difficulty}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type='number'
              name='duration'
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.duration} required
            />
            <label htmlFor='duration'>Activity Duration</label>
            {(errors.duration) && <span className={styles.messageError}>{errors.duration}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type='text'
              name='image'
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.image} required
            />
            <label htmlFor='image'>Activity Image</label>
            {(errors.image) && <span className={styles.messageError}>{errors.image}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type='text'
              name='season'
              placeholder='verano, otoño, invierno, primavera'
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.season} required
            />
            {(errors.season) && <span className={styles.messageError}>{errors.season}</span>}
          </div>
          <input type='submit' value='Create Activity' className={styles.buttonSumbit} />
        </div>
        <div className={styles.containerCountryOptions}>
          <span>Select at least one country</span>
          <SelectorCountry />
        </div>
      </form>
    </section>
  )
}
