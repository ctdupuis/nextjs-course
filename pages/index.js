import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      {/* This will send an entirely new req, losing app state in the process */}
      <a href="/portfolio">Portfolio</a> 

      {/* Proper NextJS Link, app state persists */}
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>

      <li>
        <Link href="/clients">Clients</Link>
      </li>
    </div>
  )
}
