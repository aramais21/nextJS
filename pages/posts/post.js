import Link from 'next/link';

const Post = () => {
    return(
        <h1>
            Post
            <Link href="/home" >go to home</Link>
        </h1>
    )
}

export default Post;