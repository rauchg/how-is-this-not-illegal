import { sql } from "@vercel/postgres";
import { headers } from "next/headers";
import { PokemonList, Pokemon } from "./components";

export default async function Home() {
  headers();
  const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;

  return (
    <PokemonList>
      {rows.map((p) => (
        <Pokemon key={p.id} id={p.id} name={p.name} />
      ))}
    </PokemonList>
  );
}
