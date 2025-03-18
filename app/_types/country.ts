export type Country = {
    name:string;
    flag:string;
}
export type SelectCountryProps = {
    defaultCountry: string;
    name: string;
    id: string;
    className?: string;
  }