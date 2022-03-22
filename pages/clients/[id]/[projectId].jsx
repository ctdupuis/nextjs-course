import { useRouter } from 'next/router'

export default function projectId() {
    const router = useRouter();

    return (
        <div>Project from Client with id of {router.query.projectId}</div>
    )
}
