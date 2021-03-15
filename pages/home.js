import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div>
                Home
                <Link href = 'posts/post' > go to posts/post </Link>
            </div>
        </Layout>
    );
}

export default Home;