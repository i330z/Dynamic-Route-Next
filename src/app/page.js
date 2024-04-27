import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link href="/order-page/123">
        <button>Click To Dynamic Route</button>
      </Link>
    </div>
  )
}

export default Home