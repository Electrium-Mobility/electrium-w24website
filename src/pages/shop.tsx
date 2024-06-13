import React, { useState } from 'react';
import { FaEnvelope, FaDiscord, FaInstagram } from 'react-icons/fa';
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import SquaredButton from '../components/UI Components/SquaredButton';
import BikeDisplay from '/static/img/shop/bike-display.png';
import SkateboardDisplay from '/static/img/shop/skateboard-display.png';
import OneWheelDisplay from '/static/img/shop/one-wheel-display.png';
import FAQ from '../components/About/FAQ';

// Nested component for displaying products
function ProductDisplay({ itemDisplay, name, price }) {
    return (
      <div className="group text-center rounded-lg bg-gray-200 p-16">
          <div className="relative inline-block mx-auto h-32 w-32 overflow-hidden">
            <img src={itemDisplay} />
          </div>
  
        <div className="content">
            <p className="title h5 text-lg font-medium text-emerald-600 mb-1">{name}</p>
            <p className="text-slate-400">{price}</p>
        </div>
      </div> 
    );
  }

// Main component
function Shop() {
    const rentals = [
        {
            name: "Volter Electric Bike",
            price: "CA $10/hr", // fix rate later
            itemDisplay: BikeDisplay,
        },
        {
            name: "VoltSkate Electric Skateboard",
            price: "CA $10/hr", // fix rate later
            itemDisplay: SkateboardDisplay,
        },
        {
            name: "Electric One-Wheel",
            price: "CA $10/hr", // fix rate later
            itemDisplay: OneWheelDisplay,
        },
    ];

    const products = [
        {
            name: "Volter Electric Bike",
            price: "CA $9,999.00", // fix format later
            itemDisplay: BikeDisplay,
        },
        {
            name: "VoltSkate Electric Skateboard",
            price: "CA $9,999.00", // fix format later
            itemDisplay: SkateboardDisplay,
        },
        {
            name: "Electric One-Wheel",
            price: "CA $9,999.00", // fix format later
            itemDisplay: OneWheelDisplay,
        },
    ];
    return (
        <Layout>
            <section className="relative md:py-24 py-16">



                <div className="container">
                    <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                        <h3 className="text-green-600 pt-12 mb-4 md:leading-normal text-4xl leading-normal font-semibold">Shop</h3>

                        <p className="mt-4 text-slate-400 max-w-xl mx-auto">Take a look at our latest products & rentals!</p>
                    </div>

                    {/* PRODUCTS START */}
                    <h1 className="pt-12 mb-4 md:leading-normal text-4xl leading-normal font-semibold">Products</h1>
                    <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[10px]">
                        {products.map((item, index) => (
                            <ProductDisplay itemDisplay={item.itemDisplay} name={item.name} price={item.price} />
                        ))}
                    </div>
                    {/* PRODUCTS END */}

                    {/* RENTALS START */}
                    <h1 className="pt-12 mb-4 md:leading-normal text-4xl leading-normal font-semibold">Rentals</h1>
                    <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[10px]">
                    {rentals.map((item, index) => (
                            <ProductDisplay itemDisplay={item.itemDisplay} name={item.name} price={item.price} />
                        ))}
                    </div>
                    {/* RENTALS END */}

                    {/* FAQ START */}
                    <div className="grid grid-cols-1 pt-24 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>
                        <FAQ />
                    </div>
                    {/* FAQ END */}
                </div>
            </section>
        </Layout>
    );
}
export default Shop;
