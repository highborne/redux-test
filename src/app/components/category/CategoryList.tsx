import React from 'react';
import { useSelector } from 'react-redux';

import { ICategoria } from 'types/categorias';

import CategoryCards from './CategoryCards';

function CategoryList() {
  const categorias = useSelector((state: any) => state.categorias);

  return (
    <div className="grid grid-cols-5 gap-4 p-6 items-between">
      {categorias?.map((categoria: ICategoria) => {
        return (
          <CategoryCards
            key={`card-category-${categoria.id}`}
            category={categoria}
          />
        );
      })}
    </div>
  );
}

export default CategoryList;
