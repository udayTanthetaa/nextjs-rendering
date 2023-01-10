export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            users: data,
        },
    };
};

const Users = ({ users }) => {
    return (
        <>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        {user.id} - {user.name}
                        <br />
                        {user.username} - {user.email}
                        <hr />
                    </div>
                );
            })}
        </>
    );
};

export default Users;
