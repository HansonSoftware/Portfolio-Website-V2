import resume from '../assets/resume.pdf'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function Footer() {
    return (
        <footer className="grid grid-flow-col w-full items-center p-4 bg-neutral text-neutral-content">
            <div className='items-center grid-flow-col'>
                {/* <div className="wrapper">

                <a className="social-icon" href="https://github.com/HansonSoftware" target="_blank">
                <div className="icon github">
                    <span className="tooltip">Github</span>
                    <GitHubIcon style={{width: "38", height: "38"}}/>
                </div>
                </a>

                <a className="social-icon" href="https://www.linkedin.com/in/hansonhayden/" target="_blank">
                <div className="icon linkedin">
                    <span className="tooltip">LinkedIn</span>
                    <LinkedInIcon style={{width: "44", height: "44"}}/>
                </div>
                </a>
                
                <a className="social-icon" href={resume} target="_blank">
                <div className="icon resume">
                    <span className="tooltip">Resume</span>
                    <AssignmentIndIcon style={{width: "44", height: "44"}}/>
                </div>
                </a>

                </div> */}
            </div>


            <div className="grid-flow-col gap-4 justify-self-end">
                <div className="wrapper">
                    <a className="social-icon" href="#">
                    <div className="icon top">
                        <span className="tooltip">🚀</span>
                        <ArrowCircleUpIcon style={{width: "48", height: "48"}}/>
                    </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}
