import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { ActionBar, NewsList, TopNavigation } from "../components";
import { NewsItem } from "../types";

const Home: NextPage = () => {
  const [data, setData] = useState<NewsItem[]>([]);
  const [topStory, setTopStory] = useState<number[]>([]);
  const ref = useRef(false);

  const fetchStories = async (storyList: number[]) => {
    const storyRequests = storyList.map((storyId) =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
      )
    );
    const storyResponses = await Promise.all(storyRequests);
    const stories: NewsItem[] = [];
    for (let storyResponse of storyResponses) {
      const story = await storyResponse.json();
      stories.push(story);
    }
    setData((prev) => {
      return [...prev, ...stories];
    });
  };

  const fetchStoryList = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const storyList: number[] = await response.json();
    const storyListSlice = storyList.splice(0, 10);
    setTopStory(storyList);
    await fetchStories(storyListSlice);
  };
  const loadMore = async () => {
    setTopStory((prev) => {
      const storyList = [...prev];
      const storyListSlice = storyList.splice(0, 10);
      fetchStories(storyListSlice);
      return storyList;
    });
  };
  useEffect(() => {
    if (ref.current) return;
    fetchStoryList();
    ref.current = true;
  }, []);

  return (
    <>
      <TopNavigation />
      <div className=" px-3 md:px-6 lg:px-12 py-4 flex flex-col min-w-screen gap-4 bg-amber-50 min-h-screen">
        <ActionBar />
        <NewsList data={data} />
        <button
          onClick={loadMore}
          className="px-4 py-2 bg-amber-400 rounded-xl w-24 hover:bg-amber-500 active:bg-amber-600"
        >
          more...
        </button>
      </div>
    </>
  );
};

export default Home;
