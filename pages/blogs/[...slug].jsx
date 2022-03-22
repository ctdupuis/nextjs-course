import { useRouter } from "next/router";

export default function BlogPosts() {
    const router = useRouter();

    console.log(router.query) // => /blogs/2020/12 { slug: ["2020", "12"] } => like using array.split("/")

    return (
      <div>
        <h1>The Blog Posts</h1>  
      </div>
    )
}
