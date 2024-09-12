"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";

const SignedInButton = () => {
  return (
    <SignedIn>
      <UserButton afterSwitchSessionUrl="/" />
    </SignedIn>
  );
};

export default SignedInButton;
