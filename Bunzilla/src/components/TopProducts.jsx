import React from 'react'
import Cart from './Product/Cart'

const TopProdects = () => {
  const renderTopCarts = () => Array(4).fill(0).map((_, i) => <Cart key={i} />)

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Top Products</h2>
        <p className="mt-2 text-gray-600 md:text-lg">Hand-picked favorites for you — fresh, tasty, and trending.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderTopCarts()}
      </div>
    </section>
  )
}

export default TopProdects