import { sql } from "@vercel/postgres";
import { PokemonList, Pokemon } from "./components";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  );
}

async function Content() {
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

function Loading() {
  return (
    <ul className="max-w-md flex flex-wrap justify-center gap-4 p-4 m-3">
      {[...Array(12)].map((_, i) => (
        <li
          key={i}
          className="flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3"
        >
          <div style={{ width: 96, height: 96 }} />
          <span aria-hidden className="invisible">
            Loading
          </span>
        </li>
      ))}
    </ul>
  );
}
