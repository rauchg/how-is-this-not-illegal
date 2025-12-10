import { sql } from "@vercel/postgres";
import { PokemonList, Pokemon } from "./components";

export default async function Home() {
  // Skip database query during build time
  if (!process.env.POSTGRES_URL) {
    return (
      <PokemonList>
        {/* Empty list during build */}
      </PokemonList>
    );
  }

  const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;

  return (
    <PokemonList>
      {rows.map((p) => (
        <Pokemon key={p.id} id={p.id} name={p.name} />
      ))}
    </PokemonList>
  );
}
