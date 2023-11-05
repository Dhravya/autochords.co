// POST route
export async function POST(request: Request) {
  const {searchParams} = new URL(request.url)
  const user_email = searchParams.get('user_email')

  // Make the request as it is
  const formData = await request.formData();
  console.log(formData)
  const res = await fetch(`https://api.autochords.co/user_recording?user_email=` + user_email, {
    body: formData,
    method: 'POST'
  })

  console.log(res)

  const resJson = await res.json()
 
  return Response.json(resJson)
}
