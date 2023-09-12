'use client'

import React, { useState } from "react";
import {Card, CardBody, CardFooter, Image, Button, CardHeader, Divider} from "@nextui-org/react";
import {HeartIcon} from "@/components/ui/icons/HeartIcon";
import OpenModal from "@/components/ui/OpenModal";

export default function CardPic() {
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const list = [
    {
      title: "Orange",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$5.50",      
    },
    {
      title: "Tangerine",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$12.20",
    },
  ];

  const toggleLike = (index: number) => {
    setLikedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  }

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
      <Card 
        isFooterBlurred
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm" key={index} 
      >        
        <CardHeader className="flex gap-3">        
          <div className="flex flex-col">
            <p className="text-md">Anime</p>
            <p className="text-small text-default-500">SDXL v1.0</p>
          </div>
        </CardHeader>

        <Divider/>

        <CardBody className="mb-11 p-1.5">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover"
              src={item.img}
            />
        </CardBody>



        <CardFooter className="flex items-center justify-between py-0 before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Button
            isIconOnly
            className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-x-"
            radius="full"
            variant="light"
            onPress={() => toggleLike(index)}
          >
          <HeartIcon
            className={likedItems[index] ? "[&>path]:stroke-transparent" : ""}
            fill={likedItems[index] ? "currentColor" : "none"}
          />
          </Button>              

          < OpenModal />

        </CardFooter>
      </Card>
      ))}
    </div>
  );
}
