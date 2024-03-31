import { Button } from "./ui/button";

const Test = () => {
  return (
    <>
      <header className="h-[calc(100dvh-84px)] relative bg-primary overflow-hidden">
        <div className="container flex items-center justify-between">
          <div className="mt-80">
            <h2 className="text-white text-center leading-tight">
              ই-কমার্স ব্যবসা এখন <br />
              হাতের মুঠোয়
            </h2>
            <p className="text-gray-50 text-lg mt-3 mb-2">
              একটি লাভজনক অনলাইন ব্যবসা গড়তে আপনার যেটি প্রয়োজন
            </p>
            <Button>View Demo</Button>
          </div>
          <img
            className="max-w-[500px] absolute right-5 bottom-0 z-[1]"
            src="/src/assets/banners/man.png"
            alt="hero man"
          />
          <div className="bg-blue-400/50 p-16 rounded-full z-0 absolute -bottom-40 -right-40">
            <div className="bg-blue-300/50 p-16 rounded-full">
              <div className="bg-lime-400/50 p-16 rounded-full w-[576px] h-[576px] "></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Test;
