import { Cabin} from "../_types/cabin";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "./TextExpander";

export default function CabinComponent({cabin}:{cabin:Cabin}) {
    const {name, maxCapacity, image, description } = cabin;
  return (
    <div className="lg:grid lg:grid-cols-[3fr_4fr] flex flex-col gap-5 lg:gap-20 border border-primary-800 px-5 pt-5 mb-10 md:mb-15">
    <div className="relative w-full md:aspect-video aspect-[6/4] lg:w-auto lg:aspect-auto">
        <Image src={image} fill alt={`Cabin ${name}`} className="object-cover" />
    </div>

    <div>
        <h3 className="text-accent-100 font-black text-3xl md:text-6xl mb-5  bg-primary-950 py-6 pb-1">
            Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10 2xl:text-2xl">
            <TextExpander>
                {description}
            </TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7 ">
            <li className="flex gap-3 items-center">
                <UsersIcon className="h-5 w-5 text-primary-600 2xl:h-7 2xl:w-7" />
                <span className="text-lg 2xl:text-xl">
                    For up to <span className="font-bold">{maxCapacity}</span>{" "}
                    guests
                </span>
            </li>
            <li className="flex gap-3 items-center">
                <MapPinIcon className="h-5 w-5 text-primary-600 2xl:h-7 2xl:w-7" />
                <span className="text-lg 2xl:text-xl">
                    Located in the heart of the{" "}
                    <span className="font-bold">Dolomites</span> (Italy)
                </span>
            </li>
            <li className="flex gap-3 items-center">
                <EyeSlashIcon className="h-5 w-5 text-primary-600 2xl:h-7 2xl:w-7" />
                <span className="text-lg 2xl:text-xl">
                    Privacy <span className="font-bold">100%</span> guaranteed
                </span>
            </li>
        </ul>
    </div>
</div>

  );
}
