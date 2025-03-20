import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="flex h-full w-full justify-center items-center -translate-y-1/12">
       <Spinner/>
    </div>
  );
}
