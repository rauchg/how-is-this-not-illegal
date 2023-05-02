import { sql } from "@vercel/postgres";
import { Pokemons, Pokemon } from "./components";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;

  return (
    <Pokemons>
      {rows.map((p) => (
        <Pokemon key={p.id} id={p.id} name={p.name} />
      ))}
    </Pokemons>
  );
}

export const runtime = "edge";
export const dynamic = "force-dynamic";
