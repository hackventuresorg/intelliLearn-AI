import { cn } from "@/lib/utils";
import { GoalIcon, PlusIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import colors from "tailwindcss/colors";

type AppShellProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const NAV_ITEMS = [
  { label: "Goals", href: "/", Icon: GoalIcon, color: colors.purple["500"] },
  {
    label: "new goal",
    href: "/new-goal",
    Icon: PlusIcon,
    color: colors.amber["500"],
  },
  {
    label: "profile",
    href: "/profile",
    Icon: UserIcon,
    color: colors.sky["500"],
  },
];

export function AppShell({ className, style, children }: AppShellProps) {
  return (
    <div
      className={cn("grid md:grid-cols-12 overflow-hidden h-screen", className)}
      style={style}
    >
      <div className="md:col-span-2 border-r-2 p-4 hidden md:flex flex-col">
        <Link href="/" className="text-2xl font-bold text-primary mb-4">
          IntelliLearn-AI
        </Link>

        <div className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="flex items-center gap-2 uppercase px-4 py-2 rounded-lg font-medium hover:bg-accent text-sm"
            >
              <item.Icon className="size-4" color={item.color} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="overflow-auto md:col-span-7 scrollbar-thin border-r-2">
        {children}
      </div>
      <div className="md:col-span-3 p-4">
        <h2 className="text-center font-bold text-2xl">Division or</h2>
        <p className="text-center mb-4">
          the first 8 regiment the upper division
        </p>
        <div className="flex flex-col w-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <LoaderboardUser key={index} position={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LoaderboardUser({ position }: { position: number }) {
  return (
    <div className="flex justify-between h-16 rounded-lg items-center hover:bg-green-100 cursor-pointer px-4 py-2">
      <div className="flex items-center gap-2">
        <p>{position}</p>
        <div className="size-12 bg-red-400 rounded-full" />
        <p>Shielf Infire</p>
      </div>
      <p>200xp</p>
    </div>
  );
}
