type Props = {
  title: string;
  amount: string;
  active?: boolean;
};

export default function CategoryCard({ title, amount, active }: Props) {
  return (
    <div className={`rounded-xl p-4 shadow ${active ? "bg-green-100" : "bg-white"}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <span className="text-lg font-bold">${amount}</span>
      </div>
      <button className="text-xs text-blue-600">Adjust</button>
    </div>
  );
}
