import { useRouter } from "next/router";

export default function index() {
    const router = useRouter();

    return (
        <div>All projects for a selected client with ID of {router.query.id}</div>
    )
}
