import './stylesheet.css'

export default function Services() {
    return (
        <div id="services" className="pt-32 bg-base-100 min-h-screen px-8">
            <div className="grid place-content-center place-items-center">
                <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-5xl underline lg:pb-24 pb-8">Our Mission</h1>

                <div className="flex flex-col w-full lg:flex-row">
                    {/* Left */} 
                    <div className="grid flex-grow card rounded-box place-items-center lg:max-w-40p">
                    <div className="flex flex-col w-full lg:flex-row px-4">
                    <div>
                        <h1 className='text-center lg:text-4xl text-3xl pb-4'>Mission Statement:</h1>
                        <div>
                            <p className="text-center lg:text-xl text-lg">
                                Our mission is to think outside the box when it comes to UI design, and to approach every project with a sense of craftsmanship.
                            </p>
                        </div>
                    </div>
                    </div>
                    </div> 
                    {/* Left */} 
                    <div className="divider lg:divider-horizontal"></div>
                    {/* Center */} 
                    <div className="grid flex-grow card rounded-box place-content-center place-items-center lg:min-w-max">
                        <div className="flex flex-col w-full lg:flex-row px-4">
                            <div>
                                3D Figure coming soon ..
                            </div>
                        </div>
                    </div>
                    {/* Center */} 
                    <div className="divider lg:divider-horizontal"></div>
                    {/* Right */} 
                    <div className="grid flex-grow card rounded-box place-items-center lg:min-w-max lg:max-w-40p">
                        <div className="flex flex-col w-full lg:flex-row px-4">
                        <div>
                            <h1 className='text-center lg:text-4xl text-3xl pb-4'>Services:</h1>
                            <div className="flex flex-col gap-2">
                                {/* Service 1 */}
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium">
                                        Custom Websites
                                    </div>
                                    <div className="collapse-content"> 
                                        <p className="text-left">We will hand craft and deploy the website you've been waiting for!</p>
                                        <br/>
                                        <p className="text-left">We start with a simple design, and work to bring your vision to life.</p>
                                        <br/>
                                        <p className="text-left">We handle the deployment, hosting, and more!</p>
                                        
                                    </div>
                                </div>
                                {/* Service 1 */}
                                {/* Service 2 */}
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium">
                                        Tech Services
                                    </div>
                                    <div className="collapse-content"> 
                                        <p className="text-left">We can also help with other various tech needs.</p>
                                        <br/>
                                        <p className="text-left">Contact us to find out if we can get the job done.</p>
                                    </div>
                                </div>
                                {/* Service 2 */}
                                {/* Service 3 */}
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium">
                                        Mobile App Development
                                    </div>
                                    <div className="collapse-content"> 
                                        <p className="text-left flex-wrap">Have an interesting mobile app idea? We can bring it to life!</p>
                                        <br/>
                                        <p className="text-left">Please don't hesitate to contact us with details.</p>
                                    </div>
                                </div>
                                {/* Service 3 */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Right */} 
                </div>
            </div>
        </div>
    )
}