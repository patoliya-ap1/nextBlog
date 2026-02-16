"use client";

import { useEffect, useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import CategorySelect from "./CategorySelect";
import SearchInput from "./SearchInput";

interface Blog {
  id: string;
  title: string;
  body: string;
  category: string;
  imgUrl: string;
}

export default function BlogsListContainer() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/posts`
      );
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = selectedCategory
        ? blog.category === selectedCategory
        : true;

      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchTerm]);

  return (
    <div className="max-w-6xl mx-auto p-4">

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p className="mt-6 text-gray-500">
          No blogs match your filters.
        </p>
      )}
    </div>
  );
}
