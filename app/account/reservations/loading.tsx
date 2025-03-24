import Spinner from "@/app/_components/Spinner";

export default function loading() {
  return (
    <div className="h-full w-full grid items-center justify-center">
        <Spinner/>
    </div>
  );
}
