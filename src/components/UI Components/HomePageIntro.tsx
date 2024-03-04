import SkateBoardLogo from '@site/static/img/skateboard-graphic.svg'
import WhatWeDoGraphic from '@site/static/img/what-we-do-graphic.svg'
import { IoIosCheckmarkCircle } from "react-icons/io";
const HomePageIntro =() => {
    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container">


                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-5">
                        <SkateBoardLogo className="w-fit h-96 sm:w-fit sm:h-48 md:w-fit md:h-96" />
                    </div>
                    <div className="lg:col-span-7 mt-8 md:mt-0">
                        <div className="ltr:lg:ml-10 rtl:lg:mr-10">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Welcome to Electrium Mobility.</h3>
                            <p className="text-slate-400 max-w-xl">We are Electrium Mobility, a student-led design team located at the Sedra Student
                                Design Center at the University of Waterloo. Comprised of passionate individuals,
                                we are committed to shaping the future of transportation through the creation of electric
                                vehicles. With a strong focus on sustainability and innovation, our mission is to
                                increase awareness and promote the adoption of greener transportation options. </p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center">
                                  <span className="text-green-500 flex items-center ">
                                      <IoIosCheckmarkCircle/>
                                  </span>
                                    <span className="ml-2 flex items-center">Innovative Design</span>
                                </li>
                                <li className="mb-1 flex items-center">
                                  <span className="text-green-500 flex items-center ">
                                      <IoIosCheckmarkCircle/>
                                  </span>
                                    <span className="ml-2 flex items-center">Affordability and Accessibility</span>
                                </li>
                                <li className="mb-1 flex items-center">
                                  <span className="text-green-500 flex items-center ">
                                      <IoIosCheckmarkCircle/>
                                  </span>
                                    <span className="ml-2 flex items-center">Collaborative Approach</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>

            <div className="container md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-5 md:order-2 order-1">
                            <WhatWeDoGraphic className="w-11/12 h-96 sm:w-11/12 sm:h-48 md:w-11/12 md:h-96" />
                        </div>
                        <div className="lg:col-span-7 md:order-1 order-2 mt-8 md:mt-0">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What We Do</h3>
                        <p className="text-slate-400 max-w-xl">At Electrium Mobility, we are driven by a shared vision of revolutionizing the automotive industry
                            through the development of cutting-edge electric vehicles. Using our expertise in
                            engineering, we aim to create affordable electric vehicles that deliver outstanding performance
                            and efficiency. Through our various projects, collaborations, and
                            educational initiatives, we are actively advocating for the economic benefits and positive environmental impact of electric
                            vehicles. Our ultimate goal is to inspire and equip students with the knowledge
                            and skills necessary to contribute to the future of electric mobility.</p>

                            <ul className="list-none text-slate-400 mt-4">

                                <li className="mb-1 flex items-center">
                                  <span className="text-green-500 flex items-center ">
                                      <IoIosCheckmarkCircle/>
                                  </span>
                                    <span className="ml-2 flex items-center">Design and Build</span>
                                </li>

                                <li className="mb-1 flex items-center">
                                  <span className="text-green-500 flex items-center ">
                                      <IoIosCheckmarkCircle/>
                                  </span>
                                    <span className="ml-2 flex items-center">Awareness and Education</span>
                                </li>
                                <li className="mb-1 flex items-center">
                                  <span className="text-green-500 flex items-center ">
                                      <IoIosCheckmarkCircle/>
                                  </span>
                                    <span className="ml-2 flex items-center">Sustainable and Affordable
                                    Transportation</span>
                                </li>
                            </ul>

                            <br/>

                            <div className="">
                                <a href="about.html"
                                   className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read
                                    More <i className="uil uil-angle-right-b align-middle"></i></a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageIntro;
