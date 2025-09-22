
import { StartupCard, StartupTypeCard } from "@/components/StarupCard";
import SearchForm from "../../components/SearchForm";
import {
  heading,
  pinkContainer,
  subHeading,
  sectionContainer,
  cardGrid,
  noResult,
} from "../tailwindClassNames";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/lib/live";
import { SanityLive } from "@/sanity/lib/live";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const _query = (await searchParams).query;
  const params = { search: _query || null };
  // const posts = await client.fetch(STARTUPS_QUERY)
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

  return (
    <div>
      <section className={'w-full bg-pink-500 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 !min-h-[230px]'}>
        <h1 className={heading}>
          {" "}
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className={subHeading}>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={_query}></SearchForm>
      </section>
      <section className={sectionContainer}>
        <p className=" text-30-semibold"></p>
        {_query ? 'Search Results for "' + _query + '"' : "Latest Pitches"}
      </section>
      <ul className={` mt-7 ${cardGrid}`}>
        {posts?.length > 0 ? (
          posts.map((post: StartupTypeCard) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}
      </ul>
      <SanityLive></SanityLive>
    </div>
  );
}
