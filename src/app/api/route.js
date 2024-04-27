import { ImageResponse } from '@vercel/og'


export async function GET(request) {
  const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')
  const cover = searchParams.get('cover')
  console.log(cover)
  // return Response.json({ name:'John' })

  const imgUrl = 'https://images.unsplash.com/photo-1619858105248-cf578578b2d7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  return new ImageResponse(
    (
      <div tw='w-full h-full flex flex-col'>
        <img src={cover} alt="" srcset="" style={{ objectFit: 'cover', objectPosition: ' center' }} />
      </div>
    ), { width: 1200, height: 680 }
  )
}