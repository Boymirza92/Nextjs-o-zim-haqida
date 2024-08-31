import Link from "next/link"

const Posts = ({data}) => {
    return (
        <>
        <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>
                                <Link href={`/posts/${a.id}`}>{a.name}</Link>
                            </td>
                            <td>{a.email}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </>
    )
}

export default Posts