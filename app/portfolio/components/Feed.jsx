import Panel from "@/app/components/Panel";
import CaseCard from "./CaseCard";
import { caseList } from "../data/caseList";

const Feed = () => {
    return (
        <Panel>
            <div className="w-full flex flex-col justify-items-center gap-y-8">
                {
                    caseList && caseList.length > 0 &&
                    caseList.map((element, index) => {
                        return <CaseCard
                            key={index}
                            index={index}
                            title={element.title}
                            summary={element.summary}
                            description={element.description}
                            link={element.link}
                            linkLabel={element.linkLabel}
                            technologies={element.technologies}
                            images={element.images}
                        />
                    })
                }
            </div>

        </Panel>
    )
}

export default Feed;