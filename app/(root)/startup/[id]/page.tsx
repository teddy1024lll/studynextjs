import { sanityFetch } from '@/lib/live';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import React from 'react'

export const experimental_ppr = true;

const page = async ({ params }: { params: { id: string } }) => {
    const _id = await (params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { _id });
    if(!post){
        return <div>Startup not found</div>
    }
    // const _params = { id: _id || null }; 
    // const { data: posts } = await sanityFetch({ query: STARTUP_BY_ID_QUERY, _id })

    return (
        <div>
            <h1 className='text-3xl'>This is a startup number:${_id}</h1>
        </div>
    )
}

export default page


