import React from 'react'
import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import { EyeClosedIcon, EyeIcon, MarkGithubIcon, StarIcon, DependabotIcon } from '@primer/octicons-react';
export default function FreelancePage() {
    return (
        <>

            <div className="flex flex-col items-center  w-full h-full overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8 text-base">
                    </div>

                    <Link
                        href={"/"}
                        className="duration-200 text-zinc-300 hover:text-zinc-100"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </Link>
                </div>
                <nav className="my-16 animate-fade-in" />
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                <div className="w-full h-px bg-zinc-800" />
                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <article className="p-4 md:p-8">

                        <Link href="#" legacyBehavior>
                            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer" title={`Click to view`}>
                                <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">
                                    PT Bhumi Rantau Energi
                                </span>

                            </h2>
                        </Link>
                        <span className="text-white bg-clip-text">
                            (Fullstack Developer)
                        </span>
                        <p className="z-20 mt-4 text-2xl duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            - Create API using Golang, MySQL, Redis & Echo <br />
                            - Implementing API in Flutter <br />
                            - Impelementing Docker Build <br />
                            - Using State Management GetX <br />
                            - End To End Testing <br />
                        </p>
                    </article>

                    <article className="p-4 md:p-8">

                        <Link href="#" legacyBehavior>
                            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer" title={`Click to view`}>
                                <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">
                                    Badan Amil Zakat Nasional (Baznas)
                                </span>
                            </h2>
                        </Link>
                        <span className="text-white bg-clip-text">
                            (Mobile Developer)
                        </span>
                        <p className="z-20 mt-4 text-2xl duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            Cinta Zakat Apps : <br />
                            - Develop Feature Cinta Zakat ( Payment & Maps ) <br />
                            - Refactor Structure Cinta Zakat <br />
                            <br />
                            Attendance Apps : <br />
                            - Research and Development for Attendance App using Flutter 3 and Provider MVVM <br />
                            - Research and Refactor for Performance Tuning <br />
                        </p>
                        <button className="z-20 mt-4 text-small duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            <a href="https://play.google.com/store/apps/details?id=id.go.baznas.zakat.cinta" target="_blank" rel="noopener noreferrer" className="text-white underline">Play Store Link</a>
                        </button>
                    </article>

                    <article className="p-4 md:p-8">
            
                        <Link href="#" legacyBehavior>
                            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer" title={`Click to view`}>
                                <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">
                                    Gyloop CMS
                                </span>
                            </h2>
                        </Link>
                        <span className="text-white bg-clip-text">
                            (Lead Software Engineer)
                        </span>
                        <p className="z-20 mt-4 text-2xl duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            - Lead Architecture and Development <br />
                            - Create API using Typescript, Express, and PostgreSQL with Microservice Architecture <br />
                            - Using Kafka for Message Broker <br />
                            - Using Docker for Containerization <br />
                            - Deploy Server to DigitalOcean <br />
                            - Using NextJS 13 for Frontend <br />
                        </p>
                    </article>
                    <article className="p-4 md:p-8">
            
                        <Link href="#" legacyBehavior>
                            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer" title={`Click to view`}>
                                <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">
                                    Uspatih eCommerce & PageOne
                                </span>
                            </h2>
                        </Link>
                        <span className="text-white bg-clip-text">
                            (Fullstack Developer)
                        </span>
                        <p className="z-20 mt-4 text-2xl duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            - Create Redeem Feature using Laravel <br />
                            - Implement Redeem api using Flutter <br />
                            - Using Kafka for Message Broker <br />
                            - Development, Bug Fixing & Performance Tuning <br/>
                        </p>  
                        <button className="z-20 mt-4 text-small duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            <a href="https://play.google.com/store/apps/details?id=id.uspatihdp.uspatihapps.androidoverview&hl=en_US" target="_blank" rel="noopener noreferrer" className="text-white underline">Uspatih Play Store Link</a>
                        </button>
                        <button className="ml-6 z-20 mt-4 text-small duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            <a href="https://play.google.com/store/apps/details?id=com.pgoeesport.usp&hl=en_US" target="_blank" rel="noopener noreferrer" className="text-white underline">PageOne Play Store Link</a>
                        </button>
                    </article>

                </div>




                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>


        </>
    )
}
