import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0, 3),
        },
    };
};

const Posts = ({ posts }) => {
    return (
        <>
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <b>
                                {post.id} - {post.title}
                            </b>
                        </Link>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};

export default Posts;
