export default function HomeContent() {
  return (
    <section className="p-16 lg:mx-10 xl:mx-40 grid grid-cols-[3fr_1fr] gap-10">
      <div className="text-justify text-base leading-relaxed text-lg">
        <h2 className="playfair-display-bold text-[#2C3E50]">Hello</h2>
        <h3 className="roboto-bold mt-3">
          I&apos;m{" "}
          <span className="underline text-[#F76C6C]">Muhammad Ali Akbar</span>
        </h3>
        <p className="roboto-regular text-[#2C3E50] mt-5">
          A Fullstack web developer with a passion for crafting innovative and
          user-friendly solutions. With 1 years of experience in web development
          including both frontend and backend, UI/UX design, I enjoy turning
          ideas into reality through clean, efficient, and impactful work. Let’s
          collaborate to build something amazing!
        </p>
        <div className="mt-10 flex gap-8">
          <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#F9F9F9] bg-[#2C3E50] hover:bg-[#F9F9F9] hover:text-[#F76C6C] hover:underline border-[#2C3E50] text-base">
            <i className="fa-brands fa-google me-2"></i>
            <span>Email me!</span>
          </button>
          <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#F9F9F9] bg-[#2C3E50] hover:bg-[#F9F9F9] hover:text-[#F76C6C] hover:underline border-[#2C3E50] text-base">
            <i className="fa-solid fa-download me-2"></i>
            <span>CV</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="rounded-full border-[#2C3E50] border-2"
          src="../src/assets/raden.jpg"
          alt="raden watkins"
        />
      </div>
    </section>
  );
}
