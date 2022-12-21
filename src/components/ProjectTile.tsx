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
            <div className="bg-base-300 flex flex-col flex-grow-1 items-center rounded-3xl cursor-pointer" style={{width: "38rem", height: "38rem"}}>
                <Link className="w-full" to={`/projects/${props.title}`}>
                <div className="w-full">
                    <div className="content-start px-6 pt-6">
                        <h1 className="text-4xl font-bold">{props.title}</h1>
                        <h3 className="text-3xl font-semibold text-primary">{props.type}</h3>
                    </div>
                </div>
                {props.device === "web" && (
                <div className="px-6 pt-12 w-full flex justify-center">
                    <div className="mockup-window border border-base-100">
                        <div className="flex justify-center bg-base-200">
                            <img src={props.image} alt="project_image" className="rounded-sm" style={{width: "100%", height: "100%"}} />
                        </div>
                    </div>
                </div>
                )}
                {props.device === "iphone" && (
                <div className="px-6 py-2 w-full flex justify-center">
                    <div className="mockup-phone border-primary">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo" style={{width: "16rem", height: "27.5rem"}}>
                                <img src={props.image} alt="project_image" style={{width: "16rem", height: "27.5rem"}} />
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {props.device === "gui" && (
                <div className="px-6 pt-12 w-full flex justify-center">  
                    <img src={props.image} alt="project_image" style={{width: "24rem", height: "24rem"}} />
                </div>
                )}
                </Link>
            </div>
    )
}
