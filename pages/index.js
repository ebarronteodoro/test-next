// pages/index.js
import Link from 'next/link'
import Layout from '../components/Layout'
import slugify from 'slugify'
import '@/styles/pages/home.css'

export async function getServerSideProps () {
  const productos = [
    {
      id: 1,
      nombre: 'Laptop Gamer',
      descripcion: 'Potente laptop para gaming'
    },
    {
      id: 2,
      nombre: 'Monitor 4K',
      descripcion: 'Monitor con resolución 4K UHD'
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico',
      descripcion: 'Teclado con switches mecánicos'
    }
  ]

  return {
    props: { productos }
  }
}

export default function Home ({ productos }) {
  return (
    <Layout>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => {
          const slug = slugify(producto.nombre, { lower: true, strict: true })

          return (
            <li key={producto.id}>
              {/* ✅ Agregamos `prefetch={true}` para precargar la página */}
              <Link href={`/productos/${slug}`} prefetch={true}>
                {producto.nombre}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
