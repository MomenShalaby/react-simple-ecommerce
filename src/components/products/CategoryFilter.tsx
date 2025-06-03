"use client";

type Category = {
  slug: string;
  name: string;
  url: string;
};

type CategoryFilterProps = {
  categories: Category[];
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  loading?: boolean;
  error?: string | null;
};

export default function CategoryFilter({
  categories,
  categoryFilter,
  onCategoryChange,
  loading = false,
  error = null,
}: CategoryFilterProps) {
  if (loading) {
    return (
      <div className="w-full px-4 py-2 border border-gray-300 rounded-md">
        Loading categories...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-4 py-2 border border-gray-300 rounded-md text-red-500">
        Error loading categories
      </div>
    );
  }

  return (
    <div className="w-full md:w-48">
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={categoryFilter}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
