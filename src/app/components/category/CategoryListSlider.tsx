import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import { Carousel } from 'flowbite-react';
import { ICategoria } from 'types/categorias';

function CategoryList() {
  const categorias = useSelector((state: any) => state.categorias);

  return (
    <div className="h-40 sm:h-72 xl:h-80 2xl:h-88  bg-blue-600">
      <Carousel slideInterval={5000}>
        {categorias.map((categoria: ICategoria) => {
          const {
            id,
            header: { height, src, width },
          } = categoria;
          return (
            <Image
              key={`carousel-category-${id}`}
              src={src}
              width={width}
              height={height}
              alt="..."
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CategoryList;
