import "../style/font.css";

export default function HomeContent() {
  return (
    <main className="p-16 lg:mx-10 xl:mx-40 grid grid-cols-[3fr_1fr] gap-10">
      <div className="text-justify text-base leading-relaxed">
        <h2 className="playfair-display-bold text-lg text-[#2C3E50]">Hello</h2>
        <h3 className="roboto-bold mt-3">
          I&apos;m{" "}
          <span className="underline text-[#F76C6C]">Muhammad Ali Akbar</span>
        </h3>
        <p className="roboto-regular text-[#2C3E50] mt-5">
          a passionate Web Developer with a knack for turning ideas into reality
          through Web development especially backend but currently i&apos;m
          learning frontend too. I have 1 years of experience working in Web
          development, where I&apos;ve honed my skills in building responsive
          websites, designing user-friendly interfaces. With a keen eye for
          detail and a commitment to delivering exceptional results, I take
          pride in creating innovative solutions that meet client needs. Whether
          I&apos;m working on front-end development and back-end architecture or
          collaborating with teams, my focus is always on ensuring efficiency,
          quality, and a great user experience. Feel free to explore my
          portfolio to see some of my recent projects. Let’s create something
          amazing together!
        </p>
        <div className="mt-10 flex gap-8">
          <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#F9F9F9] bg-[#2C3E50]">
            <i className="fa-brands fa-google me-2"></i>Email me!
          </button>
          <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#F9F9F9] bg-[#2C3E50]">
            <i className="fa-solid fa-download me-2"></i>CV
          </button>
        </div>
      </div>
      <div>right-content</div>
    </main>
  );
}
