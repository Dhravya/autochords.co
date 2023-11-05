export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const song_name = searchParams.get('song_name')
  const res = await fetch(`https://api.autochords.co/search_results?song_name=${song_name}`, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}