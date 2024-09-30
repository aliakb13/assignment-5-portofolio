import { awards } from "../constants";

export default function AwardsContent() {
  return (
    <>
      <h2 className="playfair-display-bold text-center mt-10 text-xl">
        <span className="underline">Awards</span>{" "}
        <span className="text-sm text-orange-300">(dummy)</span>
      </h2>
      <section className="p-16 sm:flex sm:flex-col sm:gap-6 lg:mx-10 xl:mx-40 roboto-regular text-lg">
        {awards.map((val) => (
          <div className="leading-relaxed text-justify" key={val.id}>
            <p className="mt-3 roboto-bold text-[#F76C6C] underline">
              {val.receive}
            </p>
            <p className="mt-2">{val.year}</p>
            <p className="mt-3 leading-relaxed">{val.description}</p>
            <hr className="border-2 border-black mt-3" />
          </div>
        ))}
      </section>
    </>
  );
}
