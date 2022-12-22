import React from 'react'
import ProjectTile from './ProjectTile'
/* Image Imports */
import pocketrecipes from '../images/recipe/FavoritesPage.png'
import spotify from '../images/spotify/homepage.png'
import graph from '../images/graph/graph.gif'
import shell from '../images/shell/shell.png'
import scheduler from '../images/scheduler/Startup.png'
import craigslist from '../images/craigslist/craigslist.png'

export default function Portfolio() {
    return (
        <div id='portfolio' style={{padding: "6vw"}}>
            <div className="flex flex-wrap sm:justify-start justify-center gap-10">
                <ProjectTile  title='Spotify Player' type='Web App' image={spotify} device='web' />
                <ProjectTile  title='Pocket Recipes' type='Mobile' image={pocketrecipes} device='iphone' />
                <ProjectTile  title='Algorithm Simulation' type='GUI' image={graph} device='gui' />
                <ProjectTile  title='Taskman Shell' type='Unix Program' image={shell} device='web' />
                <ProjectTile  title='Process Scheduler' type='Unix Program' image={scheduler} device='web' />
                <ProjectTile  title='Craigslist Reborn' type='User Interface' image={craigslist} device='web' />
            </div>
        </div>
    )
}
