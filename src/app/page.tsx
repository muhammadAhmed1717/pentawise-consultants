export default function Home() {
  return (
    <div className="">
      <img 
        src={"Web.png"}
        alt="Website Main Picture"
        className="w-screen h-screen hidden md:block"
      />
      <img 
        src={"Mobile.png"}
        alt="Website Main Picture"
        className="w-screen h-[95vh] block md:hidden"
      />
    </div>
  );
}
