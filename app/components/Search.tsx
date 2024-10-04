'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";



export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    }
    return (
        <form className="flex flex-auto justify-center size-9 md:justify-end" onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 w-80 text-xl rounded-xl"
                placeholder="Search"
            />
            <button className="p-2 text-xl rounded-xl bg-purple-500 ml-2 font-bold">
                🚀
            </button>
        </form>
    )
}
