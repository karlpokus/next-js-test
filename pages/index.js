import Link from 'next/link'

const Post = (props) => (
  <li>
    <Link href={`/post?title=${ props.title }`}>
      <a>{ props.title }</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <h1>My blog</h1>
    <ul>
      <li>
        <Post title="Yet another post" />
        <Post title="Second post" />
      </li>
    </ul>
  </div>
)
