import { useParams } from 'react-router-dom'

export default function Post() {
  const { id } = useParams()
  return (
    <div>
      <h1>Post Page</h1>
      <p>You are viewing post with ID: {id}</p>
    </div>
  )
}
