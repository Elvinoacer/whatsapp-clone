import SignedInButton from "@/components/signed-in-button";
import "./globals.css";

const HomePage = () => {
  return (
    <div className="flex gap-10 m-20">
      <SignedInButton />
      <p>Hello Elvin this is just the home screen</p>
    </div>
  );
};

export default HomePage;
