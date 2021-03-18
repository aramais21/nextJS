import Link from "next/link";
import Layout from "../components/Layout";

const serverSide = () => {
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
export const getServerSideProps = async (context) => {
    console.log(context);
    // here should be the direct logic of getting the data either from mongo or from other db
    // this means that you will write both backend and frontend in a single if you don't fetch external API.
    
    return {
        props: {

        }
    }
}

export default serverSide;