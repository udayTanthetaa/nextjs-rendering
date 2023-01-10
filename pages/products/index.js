import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch(`http://localhost:4000/products`);
    const data = await response.json();

    return {
        props: {
            products: data,
        },
    };
};

const Products = ({ products }) => {
    return (
        <>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <Link href={`/products/${product.id}`} passHref>
                            <h1>
                                {product.id} - {product.title}
                            </h1>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default Products;
