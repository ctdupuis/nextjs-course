import { useRouter } from "next/router";

export default function index() {
    const router = useRouter();

    const loadHandler = () => {
        // load data...
        // router.push('/clients/max/projecta'); // simulates using a Link programmatically
        router.replace({
            pathname: '/clients/[id]/[projectId]',
            query: { id: 'max', projectId: 'project_a'}
        });
    }

    return (
        <div>
            <h1>All projects for a selected client with ID of {router.query.id}</h1>
            <button onClick={loadHandler}>Load Project</button>
        </div>
    )
}
