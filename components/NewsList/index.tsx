import { NewsItem } from "../../types";
import { NewsCard, NewsCardSkeleton } from "./NewsCard";

const sampleData = [
  {
    by: "iliketrains",
    descendants: 254,
    id: 31586833,
    kids: [
      31588262, 31595501, 31588018, 31587291, 31589371, 31587309, 31588052,
      31587412, 31589513, 31594387, 31592714, 31593149, 31589071, 31589811,
      31592384, 31587698, 31588429, 31587720, 31593998, 31589405, 31592945,
      31592380, 31589742, 31589602, 31592721, 31592159, 31589288, 31588517,
      31591592, 31590949, 31592753, 31587578, 31587380, 31589207, 31588843,
      31587857, 31589768, 31590632, 31591427, 31592443, 31587504, 31587648,
      31589349, 31588084, 31587890, 31588189, 31593034, 31590730, 31588205,
      31590365, 31591793, 31588074, 31591496, 31591408, 31588545, 31592226,
      31587916, 31592475, 31587667, 31591611, 31590826, 31588849, 31588610,
      31587620, 31587930, 31592348, 31591295, 31587728, 31589009, 31589036,
      31587646, 31587261, 31587636, 31590345, 31590485, 31591069, 31588350,
      31587591, 31589430, 31590748, 31587331, 31588158, 31587921, 31589200,
      31587209, 31594168, 31588960, 31592303, 31592488, 31587432, 31592529,
    ],
    score: 1041,
    text: 'I&#x27;ve seen some interests in (simulation) video games here on HN so I thought I&#x27;d share a short version of our story.<p>More than 6 years ago, me and my friend from university were playing around with an idea of making a game we always wanted to play. We worked on it on weekends but the progress was quite slow, especially due to so many dead ends and wasted effort.<p>Eventually however, we solidified our direction and decided to take the risk to resign from our well paid SWE jobs and work on it full time. It took more than a year but yesterday we have finally released it on Steam: <a href="https:&#x2F;&#x2F;store.steampowered.com&#x2F;app&#x2F;1594320&#x2F;Captain_of_Industry&#x2F;" rel="nofollow">https:&#x2F;&#x2F;store.steampowered.com&#x2F;app&#x2F;1594320&#x2F;Captain_of_Indust...</a><p>I am still not sure if this was a good decision financially, but unlike in a corporate environment, I am so much happier working on a product that I can put my love into and see people enjoy it, see my direct impact, and be able to make big decisions (although this also adds a lot of stress).<p>I also quite enjoy the added SWE challenges. I had to write so many complex algorithms (path-finding, logistics, serialization, ...) and optimize things down to bits (shaders, compression of in-memory data, ...) that were rarely required by my corp job.<p>Anyhow, this is getting a little long, feel free to ask any questions, I will do my best to answer them.',
    time: 1654111907,
    title:
      "Show HN: A friend and I spent 6 years making a simulation game, finally released",
    type: "story",
  },
  {
    by: "awillettnyc",
    descendants: 31,
    id: 31595822,
    kids: [
      31597926, 31596229, 31595823, 31597094, 31597214, 31596149, 31597352,
      31596742, 31596373, 31597540, 31596791, 31596447, 31597679, 31597627,
      31597359, 31596455, 31596248,
    ],
    score: 157,
    time: 1654182556,
    title:
      "Svelte: A component library for building interactive node-based flow diagrams",
    type: "story",
    url: "https://svelvet.io/",
  },
];

const NewsList: React.FC<{ data: NewsItem[] }> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-2">
        {data?.map((item, index) => (
          <NewsCard key={item.id} data={item} index={index} />
        ))}
      </div>
      {data.length == 0 && (
        <div className="flex flex-col w-full gap-2 h-screen">
          {[0, 1, 2, 3, 4, 5, 6].map((value, index) => (
            <NewsCardSkeleton key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default NewsList;
