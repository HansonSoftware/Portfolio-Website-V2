import React from 'react'
import ProjectTile from './ProjectTile'
/* Image Imports */
import pocketrecipes from '../images/recipe/FavoritesPage.png'
import spotify from '../images/spotify/homepage.png'
import graph from '../images/graph/graph.gif'
import shell from '../images/shell/shell_start.png'
import scheduler from '../images/scheduler/scheduler_start.png'
import craigslist from '../images/craigslist/craigslist.png'

export default function Portfolio() {
    return (
        <div className='grid place-items-center w-full' id='portfolio' style={{padding: "4vw", margin: "0px auto"}}>
            <h1 className="pt-20 pb-12 lg:text-6xl md:text-5xl text-4xl">Personal Projects</h1>
            <div className="flex flex-wrap sm:justify-start justify-center gap-12">
                <ProjectTile  title='Spotify Player' type='Web App' image={spotify} device='web' />
                <ProjectTile  title='Pocket Recipes' type='Mobile App' image={pocketrecipes} device='iphone' />
            </div>
            <h1 className="pt-20 pb-12 lg:text-6xl md:text-5xl text-4xl">University Projects</h1>
            <div className="flex flex-wrap sm:justify-start justify-center gap-12">
                <ProjectTile  title='Taskman Shell' type='Unix Program' image={shell} device='web' />
                <ProjectTile  title='Process Scheduler' type='Unix Program' image={scheduler} device='web' />
                <ProjectTile  title='Algorithm Simulation' type='GUI' image={graph} device='gui' />
                <ProjectTile  title='Craigslist Reborn' type='User Interface' image={craigslist} device='web' />
            </div>
        </div>
    )
}
