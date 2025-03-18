import axios from "axios";
import Counter from "../_components/Counter";

export default async function Account() {
  const response = await axios.get<{name:string;}[]>('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
     {response.data.map((elem, index) => <p key={`key-${index}`}>{elem.name}</p>)}
     <Counter name={response.data.at(0)?.name || 'no'}/>
    </div>
  );
}
