import { Toaster } from 'sonner'
import { useForm } from '../../hooks/useForm'
import { validationForm } from '../../services/validators/formValidators'
import SelectRange from '../../components/SelectRange/SelectRange'
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
      <Toaster richColors position='top-right' />
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
            <SelectRange
              name='difficulty'
              handleChange={handleChange}
              handleBlur={handleBlur}
              selectText='Select Activity Difficult'
              options={[1, 2, 3, 4, 5]}
              required
            />
            {(errors.difficulty) && <span className={styles.messageError}>{errors.difficulty}</span>}
          </div>
          <div className={styles.inputBox}>
            <SelectRange
              name='duration'
              handleChange={handleChange}
              handleBlur={handleBlur}
              selectText='Select Activity Duration'
              options={[1, 2, 3, 4, 5]}
              required
            />
            {(errors.duration) && <span className={styles.messageError}>{errors.duration}</span>}
          </div>
          <div className={styles.inputBox}>
            <SelectRange
              name='season'
              handleChange={handleChange}
              handleBlur={handleBlur}
              selectText='Select Activity Season'
              options={['verano', 'otoño', 'invierno', 'primavera']}
            />
            {(errors.season) && <span className={styles.messageError}>{errors.season}</span>}
          </div>
          <input type='submit' value='Create Activity' className={styles.buttonSubmit} />
        </div>
        <div className={styles.containerCountryOptions}>
          <span className={styles.labelSelector}>Select the countries</span>
          <SelectorCountry />
        </div>
      </form>
    </section>
  )
}
