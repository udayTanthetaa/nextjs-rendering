export const getStaticProps = async (context) => {
    const { params } = context;

    const response = await fetch(
        `http://localhost:4000/products/${params.productId}`
    );
    const data = await response.json();

    return {
        props: {
            post: data,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = [
        {
            params: {
                productId: "1",
            },
        },
    ];

    return {
        paths: paths,
        fallback: true,
    };
};

const Product = ({ post }) => {
    return (
        <>
            <h1>
                Product - {post.id} - {post.title}
            </h1>

            <h2>Price = {post.price} Rs</h2>
            <i>
                <p>{post.description}</p>
            </i>
        </>
    );
};

export default Product;
