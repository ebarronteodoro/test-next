// pages/productos/[slug].js
import Head from 'next/head'
import Layout from '../../components/Layout'
import slugify from 'slugify'

export async function getServerSideProps (context) {
  const { slug } = context.params

  console.log('Recibiendo slug en servidor:', slug) // Verifica en la terminal

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

  const producto = productos.find(
    item => slugify(item.nombre, { lower: true, strict: true }) === slug
  )

  if (!producto) {
    return { notFound: true } // Si el producto no existe, devuelve 404
  }

  return {
    props: { producto }
  }
}

export default function ProductoDetalle ({ producto }) {
  return (
    <Layout>
      <Head>
        <title>{`${producto.nombre} | Tienda Tech`}</title>
        <meta name='description' content={producto.descripcion} />
        <meta
          name='keywords'
          content={`comprar ${producto.nombre}, tecnología, oferta`}
        />
      </Head>

      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </Layout>
  )
}
