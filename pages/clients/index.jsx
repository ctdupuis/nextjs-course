import Link from "next/link";

export default function index() {

  const clients = [
    {id: "max", name: "Maximillian"},
    {id: 'manuel', name: "Manuel"}
  ]

  return (
    <div>
        <h1>List of Clients</h1>

        <ul>
          {clients.map(c => <li key={c.id}>
            <Link href={{
                pathname: '/clients/[id]',
                query: { id: c.id }
            }}>
              {c.name}
            </Link>
          </li>)}
        </ul>
    </div>
  )
}
