export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(member => {
        return {
            params: { memberId: member.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const memberId = context.params.memberId;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + memberId);
    const memberData = await res.json();

    return {
        props: { member: memberData }
    };
}

const Details = ({ member }) => {
    return (
        <div className="details">
            <h1>{ member.name }</h1>
            <p>Email address: { member.email }</p>
            <p>Website: { member.website }</p>
            <p>City: { member.address.city }</p>
        </div>
    );
}

export default Details;