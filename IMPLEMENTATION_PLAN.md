# NEMESIS — Implementation Plan

> Step-by-step development roadmap for the NEMESIS Y2K streetwear e-commerce storefront.
> Each phase builds on the previous one. Complete and test each phase before moving to the next.

---

## Overview

NEMESIS is a Y2K streetwear e-commerce storefront built with React and Vite. It fetches products from the Fake Store API, manages a shopping cart with Context API and useReducer, persists cart data in localStorage, and includes a simulated checkout flow.

The project is designed as a learning exercise that demonstrates React fundamentals while producing a professionally designed result.

---

## Technology Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 + Vite |
| Language | JavaScript (ES6+) |
| Routing | React Router DOM |
| State | Context API + useReducer + useState |
| Side effects | useEffect |
| API calls | Fetch API (native) |
| Data source | [Fake Store API](https://fakestoreapi.com/) |
| Persistence | localStorage |
| Icons | lucide-react |
| Notifications | react-hot-toast |
| Animation (advanced) | anime.js (lazy-loaded, selective use only) |
| Styling | CSS Modules + Global CSS + CSS Variables |

---

## Architecture & Folder Structure

```
src/
├── assets/
│   └── images/                  # Static images and placeholders
│
├── components/
│   ├── layout/
│   │   ├── Layout.jsx           # Root layout with Navbar + Outlet + Footer
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx           # Site footer
│   │   └── Footer.module.css
│   ├── common/                  # Shared reusable components (added as needed)
│   ├── products/                # Product-related components (added in Phase 6)
│   └── cart/                    # Cart-related components (added in Phase 10)
│
├── pages/
│   ├── Home.jsx                 # Homepage with hero section
│   ├── Home.module.css
│   ├── Shop.jsx                 # Product listing page
│   ├── ProductDetails.jsx       # Single product page
│   ├── Cart.jsx                 # Shopping cart page
│   ├── Checkout.jsx             # Checkout form page
│   └── NotFound.jsx             # 404 page
│
├── context/
│   └── CartContext.jsx          # Cart context provider
│
├── reducers/
│   └── cartReducer.js           # Cart state reducer
│
├── services/
│   └── productService.js        # API fetch functions
│
├── hooks/                       # Custom hooks (added only when genuinely useful)
│
├── utils/                       # Utility functions (added as needed)
│
├── styles/
│   └── global.css               # Global styles, CSS variables, reset
│
├── App.jsx                      # Route configuration
└── main.jsx                     # Application entry point
```

### Key Architecture Decisions

- **CSS Modules** for component-scoped styles (prevents class name conflicts)
- **Global CSS** for variables, resets, and shared typography
- **Centralized API service** (`productService.js`) — no fetch calls scattered in components
- **Single context** (`CartContext`) for cart state — no multiple overlapping contexts
- **useReducer** for cart because cart has multiple related actions (add, remove, update, clear)
- **localStorage** sync handled inside the context provider

---

## Phase 1: Project Setup ✅

> **Status**: Completed during scaffolding

### What was done

- Created Vite + React project
- Installed dependencies: `react-router-dom`, `lucide-react`, `react-hot-toast`
- Set up folder structure with initial files
- Configured React Router with all planned routes
- Created page placeholder components
- Created layout components (Navbar, Footer, Layout)
- Created CartContext and cartReducer placeholders
- Created productService placeholder
- Set up global CSS with design system variables
- Updated `index.html` with Google Fonts and meta tags
- Created `DESIGN.md` with complete visual specifications

### Files created

- `src/styles/global.css` — CSS variables, reset, base styles
- `src/main.jsx` — Entry point with providers
- `src/App.jsx` — Route configuration
- `src/components/layout/Layout.jsx`
- `src/components/layout/Navbar.jsx` + `.module.css`
- `src/components/layout/Footer.jsx` + `.module.css`
- `src/pages/Home.jsx` + `.module.css`
- `src/pages/Shop.jsx`, `ProductDetails.jsx`, `Cart.jsx`, `Checkout.jsx`, `NotFound.jsx`
- `src/context/CartContext.jsx`
- `src/reducers/cartReducer.js`
- `src/services/productService.js`

### How to verify

```bash
npm run dev
```

The application should start without errors and display the homepage placeholder with NEMESIS branding.

---

## Phase 2: Design System & Global Styling

### What to implement

Build out the full CSS foundation so every component added later inherits the correct design tokens.

### Tasks

1. **Review `global.css`** — Confirm all CSS variables from DESIGN.md are present
2. **Typography setup** — Verify Bebas Neue and Inter load correctly from Google Fonts
3. **Create base utility classes** if needed (e.g., `.container` for max-width + padding)
4. **Test responsive variables** — Confirm `--text-hero`, `--container-padding` change at breakpoints
5. **Verify color contrast** — Check Off White text on Burgundy/Black backgrounds is readable

### Files involved

- `src/styles/global.css`
- `index.html` (Google Fonts already linked)

### React concepts used

- None (pure CSS phase)

### Dependencies

- Phase 1 must be complete

### Testing checklist

- [ ] Bebas Neue renders for headings
- [ ] Inter renders for body text
- [ ] CSS variables change at tablet (768px) and desktop (1024px) breakpoints
- [ ] Colors display correctly
- [ ] No horizontal overflow on any screen size

---

## Phase 3: Homepage Implementation

### What to implement

Build the hero section and editorial layout that establishes the brand identity. This is the most visually important page.

### Tasks

1. **Hero section layout** — CSS Grid with asymmetric columns matching DESIGN.md
2. **Grid lines** — Thin borders creating the editorial grid divisions
3. **Headline** — "NOT MADE TO FIT IN." in Bebas Neue, oversized
4. **CTA button** — "SHOP THE DROP →" Yellow button with ArrowRight icon
5. **Campaign photo placeholder** — Styled container for future photography
6. **Editorial labels** — Small uppercase labels: "RAW", "LIMITED DROP", "ICON"
7. **Brand name in grid** — "NEMESIS" positioned in a grid cell
8. **Subtext** — "streetwear for a new generation"
9. **Hero entrance animation** — Cinematic staggered reveal using anime.js (lazy-loaded): background fade → image zoom-settle → headline words stagger in → CTA slides up → editorial labels fade in → grid lines appear. Full sequence ~2–2.5s. Respect `prefers-reduced-motion`.
10. **Editorial grid section** — Below hero, featured content blocks
11. **Responsive hero** — Mobile stacked layout, tablet two-column

### Files involved

- `src/pages/Home.jsx` (main implementation)
- `src/pages/Home.module.css` (hero and editorial styles)

### New components to create

- None at this stage — hero is page-specific, not reusable

### React concepts used

- **JSX** — Structuring the editorial layout
- **CSS Modules** — Scoped styling with `styles.heroSection`, etc.
- **React Router `Link`** — CTA button links to `/shop`
- **useEffect** — Trigger hero entrance animation on mount
- **useRef** — Reference DOM elements for anime.js targets
- **Dynamic import** — Lazy-load anime.js only on the homepage

### Dependencies

- Phase 2 must be complete (CSS variables and fonts ready)

### Testing checklist

- [x] Hero section fills the viewport height
- [x] Headline displays in Bebas Neue at the correct size
- [x] CTA button is Signal Yellow with correct hover state
- [x] Grid lines are visible but subtle
- [x] Editorial labels are small, uppercase, and correctly positioned
- [x] Hero entrance animation reveals elements in orchestrated timeline (anime.js)
- [x] Editorial grid section below hero with ticker and featured content blocks
- [x] Responsive layout for mobile (<768px) and tablet (768px-1023px)
- [ ] Mobile layout stacks correctly (single column)
- [ ] Tablet layout uses simplified two-column
- [ ] No horizontal overflow on any breakpoint
- [ ] Hero entrance animation plays smoothly on first load (~2–2.5s sequence)
- [ ] Animation respects prefers-reduced-motion (skips if enabled)
- [ ] Looks like the visual reference, adapted for NEMESIS

---

## Phase 4: API Integration

### What to implement

Create the centralized API service with all fetch functions, proper error handling, and loading states.

### Tasks

1. **Implement `getAllProducts()`** — Fetches all products from `/products`
2. **Implement `getProductById(id)`** — Fetches single product from `/products/{id}`
3. **Implement `getCategories()`** — Fetches categories from `/products/categories`
4. **Implement `getProductsByCategory(category)`** — Fetches from `/products/category/{category}`
5. **Error handling** — Check `response.ok`, throw descriptive errors
6. **Test each endpoint** — Console log results temporarily to verify

### Files involved

- `src/services/productService.js` (all API logic here)

### React concepts used

- None directly (this is a plain JavaScript module)
- Will be consumed by components using `useEffect` + `useState` in later phases

### Implementation pattern

```javascript
// Each function follows this pattern:
async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
```

### Dependencies

- Phase 1 must be complete
- No dependency on Phases 2–3 (API is independent of styling)

### Testing checklist

- [ ] `getAllProducts()` returns an array of 20 products
- [ ] `getProductById(1)` returns a single product object
- [ ] `getCategories()` returns an array of category strings
- [ ] `getProductsByCategory('electronics')` returns filtered products
- [ ] Invalid IDs throw an error (e.g., `getProductById(999)`)
- [ ] Network errors are caught and thrown with clear messages

---

## Phase 5: Product Listing (Shop Page)

### What to implement

Display all products from the API in a responsive grid with proper loading, error, and empty states.

### Tasks

1. **Fetch products** on page load using `useEffect` + `useState`
2. **Create `ProductCard` component** — Image, title, price, links to detail page
3. **Create `ProductGrid` component** — Responsive CSS Grid container
4. **Loading state** — Skeleton pulse placeholders while fetching
5. **Error state** — Error message with retry button
6. **Style the grid** — 4 columns (desktop), 3 (tablet), 2 (mobile) with 1px borders

### Files involved

- `src/pages/Shop.jsx` — Page component with data fetching
- `src/components/products/ProductCard.jsx` + `.module.css` — **NEW**
- `src/components/products/ProductGrid.jsx` + `.module.css` — **NEW**

### React concepts used

- **useState** — `products`, `loading`, `error` state variables
- **useEffect** — Fetch products on component mount
- **Props** — Pass product data from Shop → ProductGrid → ProductCard
- **React Router `Link`** — Each card links to `/product/:id`
- **Conditional rendering** — Show loading, error, or product grid

### Dependencies

- Phase 4 must be complete (API service ready)
- Phase 2 should be complete (design tokens for styling)

### Testing checklist

- [ ] Products load and display in a grid
- [ ] Each product shows image, title, and price
- [ ] Product cards link to `/product/{id}`
- [ ] Loading state shows while fetching
- [ ] Error state displays if API call fails
- [ ] Grid is responsive: 4 → 3 → 2 columns
- [ ] Product images have hover zoom effect
- [ ] No horizontal overflow

---

## Phase 6: Search & Category Filtering

### What to implement

Add search and category filtering to the Shop page so users can find products.

### Tasks

1. **Create `SearchBar` component** — Text input with Search icon
2. **Create `CategoryFilter` component** — Horizontal filter buttons
3. **Fetch categories** from API on mount
4. **Filter products by category** — Fetch category-specific products or filter client-side
5. **Filter products by search** — Client-side text matching on product title
6. **Combine search + category** — Both filters work together
7. **"All" category** — Option to show all products

### Files involved

- `src/pages/Shop.jsx` — Add state for search and category
- `src/components/products/SearchBar.jsx` + `.module.css` — **NEW**
- `src/components/products/CategoryFilter.jsx` + `.module.css` — **NEW**

### React concepts used

- **useState** — `searchQuery`, `selectedCategory` state
- **useEffect** — Re-fetch when category changes
- **Derived state** — Filter displayed products based on search input
- **Event handling** — `onChange` for search, `onClick` for category buttons
- **Props** — Pass filter state and handlers down to components

### Dependencies

- Phase 5 must be complete (product listing working)

### Testing checklist

- [ ] Categories load from API and display as filter buttons
- [ ] Clicking a category shows only products in that category
- [ ] "All" button shows all products
- [ ] Search filters products by title (case-insensitive)
- [ ] Search + category filter work together
- [ ] Active category is visually highlighted (magenta underline)
- [ ] Empty search results show appropriate message
- [ ] Filters work on mobile (horizontal scroll for categories)

---

## Phase 7: Product Details Page

### What to implement

Display a single product's full information with an add-to-cart button.

### Tasks

1. **Get product ID** from URL using `useParams`
2. **Fetch single product** using `getProductById(id)`
3. **Display product info** — Image, title, price, description, category
4. **Quantity selector** — Plus/Minus buttons with a count
5. **Add to Cart button** — Connects to CartContext (Phase 9)
6. **Loading and error states**
7. **Two-column layout** on desktop (image left, info right)

### Files involved

- `src/pages/ProductDetails.jsx` — Main page implementation
- `src/pages/ProductDetails.module.css` — **NEW**

### React concepts used

- **useParams** (React Router) — Extract `:id` from URL
- **useState** — `product`, `loading`, `error`, `quantity`
- **useEffect** — Fetch product when `id` changes
- **Event handling** — Quantity increment/decrement
- **useContext** — Access `addToCart` from CartContext (Phase 9)

### Dependencies

- Phase 4 must be complete (API service)
- Phase 9 must be complete for the add-to-cart functionality to work
- **Recommendation**: Build the layout and data fetching now, connect cart later

### Testing checklist

- [ ] Navigating to `/product/1` loads and displays product #1
- [ ] Product image, title, price, description, and category are shown
- [ ] Quantity can be incremented and decremented
- [ ] Quantity does not go below 1
- [ ] Layout is two-column on desktop, stacked on mobile
- [ ] Loading state displays while fetching
- [ ] Invalid product ID shows error state
- [ ] Back navigation works (browser back button)

---

## Phase 8: Shopping Cart — Context & Reducer

### What to implement

Set up the global cart state using Context API and useReducer. This is the core state management for the entire cart system.

### Tasks

1. **Define action types** in `cartReducer.js`:
   - `ADD_TO_CART` — Add a product (or increment if already in cart)
   - `REMOVE_FROM_CART` — Remove a product entirely
   - `UPDATE_QUANTITY` — Change quantity of a specific item
   - `CLEAR_CART` — Empty the entire cart
2. **Implement the reducer function** — Handle each action type
3. **Create CartContext provider** — Wrap with `useReducer`
4. **Expose helper functions** — `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
5. **Expose computed values** — `cartItems`, `cartCount`, `cartTotal`
6. **Wrap the app** in CartProvider (already done in `main.jsx`)

### Files involved

- `src/reducers/cartReducer.js` — Reducer logic and action types
- `src/context/CartContext.jsx` — Context creation and provider

### React concepts used

- **useReducer** — Complex state with multiple actions
- **useContext** — Consuming cart state in any component
- **Context API** — `createContext` + Provider pattern
- **Derived state** — Compute `cartCount` and `cartTotal` from items array

### Cart item shape

```javascript
{
  id: 1,
  title: "Product Name",
  price: 29.99,
  image: "https://...",
  category: "electronics",
  quantity: 2
}
```

### Dependencies

- Phase 1 must be complete (context placeholder exists)

### Testing checklist

- [ ] `addToCart` adds a new item to the cart
- [ ] Adding the same item again increases its quantity
- [ ] `removeFromCart` removes the item entirely
- [ ] `updateQuantity` changes the quantity
- [ ] `updateQuantity` to 0 removes the item
- [ ] `clearCart` empties the cart
- [ ] `cartCount` returns total number of items
- [ ] `cartTotal` returns correct price sum
- [ ] Cart state is accessible from any component via `useContext`
- [ ] Cart badge in Navbar updates when items are added

---

## Phase 9: Shopping Cart Page

### What to implement

Build the full cart page UI that displays items from the cart context.

### Tasks

1. **Display cart items** from CartContext
2. **Create `CartItem` component** — Product row with image, name, qty, price, remove
3. **Create `CartSummary` component** — Subtotal, total, checkout CTA
4. **Quantity management** — Plus/Minus buttons call `updateQuantity`
5. **Remove items** — Trash icon calls `removeFromCart`
6. **Empty cart state** — "YOUR BAG IS EMPTY" with shop link
7. **Toast notifications** — Show toast when removing items

### Files involved

- `src/pages/Cart.jsx` — Cart page
- `src/pages/Cart.module.css` — **NEW**
- `src/components/cart/CartItem.jsx` + `.module.css` — **NEW**
- `src/components/cart/CartSummary.jsx` + `.module.css` — **NEW**

### React concepts used

- **useContext** — Access cart state and actions
- **Conditional rendering** — Empty state vs. cart items
- **Props** — Pass item data and handlers to CartItem
- **Event handling** — Quantity changes, remove actions
- **react-hot-toast** — Notification on remove

### Dependencies

- Phase 8 must be complete (cart context working)

### Testing checklist

- [ ] Cart items from context display correctly
- [ ] Quantities can be changed with +/- buttons
- [ ] Items can be removed with trash icon
- [ ] Toast notification appears when item is removed
- [ ] Cart total and subtotal update correctly
- [ ] Empty cart state shows when no items
- [ ] "SHOP NOW" button in empty state links to /shop
- [ ] "PROCEED TO CHECKOUT" links to /checkout
- [ ] Layout: two-column on desktop, stacked on mobile

---

## Phase 10: localStorage Persistence

### What to implement

Save cart data to localStorage so it persists across page refreshes and browser sessions.

### Tasks

1. **Load initial cart state** from localStorage when CartProvider mounts
2. **Save cart state** to localStorage whenever cart items change
3. **Handle corrupted data** — If localStorage data is invalid, start with empty cart
4. **Test persistence** — Add items, refresh page, verify items remain

### Files involved

- `src/context/CartContext.jsx` — Add localStorage read/write

### React concepts used

- **useEffect** — Sync cart state to localStorage when it changes
- **Lazy initializer** for useReducer — Load initial state from localStorage
- **Error handling** — try/catch for JSON.parse of potentially corrupted data

### Implementation approach

```javascript
// Load from localStorage (with error handling)
function getInitialCart() {
  try {
    const saved = localStorage.getItem('nemesis-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// Inside CartProvider:
const [cartItems, dispatch] = useReducer(cartReducer, [], getInitialCart);

// Save to localStorage when cart changes
useEffect(() => {
  localStorage.setItem('nemesis-cart', JSON.stringify(cartItems));
}, [cartItems]);
```

### Dependencies

- Phase 8 must be complete (cart context and reducer working)

### Testing checklist

- [ ] Adding items and refreshing the page preserves cart contents
- [ ] Removing items and refreshing reflects the removal
- [ ] Clearing the cart and refreshing shows empty cart
- [ ] If localStorage is manually corrupted, app doesn't crash (falls back to empty cart)
- [ ] Cart count in navbar persists across page refreshes

---

## Phase 11: Checkout Form & Validation

### What to implement

Build the checkout form with validation, order summary, and simulated order placement.

### Tasks

1. **Create checkout form** — Name, email, phone, address, city fields
2. **Form validation** — Required fields, email format, phone format
3. **Validation feedback** — Error messages below invalid fields
4. **Order summary sidebar** — Display cart items and totals
5. **Submit handling** — Validate all fields, simulate order
6. **Order confirmation** — Success state with order details
7. **Clear cart** after successful order
8. **Redirect protection** — If cart is empty, redirect to shop

### Files involved

- `src/pages/Checkout.jsx` — Form and order logic
- `src/pages/Checkout.module.css` — **NEW**

### React concepts used

- **useState** — Form field values, errors object, submission state
- **useContext** — Access cart items, total, and `clearCart`
- **Event handling** — `onChange` for inputs, `onSubmit` for form
- **Form validation** — Custom validation function (no library needed)
- **Conditional rendering** — Form vs. confirmation state
- **useNavigate** (React Router) — Redirect if cart is empty

### Validation rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Full Name | Required, min 2 chars | "Please enter your full name" |
| Email | Required, valid format | "Please enter a valid email address" |
| Phone | Required, min 10 digits | "Please enter a valid phone number" |
| Address | Required, min 5 chars | "Please enter your shipping address" |
| City | Required, min 2 chars | "Please enter your city" |

### Dependencies

- Phase 8 must be complete (cart context for order summary and clearing)
- Phase 9 should be complete (cart page works, can proceed to checkout)

### Testing checklist

- [ ] All form fields render correctly
- [ ] Submitting empty form shows all validation errors
- [ ] Each validation rule works correctly
- [ ] Error messages appear below the relevant field
- [ ] Errors clear when the field is corrected
- [ ] Valid submission shows order confirmation
- [ ] Cart is cleared after successful order
- [ ] Order summary shows correct items and totals
- [ ] Toast notification on successful order
- [ ] Empty cart redirects to shop page
- [ ] Form is fully functional on mobile

---

## Phase 12: Responsive Design Pass

### What to implement

Review every page and component across all breakpoints and fix any responsive issues.

### Tasks

1. **Test each page** at 375px, 768px, 1024px, and 1440px widths
2. **Fix horizontal overflow** — Nothing should cause sideways scrolling
3. **Verify touch targets** — All interactive elements ≥ 44×44px on mobile
4. **Test mobile navigation** — Hamburger menu opens and closes correctly
5. **Test forms on mobile** — Inputs are full-width, keyboard doesn't break layout
6. **Verify product grid** — Correct column count at each breakpoint
7. **Test cart on mobile** — Summary accessible, quantities tappable
8. **Check typography** — Headline sizes reduce appropriately
9. **Verify spacing** — Container padding adjusts at breakpoints

### Files involved

- All `.module.css` files — Add/adjust media queries
- `src/styles/global.css` — Verify responsive variable overrides

### React concepts used

- None (pure CSS responsive pass)

### Dependencies

- All previous phases should be complete

### Testing checklist

- [ ] No horizontal overflow on any page at any screen size
- [ ] Navbar hamburger works on mobile
- [ ] Hero section adapts (stacked on mobile, grid on desktop)
- [ ] Product grid: 2 cols (mobile), 3 cols (tablet), 4 cols (desktop)
- [ ] Product details: stacked (mobile), two-column (desktop)
- [ ] Cart: single column (mobile), two-column (desktop)
- [ ] Checkout form: full-width inputs on mobile
- [ ] Footer: stacked on mobile, columns on desktop
- [ ] All buttons and links are easily tappable on mobile
- [ ] Text remains readable at all sizes

---

## Phase 13: Loading, Error & Empty States

### What to implement

Ensure every data-dependent view handles all three states gracefully.

### Tasks

1. **Review Shop page** — Loading skeleton, error with retry, empty results message
2. **Review Product Details** — Loading skeleton, error state (product not found)
3. **Review Cart** — Empty cart state with shop link
4. **Review Checkout** — Empty cart redirect, submission error handling
5. **Review category filter** — Loading state while categories fetch
6. **Create skeleton components** if not already done — Pulse animation placeholders
7. **Test error recovery** — Retry buttons actually re-fetch

### Files involved

- `src/pages/Shop.jsx`
- `src/pages/ProductDetails.jsx`
- `src/pages/Cart.jsx`
- `src/pages/Checkout.jsx`
- Possibly `src/components/common/Skeleton.jsx` — **NEW** if needed

### React concepts used

- **useState** — `loading`, `error` states
- **Conditional rendering** — Switch between loading/error/success views
- **Error handling** — try/catch in async functions

### Dependencies

- Phases 5–11 should be complete

### Testing checklist

- [ ] Slow network: loading states are visible (throttle in DevTools)
- [ ] API failure: error states display with retry option
- [ ] Retry button re-triggers the fetch
- [ ] Empty product search: "No products found" message
- [ ] Empty cart: styled empty state with shop link
- [ ] Invalid product ID: error state on product details
- [ ] 404 page: navigating to unknown route shows NotFound

---

## Phase 14: Testing & Final Quality Checks

### What to implement

Final review of the entire application before submission.

### Tasks

1. **Full user flow test**: Browse → Search → Filter → View Product → Add to Cart → Checkout → Confirm
2. **Navigation test**: All links work, back button works, 404 page displays
3. **Cart persistence test**: Add items → Refresh → Items remain
4. **Responsive test**: Full flow on mobile, tablet, and desktop
5. **Accessibility check**: Keyboard navigation, focus states, alt text
6. **Console check**: No errors or warnings in browser console
7. **Code quality review**:
   - No unused imports or variables
   - Consistent naming conventions
   - No duplicated code
   - Components have clear responsibilities
   - Comments where helpful
8. **Performance check**: Images load reasonably, no unnecessary re-renders
9. **Cross-browser check**: Test in Chrome and at least one other browser

### Manager Requirements Checklist

| Requirement | Status |
|-------------|--------|
| UI broken into reusable components | |
| Components have clear responsibilities | |
| Organized folder structure | |
| Meaningful naming (PascalCase components, camelCase functions) | |
| useState demonstrated | |
| useEffect demonstrated | |
| useContext demonstrated | |
| useReducer demonstrated | |
| Free API integrated (Fake Store API) | |
| Loading states handled | |
| Error states handled | |
| Successful responses handled | |
| Unsuccessful HTTP responses handled | |
| API logic centralized in service file | |
| Form validation implemented | |
| Validation feedback displayed | |
| Invalid + valid submissions handled | |
| Desktop, tablet, and mobile supported | |
| No horizontal overflow | |
| Navigation works on mobile | |
| Buttons and forms work on mobile | |
| Code is readable and not duplicated | |
| No unnecessary abstractions | |

### Dependencies

- All phases 1–13 must be complete

### Final deliverable

A fully functional, professionally designed, responsive Y2K streetwear e-commerce storefront that demonstrates core React concepts and meets all manager requirements.
