const MostBenefits = () => {
  const width = 800;
  const aspectRatio = 560 / 315; // Aspect ratio of original width and height

  // Calculate the new height based on the aspect ratio
  const height = width / aspectRatio;
  return (
    <section className="lg:p-10 sm:p-7 p-5 rounded-xl flex max-lg:flex-col gap-y-7 justify-between items-center">
      <div className=" text-black text-center w-full h-full flex items-center justify-center ">
        <iframe
          width={width}
          height={height}
          src="https://www.youtube.com/embed/y99YgaQjgx4?si=7IhBe3ond1n-ukF7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </section>
  );
};

export default MostBenefits;
