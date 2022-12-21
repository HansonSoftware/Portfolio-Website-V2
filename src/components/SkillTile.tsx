import React from 'react'

interface SkillProps {
    icon: string
    name: string
}

export default function SkillTile(props:SkillProps) {

    return (
        <div className="bg-base-300 flex flex-col flex-grow-1 w-32 h-32 items-center rounded-3xl">
            <div className="pt-4">
                {/* Icon */}
                <img src={props.icon} width="64px" height="64px" alt="icon"></img>
            </div>
            <div className="flex flex-grow-1 content-center pt-4">
                <div className="font-bold text-xl">                            
                    {/* Name */}
                    <h1>{props.name}</h1>
                </div>
            </div>
        </div>
    )
}
