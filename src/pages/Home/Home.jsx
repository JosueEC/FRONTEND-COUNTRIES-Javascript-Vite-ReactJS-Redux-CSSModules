import SearchBar from '../../components/SearchBar/SearchBar'
import OrderContainer from '../../components/OrderContainer/OrderContainer'
import ContainerCards from '../../components/ContainerCards/ContainerCards'

export default function Home () {
  return (
    <section>
      <SearchBar />
      <OrderContainer />
      <ContainerCards />
    </section>
  )
}
