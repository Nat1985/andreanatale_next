"use client"

import Panel from "@/app/components/Panel"
import useMainStore from "@/app/zustand/mainStore"
import Image from "next/image";
import Link from "next/link";

const Email = () => {
    const { totalGames, score } = useMainStore();
    return (
        <Panel>
            <div className="flex justify-center items-center">
                {
                    totalGames === score ?
                        (
                            <Link href="/contact"><Image src="/icons/email.png" width={256} height={256} /></Link>
                        ) : (
                            <Image src="/icons/disabled_email.png" width={256} height={256} />
                        )
                }

            </div>
        </Panel>
    )
}

export default Email