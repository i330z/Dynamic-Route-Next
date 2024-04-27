
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id
  console.log(id)

  const {cover} = searchParams
  console.log(cover)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = cover
 
  return {
    title: 'About Page',
    openGraph: {
      images: previousImages,
    },
  }
}
 
export default function About({ params, searchParams }) {
  const {cover} = searchParams
  return (
      <div>
        <img src={cover} alt="" srcset="" />


        <button style={{background: 'lightgreen', color:'white', padding:'20px 60px'}}>Share</button>
      </div>
  )
}