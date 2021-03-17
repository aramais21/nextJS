import Link from 'next/link';
import Image from 'next/image'
import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';

const Post = ({data}) => {
    console.log(data);
    return(
        <Layout>
            <h1>
                Post
                <Link href="/home" >go to home</Link>
            </h1>
            <div>
                <img src="/images/logo.png" alt = 'logo' />
            </div>
            <div>
                <Image
                    src="/images/logo.png" // Route of the image file
                    height={453} // Desired size with correct aspect ratio
                    width={820} // Desired size with correct aspect ratio
                    alt="logo"
                />
            </div>
            <div>
                {data.map((item) => {
                    console.log(item);
                    return (
                        <div key = {item.id} >
                            <div>{new Date(item.date).toDateString()}</div>
                            <div>{item.title}</div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const allPropsFromMDFiles = getSortedPostsData();
    console.log(allPropsFromMDFiles);
    return {
        props: {
            data: [...allPropsFromMDFiles]
        }
    }

}

export default Post;