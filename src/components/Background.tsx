import heroImage from "../assets/hero-image.jpg";

function Background() {
  return (
    <div
      className=" w-full h-[620px] bg-center bg-cover margin-0 padding-0"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute sm:left-16 sm:top-28 md:left-28 md:top-32 lg:top-[11.25rem] lg:left-[8.75rem] w-[417px] left-6 top-24">
        <h1 className="font-semibold sm:text-[4rem] text-5xl">
          Peace, nature, dream
        </h1>
        <p className="text-xl sm:text-2xl">Find and book a great experience.</p>
      </div>
    </div>
  );
}

export default Background;
