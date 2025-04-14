import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Housing", amount: "101.00", active: true },
  { title: "Food", amount: "101.00" },
  { title: "Transportation", amount: "101.00" },
  { title: "Entertainment", amount: "101.00" },
  { title: "Shopping", amount: "101.00" },
  { title: "Others", amount: "101.00" },
];

export default function ExpenseGrid() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Expenses Goals by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
    </div>
  );
}
