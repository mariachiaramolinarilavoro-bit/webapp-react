import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">Movies App</Link>
      </nav>

      <main className="container py-4 mb-5">
        <Outlet />
      </main>
    </>
  )
}

export default Layout