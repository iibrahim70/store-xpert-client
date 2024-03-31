const MostBenefits = () => {

  const width = 800; 
const aspectRatio = 560 / 315; // Aspect ratio of original width and height

// Calculate the new height based on the aspect ratio
const height = width / aspectRatio;
  return (
    <section className="lg:mt-28 mt-24 container">
      <div className="lg:p-10 sm:p-7 p-5 rounded-xl flex max-lg:flex-col gap-y-7 justify-between items-center">
       
        <div className=" text-black text-center w-full h-full flex items-center justify-center ">
          <iframe
             width={width}
             height={height}
            src="https://www.youtube.com/embed/QvbQtARquR8?si=PJN8ljbqWhyRVHNn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default MostBenefits;
