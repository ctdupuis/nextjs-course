import { useRouter } from 'next/router';

export default function id() {
    const router = useRouter();

    console.log("pathname: ", router.pathname) // => /portfolio/[id]
    console.log("query: ", router.query) // => { id: "1" h}

    return (
        <div>[id] page</div>
    )
}

