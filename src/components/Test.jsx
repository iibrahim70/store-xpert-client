const Test = () => {
  return (
    <header className="relative -z-10">
      <img
        className="lg:max-h-96 h-full w-full object-cover"
        src="/src/assets/banners/hero1.jpg"
        alt=""
      />
      <div className="absolute flex items-center justify-center top-0 left-0 right-0 h-full bg-slate-950 bg-opacity-45">
        <h2 className="text-white text-center leading-tight">
          ই-কমার্স ব্যবসা এখন <br />
          হাতের মুঠোয়
        </h2>
      </div>

      <div className="absolute"></div>
    </header>
  );
};

export default Test;
