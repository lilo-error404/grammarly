export default function Header() {
    return (
        <header>
            <nav>
                <ul className="flex flex-row justify-between bg-white p-5">
                    <li className="text-gray-900 cursor-pointer hover:text-gray-700">Why Grammarly</li>
                    <li className="text-gray-900 cursor-pointer hover:text-gray-700">For Work</li>
                    <li className="text-gray-900 cursor-pointer hover:text-gray-700">For Education</li>
                    <li className="text-gray-900 cursor-pointer hover:text-gray-700">Compare Plans</li>
                    <li className="text-gray-900 cursor-pointer hover:text-gray-700">Tools & Guides</li>
                    <div className="flex justify-end">
                    <li className="text-black cursor-pointer font-bold">My Grammarly</li>
                    <li><a href="/free" className="bg-green-800 hover:bg-green-700 p-2 rounded-lg font-bold"> Start a Free Trial</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
};