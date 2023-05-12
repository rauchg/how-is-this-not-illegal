import Image from "next/image";

export function PokemonList({ children }) {
  return (
    <ul className="max-w-md flex flex-wrap justify-center gap-4 p-4 m-3">
      {children}
    </ul>
  );
}

export function Pokemon({ id, name }) {
  return (
    <li className="flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3">
      <Image
        width={96}
        height={96}
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      {name}
    </li>
  );
}
