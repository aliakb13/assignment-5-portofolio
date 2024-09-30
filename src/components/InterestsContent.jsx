import { interests } from "../constants";
import Card from "./Card";

export default function InterestsContent() {
  return (
    <>
      <h2 className="underline playfair-display-bold text-center mt-10 text-xl">
        Interests
      </h2>
      <section className="p-16 sm:flex sm:flex-col sm:gap-6 lg:mx-10 xl:mx-40 xl:grid xl:grid-cols-2 xl:gap-5 roboto-regular text-xl">
        {interests.map((val) => (
          <Card key={val.id} hover={false}>
            <div className="flex justify-between">
              <h2 className="roboto-bold underline">{val.interest}</h2>
              <i className="fa-solid fa-circle-check text-green-500"></i>
            </div>
            <p className="text-justify mt-5 leading-relaxed text-[#F4F4F4]">
              {val.description}
            </p>
          </Card>
        ))}
      </section>
    </>
  );
}
