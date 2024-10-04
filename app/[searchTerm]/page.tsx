
import getWikiResults from "@/lib/wikiSearch";
import Item from "./components/Item";

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main className="bg-purple-200 drop-shadow-sm overflow-auto rounded-lg my-3 mx-auto max-w-lg py-1">
            {results
                ? Object.values(results).map(result => {
                    return <Item key={result.pageid} result={result} />
                })
                : <h2 className="text-xl m-5 center text-purple-950 font-bold">{`( ${searchTerm.replaceAll('%20', ' ')} ) Not Found`}</h2>
            }
        </main>
    )

    return content
}
