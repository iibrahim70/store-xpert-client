const MostBenefits = () => {
  return (
    <section className="lg:mt-28 mt-24">
      <div className="flex flex-col items-center justify-center border-orange-500 bg-white border-x-8 rounded-md px-4 py-8">
        <h3 className="leading-normal">
          সর্বনিম্ন মার্কেটিং খরচে{" "}
          <span className="text-primary">সর্বোচ্চ সেল</span> জেনারেট
        </h3>
        <p className="text-lg text-slate-700">
          বিস্তারিত জানতে ভিডিওটি প্লে করুন-
        </p>
      </div>
      <div
        className={` bg-[url('./assets/banners/benefits.jpg')] bg-fixed bg-cover bg-no-repeat `}>
        <div className="backdrop-brightness-50 h-full">
          <div className="container lg:p-20 p-10 text-black text-center h-full flex items-center justify-center ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QvbQtARquR8?si=PJN8ljbqWhyRVHNn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostBenefits;
