import Link from 'next/link';

import Layout from '../components/Layout';
import {getSortedPostsData} from '../lib/posts';
import { fetchPromise } from '../utils/promise';

import styles from '../styles/home.module.css';

const Home = ({asyncData, staticData}) => {
    return (
        <Layout>
            <div className={styles.title} >
                Home
                <Link href = '/posts/post' > posts/post </Link>
                <Link href = '/serverSide' > serverSide </Link>
            </div>
            <div className={styles.columnWrapper} >
                <div className={styles.column} >
                    <div className = {styles.columnTitle} >Async Data</div>
                    {asyncData.map((item) => {
                        return <div key = {item.id} > {item.name} {item.id} </div>
                    })}
                </div>
                <div className={styles.column} >
                    <div className = {styles.columnTitle} > StaticData </div>
                    {staticData.map((item) => {
                        return <div key = {item.id} > {new Date(item.date).toDateString()} {item.title} </div>
                    })}
                </div>
            </div>
        </Layout>
    );
}

export const getStaticProps = async () => {
    try {
        const asyncData = await fetchPromise(2000, [{name: 'unknown', id: 1},{name: 'unknown', id: 2},{name: 'unknown', id: 3}]);
        const staticData = getSortedPostsData();
        return { props: {asyncData, staticData}};
    }
    catch(err) {
        console.log(err);
    }
}

export default Home;