import Panel from "@/app/components/Panel";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

const Feed = ({ feed, error, isLoading }) => {
    // Reverse sugli items
    const mappedFeedItems = feed && feed.items.slice().map(item => ({
        ...item,
        contentEncodedSnippet: item["content:encodedSnippet"] || "",
    }))

    // Immagini
    const imageArray = [
        "/icons/colors_icon/quiz.png",
        "/icons/colors_icon/wine.png",
        "/icons/colors_icon/loading.png",
        "/icons/colors_icon/responsive.png",
        "/icons/colors_icon/trap.png",
        "/icons/colors_icon/advergame.png"
    ]

    return (
        <Panel>
            {isLoading && <div class="loader self-center"></div>}
            <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-y-8">
                {
                    mappedFeedItems && mappedFeedItems.length > 0 &&
                    mappedFeedItems.map((element, index) => {
                        return <BlogCard
                            key={index}
                            index={index}
                            creator={element.creator}
                            title={element.title}
                            link={element.link}
                            pubDate={element.pubDate}
                            contentEncodedSnippet={element["content:encodedSnippet"]}
                            categories={element.categories}
                            image={imageArray[index]}
                        />
                    })
                }
            </div>

        </Panel>
    )
}

export default Feed;