import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center -translate-y-4">
      <Spinner/>
    </div>
  );
}
