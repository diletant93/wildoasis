import ProfileForm from "@/app/_components/ProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_services/data-service";
import { Guest } from "@/app/_types/guest";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

export default async function Page() {

  const session = await auth()
  const guestEmail = session?.user.email
  let guest: Guest = { fullName: '', email: '', countryFlag: '', nationality: '' };

  if (guestEmail) {
    guest = await getGuest(guestEmail)
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <ProfileForm
        guest={guest}
        CountrySelector={
          <SelectCountry
            name="nationalityFlagCountry"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={guest.nationality || ''}
          />
        } />

    </div>
  );
}
