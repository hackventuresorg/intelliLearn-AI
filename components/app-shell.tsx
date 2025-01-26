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
      <div className="md:col-span-7 overflow-auto scrollbar-thin">
        {children}
      </div>
      <div className="md:col-span-3">Leaderboard</div>
    </div>
  );
}
