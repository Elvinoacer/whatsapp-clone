import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Banana } from "lucide-react";
const fonts = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export const Logo = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-4">
        <div className="bg-white rounded-full p-1 ">
          <Banana className="rounded-xl w-28 h-28 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-50" />
        </div>
        <div className={cn("flex flex-col items-center", fonts.className)}>
          <p className="text-xl font-semibold text-green-700">
            Elvin Messenger
          </p>
        </div>
      </div>
    </>
  );
};
