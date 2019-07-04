import Link from 'next/link';
import Header from '../component/Header';

const Post = (props) => (
  <li>
    <Link href={`/post?title=${ props.title }`}>
      <a>{ props.title }</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <Header />
    <h1>My blog</h1>
    <ul>
      <li>
        <Post title="Yet another post" />
        <Post title="Second post" />
      </li>
    </ul>
  </div>
)
