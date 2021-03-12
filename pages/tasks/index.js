import Head from 'next/head';
import Link from 'next/link';

const Tasks = () => {
    let day = 1;

    return (
        <>
            <Head>
                <title>Tasks Lists | Keep Your Todos Up to Date</title>
                <meta name="keywords" content="tasks" />
            </Head>
            <div>
                <h1>Manage Tasks Lists</h1>
                <br />
                <h3>Current task lists:</h3>
                <Link href="/tasks/home"><a>Home</a></Link>
            </div>
        </>
    );
}

export default Tasks;