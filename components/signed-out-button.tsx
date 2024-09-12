"use client";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const SignedOutButton = () => {
  return (
    <SignedOut>
      <SignInButton />
    </SignedOut>
  );
};

export default SignedOutButton;
