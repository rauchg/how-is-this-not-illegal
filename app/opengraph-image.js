import { sql } from "@vercel/postgres";
import { ImageResponse } from "next/og";
import Image from "next/image";

export const runtime = "edge";
export const revalidate = 60;

export default async function OGImage() {
  // Return a placeholder during build if no database connection
  if (!process.env.POSTGRES_URL) {
    const rows = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Pokemon ${i + 1}`,
    }));

    return generateOGImage(rows);
  }

  const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;
  return generateOGImage(rows);
}

async function generateOGImage(rows) {

  const inter500 = fetch(
    new URL(
      `../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff`,
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  const robotoMono400 = fetch(
    new URL(
      `../node_modules/@fontsource/roboto-mono/files/roboto-mono-latin-400-normal.woff`,
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full"
        style={{
          ...font("Inter 500"),
          background: "linear-gradient(to bottom, #ccc, #fff)",
        }}
      >
        <main tw="flex h-full w-full flex-col items-center px-6 pt-8">
          <h1 tw="text-6xl font-bold mb-3">How is this not illegal?</h1>

          <p tw="flex text-xl items-center mt-18">
            <code
              tw="mr-3 py-1 px-2 h-[42px] rounded-md border border-gray-300 bg-gray-100"
              style={font("Roboto Mono 400")}
            >
              await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`
            </code>{" "}
            right in your{" "}
            <code
              tw="ml-3 py-1 px-2 h-[42px] rounded-md border border-gray-300 bg-gray-100"
              style={font("Roboto Mono 400")}
            >
              &lt;Component /&gt;
            </code>
          </p>

          <ul tw="w-full flex flex-wrap justify-center p-4 m-3 mt-0">
            {rows.map(({ id, name }) => (
              <li
                key={id}
                tw="text-xl flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3 m-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width={144}
                  height={144}
                  alt={name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                />
                {name}
              </li>
            ))}
          </ul>
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter 500",
          data: await inter500,
        },
        {
          name: "Roboto Mono 400",
          data: await robotoMono400,
        },
      ],
    }
  );
}

function font(fontFamily) {
  return { fontFamily };
}
