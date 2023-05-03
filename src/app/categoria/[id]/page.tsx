import React from 'react';

function Categoria({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <h1>Id: {id}</h1>;
    </>
  );
}

export default Categoria;
