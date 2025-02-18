// components/Layout.js
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Mi Página SSR con Next.js</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
