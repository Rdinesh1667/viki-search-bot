import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
        <nav className="bg-purple-600 p-2 z-50 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/">Wiki Search Bot!</Link>
            </h1>
            <Search />
        </nav>
    )
}