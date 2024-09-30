import { skills } from "../constants";
import Card from "./Card";

export default function SkillsContent() {
  return (
    <>
      <h2 className="underline playfair-display-bold text-center mt-10 text-xl">
        Skills
      </h2>
      <section className="p-16 sm:flex sm:flex-col sm:gap-6 lg:mx-10 xl:mx-40 roboto-regular text-xl">
        {skills.map((val) => (
          <Card key={val.id} hover={false}>
            <h2 className="roboto-bold underline text-center">{val.skill}</h2>
            <div className="grid grid-cols-3 gap-5 roboto-regular mt-5 text-center mt-5">
              {val.tech.map((technology) => (
                <div key={val.id - technology.name}>
                  <p className="underline">
                    {technology.name}
                    <i className="fa-solid fa-circle-check text-green-500 ms-2"></i>
                  </p>
                  <i className={technology.class_name + " mt-4 text-5xl "}></i>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </>
  );
}
