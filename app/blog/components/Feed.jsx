import Panel from "@/app/components/Panel";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

const Feed = ({feed, error, isLoading}) => {
    // Reverse sugli items
    const mappedFeedItems = feed && feed.items.slice().reverse().map(item => ({
        ...item,
        contentEncodedSnippet: item["content:encodedSnippet"] || "",
    }))
    return (
        <Panel>
            {isLoading && <div class="loader self-center"></div>}
            <div className="flex flex-col gap-2">
                {
                mappedFeedItems && mappedFeedItems.length > 0 &&
                mappedFeedItems.map((element, index) => {
                    return <BlogCard
                                key={index}
                                index={index}
                                creator={element.creator}
                                title={element.title}
                                pubDate={element.pubDate}
                                contentEncodedSnippet={element["content:encodedSnippet"]}
                                categories={element.categories}
                            />
                })
            }
            </div>
            
        </Panel>
    )
}

export default Feed;