// Base URL for DummyJSON store API
const BASE_URL = 'https://dummyjson.com';

// Simple cache object to avoid fetching the same URL multiple times
const requestCache = new Map();

// Helper to fetch data and save in cache
async function fetchWithCache(url) {
  if (requestCache.has(url)) {
    return requestCache.get(url);
  }

  const promise = fetch(url).then(async (response) => {
    if (!response.ok) {
      requestCache.delete(url);
      throw new Error(`Request failed: ${response.statusText}`);
    }
    return response.json();
  });

  requestCache.set(url, promise);
  return promise;
}

// 1. Get all products from the API
export async function getAllProducts({ limit = 30, skip = 0 } = {}) {
  const url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
  const data = await fetchWithCache(url);
  return data.products;
}

// 2. Get a single product by its id
export async function getProductById(id) {
  const url = `${BASE_URL}/products/${id}`;
  return fetchWithCache(url);
}

// 3. Get category list for the dropdown filter
export async function getCategories() {
  const url = `${BASE_URL}/products/category-list`;
  return fetchWithCache(url);
}

// 4. Get products that belong to one category
export async function getProductsByCategory(category, { limit = 30, skip = 0 } = {}) {
  const url = `${BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;
  const data = await fetchWithCache(url);
  return data.products;
}

// 5. Search products by keyword
export async function searchProducts(query) {
  const url = `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`;
  const data = await fetchWithCache(url);
  return data.products;
}
