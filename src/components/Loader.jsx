import { useLoader } from '../context/LoaderContext'

function Loader() {
  const { loading } = useLoader()

  if (!loading) return null

  return <p>Caricamento...</p>
}

export default Loader