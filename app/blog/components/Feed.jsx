import Panel from "@/app/components/Panel";
import { useEffect } from "react";

const Feed = ({feed, error, isLoading}) => {
    useEffect(() => {
        console.log(feed);
        console.log(error);
        console.log(isLoading)
    }, [feed, error, isLoading])
    return (
        <Panel>
            {isLoading && <div class="loader self-center"></div>}
        </Panel>
    )
}

export default Feed;