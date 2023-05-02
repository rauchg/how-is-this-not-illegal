export default function Load() {
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
