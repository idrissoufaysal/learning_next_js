import Link from 'next/link'
import React from 'react'

export default function Product() {
  return (
    <div>
        <h1>
        tous les produit

        </h1>

        <ul>
            
            <li> <Link href="product/1">produit 1</Link> </li>
            <li> <Link href="product/2">produit 2</Link> </li>
            <li> <Link href="product/3">produit 3</Link> </li>

        </ul>
    </div>
  )
}
