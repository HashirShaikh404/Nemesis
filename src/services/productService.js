const BASE_URL = 'https://dummyjson.com';

/**
 * Fetch all products (optional limit & skip pagination)
 */
export async function getAllProducts({ limit = 30, skip = 0 } = {}) {
  const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  const data = await response.json();
  return data.products;
}

/**
 * Fetch a single product by ID
 */
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product #${id}: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch list of product categories
 */
export async function getCategories() {
  const response = await fetch(`${BASE_URL}/products/category-list`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch products within a specific category
 */
export async function getProductsByCategory(category, { limit = 30, skip = 0 } = {}) {
  const response = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch category products: ${response.statusText}`);
  }
  const data = await response.json();
  return data.products;
}

/**
 * Search products by query keyword
 */
export async function searchProducts(query) {
  const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Failed to search products: ${response.statusText}`);
  }
  const data = await response.json();
  return data.products;
}
