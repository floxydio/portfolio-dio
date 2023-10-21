import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";



export default function ProfilePage() {
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

                {/* Avatar Circle Image */}
                <div className="flex justify-center">
                    <img className="rounded-full w-48 h-48 border-2 border-white" src="https://media.licdn.com/dms/image/D5603AQHUzOukE_odhA/profile-displayphoto-shrink_800_800/0/1677163432218?e=1703116800&v=beta&t=2vjiUjKR9roYcWhLO8MH7dpgyw8x32c9loU5QzQPs9Q" alt="Avatar" />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-white text-4xl mt-10">Hi 👋, i'm Dio</h1>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-white text-1xl mt-4">Software Engineer | Mobile Developer | Backend Developer</h1>
                    
                </div>
                <div className="flex justify-center mt-4">
                    <div className="rounded-full px-6 py-2 m-2" style={{
                        backgroundColor:"#00A0DC"
                    }}>
                        <a href="https://www.linkedin.com/in/dio-okta-rovelino/" target="_blank" rel="noopener noreferrer" className="text-white text-1xl">Linkedin</a>
                    </div>

                    
                </div>
                <div className="flex justify-center mt-2">
                    <h1 className="text-white mt-8 text-4xl">Tech Stack 💻</h1>
                </div>
                <div className="flex justify-center">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center mt-10">
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">React</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">Next.js</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">Flutter</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">ExpressJS</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">Google Cloud</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">Golang</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">Laravel</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">gRPC</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-white mt-8 text-4xl">Experience 🔥</h1>
                </div>
                <div className="flex justify-center mb-10">
                    <div className="flex flex-wrap justify-center mt-10">
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">3 Years of working</h1>
                        </div>
                        <div className="bg-white rounded-full px-6 py-2 m-2">
                            <h1 className="text-black text-1xl">2 Years freelance</h1>
                        </div>
                    </div>
                </div>
                

                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>
        </>
    )
}