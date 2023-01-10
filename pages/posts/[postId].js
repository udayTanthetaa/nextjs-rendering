import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
    const { params } = context;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await response.json();

    return {
        props: {
            post: data,
        },
    };
};

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // const paths = data.map((post) => {
    //     return {
    //         params: {
    //             postId: `${post.id}`,
    //         },
    //     };
    // });

    const paths = [
        {
            params: {
                postId: "1",
            },
        },
        {
            params: {
                postId: "2",
            },
        },
        {
            params: {
                postId: "3",
            },
        },
    ];

    return {
        paths: paths,
        fallback: true,
    };
};

const Post = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <>
            <b>
                Post - {post.id} - {post.title}
            </b>
            <br />
            {post.body}
            <hr />
        </>
    );
};

export default Post;
