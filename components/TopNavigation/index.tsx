const TopNavigation: React.FC = () => {
  return (
    <div className="min-h-[44px] min-w-screen bg-orange-500 text-white flex items-center px-3 md:px-6 lg:px-12 py-1">
      <a
        className="text-3xl flex gap-2 items-center font-bold -tracking-tighter py-2"
        href="https://news.ycombinator.com/"
      >
        <span className="border border-white px-3 py-1 rounded-sm">Y</span>
        <span>Hacker News</span>
      </a>

      <div className="ml-auto flex items-center gap-6">
        <ul className="hidden md:flex gap-4 font-bold">
          <li className="cursor-pointer hover:text-gray-700 transition-all delay-75 duration-100">
            Story
          </li>
          <li className="cursor-pointer  hover:text-gray-700">Jobs</li>
        </ul>
        <button className="text-black bg-white px-4 py-2 rounded-2xl hover:bg-gray-700 hover:text-white cursor-pointer">
          Login
        </button>
        <button className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default TopNavigation;
