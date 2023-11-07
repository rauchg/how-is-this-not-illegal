import { sql } from "@vercel/postgres";
import { PokemonList, Pokemon } from "./components";
import { cookies } from "next/server";

export default async function Home() {
  cookies(); // force dynamic
  const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;

  return (
    <PokemonList>
      {rows.map((p) => (
        <Pokemon key={p.id} id={p.id} name={p.name} />
      ))}
    </PokemonList>
  );
}
