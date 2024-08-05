import Panel from "@/app/components/Panel";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

const Feed = ({feed, error, isLoading}) => {
    return (
        <Panel>
            {isLoading && <div class="loader self-center"></div>}
            <div className="flex flex-col gap-2">
                {
                feed && feed.items.length > 0 &&
                feed.items.map((element, index) => {
                    return <BlogCard
                                key={index}
                                creator={element.creator}
                                title={element.title}
                                link={element.link}
                                pubDate={element.pubDate}
                                contentEncodedSnippet={element["content:encodedSnippet"]}
                                categories={element.categories}
                                alternateColor={index % 2 === 0 ? 'indigo-500' : 'pink-500'}
                            />
                })
            }
            </div>
            
        </Panel>
    )
}

export default Feed;