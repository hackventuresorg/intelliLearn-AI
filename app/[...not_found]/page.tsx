import { buttonVariants } from "@/components/ui/button";
import { SearchXIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found | InterlliLearn",
};

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-2 flex-col">
      <SearchXIcon className="size-20" />
      <h1 className="text-2xl font-bold">Not found</h1>
      <p>The page you are trying to visit does not exists.</p>
      <Link href="/" className={buttonVariants()}>
        Go to home
      </Link>
    </div>
  );
}
