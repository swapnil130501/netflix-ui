import { AiOutlineInfoCircle } from "react-icons/ai"

export const MainBoard = () => {
    return (
        <div className="relative h-[52vw]">
            <video className="w-full h-[52vw] brightness-50 object-cover" autoPlay muted loop src={"/videos/dark-trailer.mp4"}/>

            <div className="absolute top-[40%] ml-16">
                <p className="text-white text-6xl h-full w-[70%]">
                    Dark
                </p>

                <p className="text-white text-lg w-[50%] mt-5">
                    A missing child sets four families on a frantic hunt for answers as they unearth a 
                    mind-bending mystery that spans three generations.
                </p>

                <div className="mt-5 flex flex-row gap-4">
                    <button className="bg-white text-white bg-opacity-10 rounded py-2 px-4 text-lg font-semibold flex flex-row items-center hover:bg-opacity-30 transition">
                        <AiOutlineInfoCircle className="mr-1"/>
                        More Info
                    </button>

                    <button className="bg-white text-black bg-opacity-10 rounded py-2 px-4 text-lg font-semibold flex flex-row items-center hover:bg-opacity-90 transition">
                        Play Now
                    </button>
                </div>

            </div>
        </div>
    )
}