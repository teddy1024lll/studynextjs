import React from "react";
import {
  startupCard,
  startupCardBtn,
  startupCardDate,
  startupCardDesc,
  startupCardImg,
} from "../app/tailwindClassNames";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export interface StartupTypeCard {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
  views: string
  description: string;
  category: string;
  image: string;
  author: Author;
}
export interface Author {
  _id: string;
  name: string;
  image: string;
}

export const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className={startupCard + " group"}>
      <div className="flex justify-between">
        <p className={startupCardDate}>{formatDate(post._createdAt)}</p>
        <div className=" flex gap-2">
          <EyeIcon className=" size-6 text-pink-400" />
          <span className=" text-16-medium">{post.views}</span>
        </div>
      </div>
      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author._id}`}></Link>
          <p className=" text-16-medium line-clamp-1">{post.author.name}</p>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author._id}`}>
          <Image
            className="rounded-full"
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <Link href={`/user/${post._id}`}>
        <p className={startupCardDesc}>{post.description}</p>
        <img src={post.image} alt="placeholder" className={startupCardImg} />
      </Link>
      <div className="flex justify-between gap-3 mt-5">
        <Link href={`/?query=${post.category.toLowerCase()}`}>
          <p className=" text-16-medium">{post.category} </p>
        </Link>
        <Button className={startupCardBtn} asChild>
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
