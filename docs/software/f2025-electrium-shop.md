---
sidebar_position: 8
title: "Electrium Shop"
sidebar_label: "Electrium Shop (F2025)"
---

# Electrium Shop

### Project Info

| **Term:**         | Winter 2026   |
| ----------------- | ----------- |
| **Project Lead:** | Ishan Arya |

### **Project Description**

The **Electrium Mobility Shop** is an online storefront designed to showcase and sell our latest personal electric vehicles and accessories. In Fall 2025, the platform underwent a significant refactor to enhance responsiveness, user experience, and functionality. Key updates include a complete UI/UX overhaul with Dark Mode support, a new product review system, enhanced checkout flows with PayPal integration, and major performance optimizations.

### **Key Features**

#### 🎨 UI/UX Enhancements

- **Dark Mode Support:** Added dark mode variants for all color classes and semantic theme variables.
- **Loading States:** Implemented loading spinners and buttons across the entire app (checkout, profile, dashboard, cart, login, signup).
- **Route Progress Indicator:** Added smooth navigation indicators for better user experience.
- **Improved Visual Hierarchy:** Standardized button styles, hover states, padding, and margins; replaced hardcoded colors with theme variables.

#### 💳 Payment & Checkout

- **PayPal Integration:** Implemented PayPal payment verification and enhanced payment flow.
- **Auto-fill Shipping Form:** User profile data automatically populates shipping information.
- **Shipping Cost Updates:** Fixed shipping cost calculation and display logic.

#### ⭐ Product Reviews System

- **Real Database Reviews:** Replaced mock data with a fully functional Reviews API (GET/POST).
- **Interactive Review Form:** Authenticated users can now rate products and leave comments directly on the product page.
- **Product Page Enhancement:** Layout updated to seamlessly integrate customer reviews.

#### 🛒 Shopping Cart Improvements

- **Cart Validation:** Improved input handling and validation for adding items.
- **Rental Support:** Updated price displays to clearly show rental rates for relevant items.
- **Default Quantity Fix:** Set default cart amount to 1 to prevent user error.

#### 📊 Dashboard Redesign

- **UI Overhaul:** Completely redesigned dashboard with improved stats, readability, and section layout.
- **Profile Page:** Enhanced styling for the user profile management area.

#### 📦 Orders & Rentals

- **Rental History:** Added a dedicated section for tracking rental history within the orders page.
- **Order Management:** Improved the visual tracking and display of past orders.

#### 🚀 Performance & Technical Improvements

- **Client-Side Optimization:** Migrated server components to client components for a smoother UX.
- **Error Handling:** Added robust error handling and retry logic for fetching bike data.
- **Dependency Management:** Resolved install conflicts by optimizing dependency versions (e.g., glob).
- **Code Cleanup:** Removed unused imports and variables to improve maintainability.
