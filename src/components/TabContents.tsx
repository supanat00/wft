'use client'

import {Tabs, Tab } from "@nextui-org/react";
import CardPic from "@/components/ui/cardPic";

export default function TabContents() {
    return(
        <div>
            <Tabs aria-label="Options">
                <Tab key="photos" title="All">
                    <CardPic/>          
                </Tab>
                <Tab key="music" title="Anime">
                    <CardPic/>
                </Tab>
                <Tab key="videos" title="Stable Diffusion">
                    <CardPic/>
                </Tab>
            </Tabs>
        </div>    
    )
}