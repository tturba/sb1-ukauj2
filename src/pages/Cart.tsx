import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '@/components/cart/cart-item';
import { CartSummary } from '@/components/cart/cart-summary';
import type { Product } from '@/types';

// Sample cart data - In a real app, this would come from a cart management system
const initialCartItems = [
  {
    product: {
      id: '1',
      name: 'Royal Corgi Essence',
      description: 'A majestic blend of cherry blossom and vanilla.',
      price: 49.99,
      images: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80'],
      category: 'Premium',
      tags: ['royal', 'luxury', 'floral'],
      rating: 4.8,
      reviews: [],
      stock: 50
    },
    quantity: 2
  },
  {
    product: {
      id: '2',
      name: 'Sakura Dreams',
      description: 'Inspired by Japanese cherry blossoms.',
      price: 39.99,
      images: ['https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80'],
      category: 'Floral',
      tags: ['cherry blossom', 'spring', 'gentle'],
      rating: 4.5,
      reviews: [],
      stock: 35
    },
    quantity: 1
  }
];

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="divide-y">
            {cartItems.map(({ product, quantity }) => (
              <CartItem
                key={product.id}
                product={product}
                quantity={quantity}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          <div>
            <CartSummary
              subtotal={subtotal}
              tax={tax}
              shipping={shipping}
              total={total}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;