const ActionBar: React.FC = () => {
  return (
    <div className="flex w-full items-center">
      <div className="flex items-center gap-4 text-gray-400 text-sm">
        <span>Sort by:</span>
        <div className="flex gap-3 ">
          <Tag title="new" />
          <Tag title="past" />
          <Tag title="comments" />
        </div>
      </div>
      <div className="ml-auto flex items-start gap-1 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <div className="rounded-3xl px-4 py-0.5 border border-gray-400 w-4 h-4"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </div>
  );
};
export default ActionBar;

const Tag: React.FC<{ title: string }> = ({ title }) => {
  return (
    <span className="uppercase rounded-3xl px-4 py-0.5 border border-gray-400">
      {title}
    </span>
  );
};
