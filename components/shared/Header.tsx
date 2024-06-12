import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-start  justify-between flex-row">
        <Link href="/" className="w-36">
          <div className="flex flex-col items-center justify-between">
            <Image
              src="assets/Mecon logo.svg"
              alt="logo"
              width={48}
              height={48}
            />
            <p className="ml-2 font-bold p-1">Mecon Limited.</p>
          </div>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems/>
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
            <SignedOut>
                <Button  className="rounded-full" size="lg">
                    <Link href="/sign-in">Login</Link>
                </Button>
            </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
