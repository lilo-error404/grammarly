export default function Header() {
    return (
        <header className="font-sans ">
            <nav className="flex flex-row justify-between bg-white border-b-4 border-green-400">
                <a href="/">
                    <div className=" flex flex-row items-center">
                        <img src="logo.png" alt="logo" className="h-15 w-15 ms-10" />
                        <p className="text-black font-bold text-xl">grammarly</p>
                    </div>
                </a>

                <ul className="flex flex-row items-center">
                    <a><li className="text-gray-900 cursor-pointer hover:text-gray-700 me-10">Why Grammarly</li></a>
                    <a><li className="text-gray-900 cursor-pointer hover:text-gray-700 me-10">For Work</li></a>
                    <a><li className="text-gray-900 cursor-pointer hover:text-gray-700 me-10">For Education</li></a>
                    <a><li className="text-gray-900 cursor-pointer hover:text-gray-700 me-10">Compare Plans</li></a>
                    <a><li className="text-gray-900 cursor-pointer hover:text-gray-700 me-10">Tools & Guides</li></a>
                </ul>
                <div className="flex flex-row me-10 items-center">
                    <a href=""><div className="text-black cursor-pointer font-bold content-center me-5">My Grammarly</div></a>
                    <button className="bg-green-800 hover:bg-green-900 font-bold rounded-xl w-40 h-10">Start a Free Trial</button>
                </div>
            </nav>

            <div className="grid grid-cols-3 bg-gray-200 p-5 items-center ">
                <h1 className="font-bold text-2xl text-black ms-10">Business</h1>
                <ul className="flex flex-row justify-around">
                    <li className="text-gray-900">Pricing</li>
                    <li className="text-gray-900">Solutions</li>
                    <li className="text-gray-900">Learn</li>
                    <li className="text-gray-900">Security</li>
                </ul>
            </div>
        </header >
    )
};