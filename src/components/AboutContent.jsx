import Card from "./Card";

export default function AboutContent() {
  return (
    <>
      <h2 className="underline playfair-display-bold text-center mt-10 text-xl">
        About me
      </h2>

      <section className="p-16 sm:flex sm:flex-col sm:gap-5 lg:mx-10 xl:mx-40 xl:grid xl:grid-cols-[1fr_1fr] xl:gap-10 leading-relaxed text-lg">
        <div className="xl:flex xl:justify-center xl:items-center">
          <div className=" xl:grid xl:grid-cols-2 xl:gap-5 roboto-regular text-2xl">
            <Card hover={true}>
              <h3 className="roboto-bold">1.5+</h3>
              <p className="mt-3">Years of experience</p>
            </Card>
            <Card hover={true}>
              <h3 className="roboto-bold">100+</h3>
              <p className="mt-3">Project&apos;s done</p>
            </Card>
            <Card hover={true}>
              <h3 className="roboto-bold">100+</h3>
              <p className="mt-3">Satisfied Customers</p>
            </Card>
            <Card hover={true}>
              <h3 className="roboto-bold">60+</h3>
              <p className="mt-3">Company</p>
            </Card>
          </div>
        </div>
        <div className="text-justify roboto-regular">
          <p className="text-[#F76C6C] underline roboto-bold">
            Quick Story About me
          </p>
          <p className="mt-5">
            Hello! I’m Muhammad Ali Akbar, a dedicated Fullstack web developer
            based in Jakarta, Indonesia. Over the past 1 years, I&apos;ve had
            the pleasure of working on diverse projects, from web applications
            to mobile development especially in native way, always with the goal
            of delivering meaningful, high-quality solutions. I believe in the
            power of technology and design to make a positive impact, whether
            it’s through solving complex problems or creating seamless user
            experiences.
          </p>
          <p className="mt-5">
            My skill set includes JavaScript, React, Node.js, Kotlin, Golang,
            RDBMS, but I&apos;m always eager to learn and adapt to new
            challenges. When I&apos;m not coding or deigning, I enjoy exploring
            new technologies, hiking, or playing the guitar. If you&apos;re
            looking for a reliable and creative problem-solver to help bring
            your ideas to life, feel free to reach out. I’m always excited to
            collaborate on new and exciting projects!
          </p>
        </div>
      </section>
    </>
  );
}
