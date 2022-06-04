import { NewsItem } from "../../types";

export const timeFormat = new Intl.RelativeTimeFormat("en", {
  style: "narrow",
});

function durationCalculate(postTime: number): string {
  const currentTime = Date.now();
  const timeInHours = (currentTime - postTime * 1000) / (1000 * 60 * 60);
  if (timeInHours > 24) {
    return timeFormat.format(Math.floor((-1 * timeInHours) / 24), "days");
  }
  return timeFormat.format(-1 * Math.floor(timeInHours), "hour");
}

export const NewsCard: React.FC<{ data: NewsItem; index: number }> = ({
  data,
  index,
}) => {
  return (
    <div className="bg-white rounded-xl py-4 px-2 flex items-center gap-2 flex-col md:flex-row md:px-6 md:gap-4">
      <div className="text-rose-800 font-semibold md:flex w-8 gap-1  justify-between items-center hidden">
        <span>{index}</span>
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
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="truncate w-full max-w-sm  md:max-w-md">
          {data.title}
        </div>
        <div className="flex gap-2 items-center justify-start w-full">
          <div className="text-rose-800 font-semibold flex w-8  justify-between items-center md:hidden">
            <span>{index}</span>
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
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
          </div>
          <div className="text-gray-400 text-xs flex items-center font-semibold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>{data.score} points</span>
          </div>
          <div className="text-gray-400 text-xs flex items-center font-semibold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{data.by}</span>
          </div>
          <div className="text-gray-400 text-xs flex items-center font-semibold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span>{data.descendants}</span>
          </div>
          <div className="text-gray-400 text-xs flex items-center gap-1">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{durationCalculate(data.time)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 text-gray-400 w-full text-sm items-center">
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              className="flex gap-1 items-center cursor-pointer"
            >
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span className="truncate w-52">{data.url}</span>
            </a>
          )}
        </div>
        <div className="flex gap-1 items-center h-4"></div>
      </div>
    </div>
  );
};

export const NewsCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl py-4 px-2 flex items-center gap-2 flex-col md:flex-row md:px-6 md:gap-4 w-full h-20">
      <div className="text-rose-800 font-semibold md:flex w-8 gap-1  justify-between items-center hidden">
        <div className="h-2 bg-slate-200 rounded"></div>
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
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="truncate w-full max-w-sm  md:max-w-md">
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
        <div className="flex gap-2 items-center justify-start w-full">
          <div className="text-rose-800 font-semibold flex w-8  justify-between items-center md:hidden">
            <div className="h-2 bg-slate-200 w-4 rounded"></div>
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
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
          </div>
          <div className="text-gray-400 text-xs flex items-center font-semibold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div className="h-2 w-4 bg-slate-200 rounded"></div>
          </div>
          <div className="text-gray-400 text-xs flex items-center font-semibold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div className="h-2 w-12 bg-slate-200 rounded"></div>
          </div>
          <div className="text-gray-400 text-xs flex items-center font-semibold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <div className="h-2 w-8 bg-slate-200 rounded"></div>
          </div>
          <div className="text-gray-400 text-xs flex items-center gap-1">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="h-2 w-8 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 text-gray-400 w-full text-sm items-center">
          <div className="h-2 w-28 bg-slate-200 rounded"></div>
        </div>
        <div className="flex  gap-1 items-center h-4">
          <div className="h-2 w-28 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};
