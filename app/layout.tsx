import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "How is this not illegal?",
  description: "Querying Postgres directly from your components",
  openGraph: {
    title: "How is this not illegal?",
    description: "Querying Postgres directly from your components",
    url: "https://howisthisnotillegal.vercel.app",
    siteName: "How is this not illegal?",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rauchg",
    creator: "@rauchg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center flex-start px-6 pt-6">
          <h1 className="text-3xl font-bold mb-3">How is this not illegal?</h1>
          <p className="text-center">
            This page renders{" "}
            <code className="py-0.5 px-1 text-sm rounded-md border border-gray-300 bg-gray-100 dark:bg-[#444] dark:border-[#666]">
              SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12
            </code>{" "}
            from the edge, for every request.
          </p>
          <p className="mt-2 text-center">
            What&apos;s best, the data fetching is defined directly within the
            component tree thanks to React Server Components.{" "}
            <a
              href="https://twitter.com/dan_abramov/status/1341217154566402050"
              target="_blank"
              className="underline"
            >
              Legally
            </a>
            . (
            <a
              className="underline"
              target="_blank"
              href="https://github.com/rauchg/how-is-this-not-illegal"
            >
              Source
            </a>
            )
          </p>
          {children}
        </main>

        <footer className="text-xs p-5 text-center text-gray-600">
          Images courtesy of{" "}
          <a
            target="_blank"
            className="underline"
            href="https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon"
          >
            PokeAPI
          </a>{" "}
          – Pokemon is © 1996-2023 Nintendo, Creatures, Inc., GAME FREAK
        </footer>
      </body>
    </html>
  );
}
