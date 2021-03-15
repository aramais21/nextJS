import Link from 'next/link';
import Image from 'next/image'

const Post = () => {
    return(
        <>
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
        </>
    )
}

export default Post;