'use client'
import ProductTable from '@/components/ProductTable';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ProductTable />
    </div>
  )
}
