/* 
 * Make sure your React Component is the default export.
 * Note: Client side navigation is only supported through the Link API which performs similarly
 * to using <a /> HTML hyperlink tags alone in the HTML world.
 * Note: Server side navigation requires a fetch for a new page, and then a reload to load it; but
 * not Client side navigation, it takes action all within the browser, without the server.
 */

// This is the Link API
import Link from 'next/link';
//import withLayout from '../components/Layout';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

class Index extends React.Component
{
  constructor(props)
  {
    super(props)
    var ex = props.shows;
  }
  render() {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(show => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
/*
// This commented out code is the same as above
const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
*/
Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;

/*
const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}
*/
/*
const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
*/
/*
const Page = () => <p>Welcome to my Sandbox</p>
  
  export default withLayout(Page);
*/