export interface Producto {
    id: number;
    sku: number;
    nombre_producto: string;
    descripcion: string;
    precio: string;
    categoria: {
      id: number;
      nombre: string;
    };
    estado: {
      id: number;
      nombre: string;
    };
  }
  
export type Productos = Producto[];