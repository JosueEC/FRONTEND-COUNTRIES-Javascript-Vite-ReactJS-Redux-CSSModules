import LinkRoute from '../../components/LinkRoute/LinkRoute'
import { ROUTES } from '../../utils/constants'

export default function NotFound () {
  return (
    <section>
      <h2>NOT FOUND</h2>
      <LinkRoute textLink='Click to back to Home' route={ROUTES.HOME} />
    </section>
  )
}
