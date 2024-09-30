import { experiences } from "../constants";

export default function ExperienceContent() {
  return (
    <>
      <h2 className="playfair-display-bold text-center mt-10 text-xl">
        <span className="underline">Experience</span>{" "}
        <span className="text-sm text-orange-300">(dummy)</span>
      </h2>
      <section className="p-16 sm:flex sm:flex-col sm:gap-6 lg:mx-10 xl:mx-40 roboto-regular">
        {experiences.map((val) => (
          <div className="leading-relaxed text-justify" key={val.id}>
            <h2 className="playfair-display-bold text-xl underline">
              {val.role}
            </h2>
            <p className="mt-3 roboto-bold text-[#F76C6C]">{val.company}</p>
            <p className="mt-2">{val.date}</p>
            <p className="mt-3 leading-relaxed">{val.description}</p>
            <hr className="border-2 border-black mt-3" />
          </div>
        ))}
      </section>
    </>
  );
}
