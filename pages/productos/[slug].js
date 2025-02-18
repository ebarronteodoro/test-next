// pages/productos/[slug].js
import Head from 'next/head'
import Layout from '../../components/Layout'
import slugify from 'slugify'
import '@/styles/pages/producto.css'

const productos = [
  { id: 1, nombre: 'Laptop Gamer', descripcion: 'Potente laptop para gaming' },
  { id: 2, nombre: 'Monitor 4K', descripcion: 'Monitor con resolución 4K UHD' },
  {
    id: 3,
    nombre: 'Teclado Mecánico',
    descripcion: 'Teclado con switches mecánicos'
  }
]

export async function getStaticPaths () {
  const paths = productos.map(producto => ({
    params: { slug: slugify(producto.nombre, { lower: true, strict: true }) }
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps ({ params }) {
  const producto = productos.find(
    item => slugify(item.nombre, { lower: true, strict: true }) === params.slug
  )

  if (!producto) {
    return { notFound: true }
  }

  return {
    props: { producto },
    revalidate: 10 // ✅ La página se regenerará cada 10 segundos
  }
}

export default function ProductoDetalle ({ producto }) {
  return (
    <Layout>
      <Head>
        <title>{`${producto.nombre} | Tienda Tech`}</title>
        <meta name='description' content={producto.descripcion} />
      </Head>

      <div className='product-container'>
        <h2 className='product-title'>{producto.nombre}</h2>
        <p className='product-description'>{producto.descripcion}</p>
      </div>
    </Layout>
  )
}
