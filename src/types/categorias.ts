import { StaticImageData } from 'next/image';

export interface ICategoria {
  nome: string;
  thumbnail: StaticImageData;
  header: StaticImageData;
  id: string;
  descricao: string;
}

export interface IItens {
  titulo: string;
  descricao: string;
  // foto: assistenteVirtual
  favorito: boolean;
  preco: number;
  id: string;
  categoria: string;
}
