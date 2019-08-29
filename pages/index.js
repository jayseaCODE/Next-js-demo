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
/*
const Page = () => <p>Welcome to my Sandbox</p>
  
  export default withLayout(Page);
*/