import useSWR from 'swr';
import Link from "next/link";
import {fetcher} from '../middleware/fetcher';
import Layout from "../components/Layout";

const serverSide = () => {
    const {} = useSWR('/api/createPost',(url) => fetcher(url, {title: 'as', desc: "as"}));
    return (
        <Layout>
            <div>
                <Link href='/' > go to / </Link>
            </div>
        </Layout>
    )
}

// getServerSideProps is called at request time
// context contains request specific parameters
// export const getServerSideProps = async (context) => {
//     console.log(context);
//     // here should be the direct logic of getting the data either from mongo or from other db
//     // this means that you will write both backend and frontend in a single if you don't fetch external API.
//     console.log(`${process.env.PORT}/api/createPost`)
//     await fetch(`${process.env.PORT}/api/createPost`, {method: 'POST', body: JSON.stringify({title: 'asd', desc: 'asd'})})
//     return {
//         props: {

//         }
//     }
// }

export default serverSide;