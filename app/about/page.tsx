import Image from 'next/image';
import { getCabins } from '../_services/data-service';
import Link from 'next/link';
export default async function About() {
  const cabins = await getCabins()
  const numberOfCabins = cabins.length
  return (
    <div className="md:grid md:grid-cols-5 gap-x-24 gap-y-32  text-lg items-center py-5 px-2">
      <div className="col-span-3 mb-5 md:mb-0">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8 2xl:text-xl">
          <p>
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart
            of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.
          </p>
          <p>
            Our {numberOfCabins} luxury cabins provide a cozy base, but the real freedom and
            peace you'll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2 mb-10  relative aspect-video md:aspect-square md:mb-0">
        <Image
          src='/about-1.jpg'
          fill
          className='object-cover'
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="col-span-2 relative aspect-video md:aspect-square md:block hidden">
        <Image src='/about-2.jpg' fill className='object-cover' alt="Family that manages The Wild Oasis" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8 2xl:text-xl">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          <div className="col-span-2 relative aspect-video md:aspect-square block md:hidden">
            <Image src='/about-2.jpg' fill className='object-cover' alt="Family that manages The Wild Oasis" />
          </div>
          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 text-center md:text-left transition-all w-full md:w-auto"
            >
             Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
