import React from 'react'

export default function Blog() {
    return (
        <div className="pt-40 grid place-content-center gap-16 lg:px-20 px-10">
            <div className="flex flex-row gap-4">
                <h1 className="text-5xl pb-8">Firebase Posts</h1>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle btn-ghost btn-sm text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-info"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </label>
                    <div tabIndex={0} className="card card-compact dropdown-content shadow bg-base-300 rounded-box w-80">
                        <div className="card-body">
                            <h2 className="card-title">How does this work?</h2> 
                            <p>Embedded into this website is a blog app that I built to share more content, to those who are interested.</p>
                            <br/>
                            <p>This blog app is built with Firebase 🔥 and TypeScript. My posts are retirieved from the database and formatted here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPosts />
        </div>
    )
}

const BlogPosts = () => {
    return (
        <div className="bg-base-200 flex flex-col flex-grow-1 w-full items-center border-2 border-base-300 bg-opacity-80 backdrop-blur-sm rounded-3xl">
            <div className="flex flex-col p-4 items-start gap-6 w-full" style={{width: "20rem"}}>
                <div className="flex flex-col">
                    <h1 className="text-2xl">Example Post</h1>
                    <h2 className="text-lg">Hayden | 12/28/22</h2>
                </div>
                <div className="w-full p-2 border border-base-100 rounded-xl">
                    <p className="">This post came from firebase! Woot woot</p>
                </div>
            </div>
        </div>
    )
}