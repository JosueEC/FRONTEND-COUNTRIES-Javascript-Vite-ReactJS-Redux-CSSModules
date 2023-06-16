import './Backdrop.css'

export default function Backdrop ({ closeSidebar, sidebar }) {
  return (
    <div
      className={sidebar ? 'backdrop backdrop--open' : 'backdrop'}
      onClick={closeSidebar}
    />
  )
}
