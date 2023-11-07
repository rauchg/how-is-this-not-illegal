import { sql } from "@vercel/postgres";
import { PokemonList, Pokemon } from "./components";
import { headers } from "../next.config";

export default async function Home() {
  headers(); // Force dynamic
  const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;

  return (
    <PokemonList>
      {rows.map((p) => (
        <Pokemon key={p.id} id={p.id} name={p.name} />
      ))}
    </PokemonList>
  );
}
