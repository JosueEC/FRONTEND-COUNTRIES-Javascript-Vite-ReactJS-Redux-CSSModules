export default function MapCountry ({ mapLink }) {
  return (
    <div>
      <iframe
        src={mapLink}
        width='600'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  )
}
