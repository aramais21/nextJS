import Link from 'next/link';
import Layout from '../components/Layout';
import { fetchPromise } from '../utils/promise';

const Home = ({data}) => {
    return (
        <Layout>
            <div>
                Home
                <Link href = 'posts/post' > go to posts/post </Link>
            </div>
            {data.map((item) => {
                return <div> {item.name} {item.id} </div>
            })}
        </Layout>
    );
}

export const getStaticProps = async () => {
    try {
        const data = await fetchPromise(2000, [{name: 'unknown', id: 1},{name: 'unknown', id: 2},{name: 'unknown', id: 3}]);
        return { props: {data}}
    }
    catch(err) {
        console.log(err);
    }
}

export default Home;