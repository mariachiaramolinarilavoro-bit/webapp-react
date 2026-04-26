import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext()

function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false)

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

function useLoader() {
  return useContext(LoaderContext)
}

export { LoaderProvider, useLoader }