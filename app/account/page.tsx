import axios from "axios";
export default async function Account() {
  const response = await axios.get<{name:string;}[]>('https://jsonplaceholder.typicode.com/users')
  return (
    <div className="h-full">
     {response.data.map((elem, index) => <p key={`key-${index}`}>{elem.name}</p>)}
    </div>
  );
}
