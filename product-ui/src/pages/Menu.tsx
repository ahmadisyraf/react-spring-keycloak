import { useLoaderData } from "react-router-dom";

export default function Menu() {
  const product = useLoaderData() as {
    id: number;
    name: string;
    price: number;
  }[];

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-medium">Menus</h1>

      {product.map((d) => (
        <div className="border border-black" key={d.id}>
          {d.name}
          {d.price}
        </div>
      ))}
    </div>
  );
}
