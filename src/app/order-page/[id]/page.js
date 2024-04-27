
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
    console.log(id)

    const {cover} = searchParams
    console.log(cover)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = cover
   
    return {
      title: 'hello',
      openGraph: {
        images: previousImages,
      },
    }
  }
   
  export default function Product({ params, searchParams }) {
   
    return (
        <div>Products page Dynamic</div>
    )
  }