import { sanityFetch } from '@/lib/live';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import React, { Suspense, use } from 'react'
import { sectionContainer, heading, subHeading, categoryTag, divider, viewSkeleton } from '@/app/tailwindClassNames';
import { formatDate } from '@/lib/utils';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import markdownit from 'markdown-it'; 
import View from '@/components/view';
import { Skeleton } from '@/components/skeleton';



export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id: id });
    if (!post) {
        return <div>Startup not found</div>
    }
    // const _params = { id: _id || null }; 
    // const { data: posts } = await sanityFetch({ query: STARTUP_BY_ID_QUERY, _id })
    const md = new markdownit();
    const parsedContent = md.render(post.pitch || "");
    return (
        <div>
            <section className='w-full bg-pink-500 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 !min-h-[230px]'>
                <div className={styles.tagTri}>{formatDate(post._createdAt)}</div>
                <h1 className={heading}>{post.title}</h1>
                <p className={subHeading}>{post.description}</p>
            </section>
            <section className={sectionContainer}>
                <img src={post.image || ""} alt="thumbnail" className="w-full h-auto rounded-xl" />
                <div className=' space-y-5 mt-0 max-w-4xl mx-auto'>
                    <div className=' flex-between gap-5'>
                        <Link href={`/user/${post.author?._id}`} className=' flex-2 gap-2 items-center mb-3'>
                            <Image src={post.author?.image || ""} alt="avatar" width={64} height={64} className="rounded-full drop-shadow-lg" />
                            <div>
                                <p className=' text-20-medium'>{post.author?.name}</p>
                                <p className=' text-16-medium !text-black-300'>{post.author?.username}</p>
                            </div>
                        </Link>
                        <p className={categoryTag}>{post.category}</p>
                    </div>
                    <h3 className='text-30-bold'>Pitch Details</h3>
                    {parsedContent ? (<article
                        className="prose max-w-4xl font-work-sans break-all"
                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />) : (
                        <p className="no-result">No details provided</p>
                    )}
                </div>
                <hr className={divider} />
            </section >
            <Suspense fallback={<Skeleton className={viewSkeleton} />}>
                <View id={post._id} />
            </Suspense>
        </div >
    )
}

export default Page;


