import Title from "@/app/components/Title";
import BodyMenu from "@/app/components/BodyMenu"; // Update the path if needed

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <Title />

      <div className="flex justify-center w-full">
        <div className="w-[55%]">
          <BodyMenu />
        </div>
      </div>
    </div>
  );
}
