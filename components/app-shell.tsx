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
  const divs = [];
  for (let i = 0; i < 9; i++) {
    divs.push(
      <div
        className="flex justify-between h-16 rounded-lg p-2 items-center hover:bg-[#D8FFB9] cursor-pointer"
        key={i}
      >
        <div className="flex items-center gap-2">
          <p>{i}</p>
          <div className="h-12 w-12 bg-red-400 rounded-full"></div>
          <p>Shielf Infire</p>
        </div>
        <p>200xp</p>
      </div>
    );
  }
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
      <div className="overflow-auto md:col-span-7 scrollbar-thin">
        {children}
      </div>
      <div className="md:col-span-3">
        {/* leaderboard */}
        <h2 className="text-center font-bold text-2xl text-[#292929]">
          Division Or
        </h2>
        <p className="text-[#292929] text-center">
          the first 8 regiment the upper division
        </p>
        <div className="flex flex-col w-full  p-2 mr-2">{divs}</div>
      </div>
    </div>
  );
}
