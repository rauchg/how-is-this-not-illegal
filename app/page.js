import { sql } from "@vercel/postgres";
import { PokemonList, Pokemon } from "./components";

export default async function Home() {
  const { rows } = await withTimeout(
    sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`,
    15000,
    "Timeout of postgres query"
  );

  return (
    <PokemonList>
      {rows.map((p) => (
        <Pokemon key={p.id} id={p.id} name={p.name} />
      ))}
    </PokemonList>
  );
}

function withTimeout(promise, timeoutMs, message) {
  return new Promise(async (resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(message || "Timeout"));
    }, timeoutMs);
    const ret = await promise;
    clearTimeout(timeout);
    resolve(ret);
  });
}

export const runtime = "edge";
export const dynamic = "force-dynamic";
