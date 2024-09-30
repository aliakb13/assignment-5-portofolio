export default function Card({ children, hover }) {
  return (
    <div
      className={
        hover
          ? "border-2 border-solid text-[#F9F9F9] bg-[#2C3E50] hover:text-[#2C3E50] hover:underline hover:bg-[#F9F9F9] rounded-xl p-5"
          : "border-2 border-solid text-[#F9F9F9] bg-[#2C3E50] rounded-xl p-5"
      }
    >
      {children}
    </div>
  );
}
