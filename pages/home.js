import Link from 'next/link';

const Home = () => {
    return (
        <div>
            Home
            <Link href = 'posts/post' > go to posts/post </Link>
        </div>
    );
}

export default Home;