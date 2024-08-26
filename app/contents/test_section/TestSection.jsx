"use client"

import React, { useEffect, useState } from 'react'
import Panel from '@/app/components/Panel'
import Card from '@/app/components/cards/Card'
import CardTitle from '@/app/components/cards/CardTitle'
import CardContent from '@/app/components/cards/CardContent'

import { Reorder } from 'framer-motion'

const TestSection = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5])
    useEffect(() => {
        console.log(items)
    }, [items])
    return (
        <Panel>
            <div className='flex flex-col gap-2'>
                <Reorder.Group values={items} onReorder={setItems}>
                {
                    items.map((item) => (
                        <Reorder.Item value={item} key={item}>
                            <Card>
                                <CardTitle>
                                    Titolo {item}
                                </CardTitle>
                                <CardContent>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum perferendis minus iste ad, dicta alias doloribus inventore numquam eos?
                                </CardContent>
                            </Card>
                        </Reorder.Item>
                    ))
                }
            </Reorder.Group>
        </div>


        </Panel >
    )
}

export default TestSection