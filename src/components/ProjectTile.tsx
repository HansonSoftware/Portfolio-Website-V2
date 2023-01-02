import React from 'react'
import { Link } from 'react-router-dom'

interface ProjectProps {
    title: string
    type: string
    device: string
    image: string
}

export default function ProjectTile(props:ProjectProps) {
    return (
            <div className="bg-base-200 flex flex-col flex-grow-1 items-center border-2 border-base-300 bg-opacity-80 backdrop-blur-sm rounded-3xl cursor-pointer project-tile-responsive">
                <Link className="w-full" to={`/projects/${props.title}`}>
                <div className="w-full">
                    <div className="content-start px-6 pt-6">
                        <h1 className="text-4xl font-bold">{props.title}</h1>
                        <h3 className="text-3xl font-semibold text-primary"><code>{props.type}</code></h3>
                    </div>
                </div>
                {props.device === "web" && (
                <div className="lg:px-6 px-4 lg:pt-14 pt-24 w-full flex justify-center">
                    <div className="mockup-window pt-4 border border-base-300">
                        <div className="flex justify-center bg-base-200">
                            <img src={props.image} alt="project_image" className="rounded-sm" style={{aspectRatio: "16/9", width: "100%", height: "100%"}} />
                        </div>
                    </div>
                </div>
                )}
                {props.device === "iphone" && (
                <div className="lg:px-6 px-2 py-2 w-full flex justify-center">
                    <div className="mockup-phone border-primary">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo responsive_phone" >
                                <img src={props.image} alt="project_image" className='responsive_phone' />
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {props.device === "gui" && (
                <div className="px-6 pt-12 w-full flex justify-center">  
                    <img src={props.image} alt="project_image" className="border border-neutral rounded-md responsive_gui" />
                </div>
                )}
                </Link>
            </div>
    )
}
