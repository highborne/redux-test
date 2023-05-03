'use client';
import CategoryList from './components/category/CategoryList';
import CategoryListSlider from './components/category/CategoryListSlider';

export default function Home() {
  return (
    <>
      <CategoryListSlider />
      <CategoryList />
    </>
  );
}
