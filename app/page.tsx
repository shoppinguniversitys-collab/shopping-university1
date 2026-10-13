
const products = [
  {
    name: "Floral Embroidered Suit",
    category: "WOMEN'S FASHION",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
    tag: "BESTSELLER",
  },
  {
    name: "Classic Everyday Shirt",
    category: "MEN'S FASHION",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=85",
    tag: "NEW",
  },
  {
    name: "Elegant Ethnic Wear",
    category: "WOMEN'S FASHION",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=700&q=85",
    tag: "TRENDING",
  },
  {
    name: "Premium Casual Look",
    category: "MEN'S FASHION",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
    tag: "POPULAR",
  },
];

const categories = [
  { name: "Women's Wear", symbol: "✦" },
  { name: "Men's Wear", symbol: "◇" },
  { name: "New Arrivals", symbol: "✧" },
  { name: "Best Sellers", symbol: "★" },
];

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: (typeof products)[number]) {
    setCart((current) => {
      const existing = current.find((item) => item.name === product.name);

      if (existing) {
        return current.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function buyNow(product: (typeof products)[number]) {
    setCart([{ ...product, quantity: 1 }]);
    document.getElementById("checkout")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main>
      <div className="announcement">
        ✦  PREMIUM STYLE · DELIVERED TO YOUR DOOR  ✦
      </div>

      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">SU</span>
          <span>
            <strong>SHOPPING</strong>
            <small>UNIVERSITY</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#collection">Collection</a>
        </nav>

        <a className="header-cart" href="#collection">
          SHOP NOW ↗
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content su-fade-up">
          <span className="eyebrow">THE NEW STYLE EDITION</span>
          <h1>
            Style That
            <br />
            Speaks <span>Luxury.</span>
          </h1>
          <p>
            Discover timeless fashion, carefully selected
            for those who love to stand apart.
          </p>
          <a className="gold-button su-button" href="#collection">
            EXPLORE COLLECTION ↗
          </a>
          <div className="hero-note">
            <span>✦</span> YOUR STYLE. YOUR STATEMENT.
          </div>
        </div>

        <div className="hero-visual su-fade-up">
          <div className="hero-image-frame su-gold-glow">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=90"
              alt="Fashion collection editorial"
            />
          </div>
          <div className="image-caption">
            <span>CURATED FOR YOU</span>
            <strong>Everyday Elegance</strong>
          </div>
          <div className="floating-star">✳</div>
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FIND YOUR LOOK</span>
            <h2 className="section-title">Shop by Category</h2>
          </div>
          <span className="muted">YOUR NEXT FAVOURITE STARTS HERE</span>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              className="category-card"
              href="#collection"
              key={category.name}
            >
              <span className="category-symbol">{category.symbol}</span>
              <strong>{category.name}</strong>
              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2 className="section-title">
              The Latest <span className="gold">Collection</span>
            </h2>
          </div>
          <span className="muted">STYLE MEETS COMFORT</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card su-product" key={product.name}>
              <a className="product-image" href="#order-info">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.tag}</span>
              </a>
              <div className="product-info">
                <span className="product-category">
                  {product.category}
                </span>
                <h3>{product.name}</h3>
                <div className="product-bottom">
  <strong>₹{product.price.toLocaleString("en-IN")}</strong>
</div>

<div className="product-buttons">
  <button
    type="button"
    className="gold-button su-button"
    onClick={() => addToCart(product)}
  >
    ADD TO CART
  </button>

  <button
    type="button"
    className="product-action"
    onClick={() => buyNow(product)}
  >
    BUY NOW ↗
  </button>
          </div>
</div>
</article>
))}
</div>
</section>

  <section className="checkout-section" id="checkout">
  <div className="section-heading">
    <div>
      <span className="eyebrow">CASH ON DELIVERY</span>
      <h2 className="section-title">
        Complete Your <span className="gold">Order</span>
      </h2>
    </div>
  </div>

  <div className="checkout-box">
    <h3>Your Cart</h3>

    {cart.length === 0 ? (
      <p>Your cart is empty. Please add a product first.</p>
    ) : (
      <>
        {cart.map((item) => (
          <div className="checkout-item" key={item.name}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <strong>
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </strong>
          </div>
        ))}

        <div className="checkout-total">
          <strong>Total (COD)</strong>
          <strong>
            ₹
            {cart
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toLocaleString("en-IN")}
          </strong>
        </div>

        <form
          className="checkout-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Checkout form ready. Order saving will be connected next.");
          }}
        >
          <label>
            Full Name
            <input name="name" required placeholder="Enter your full name" />
          </label>

          <label>
            Mobile Number
            <input
              name="phone"
              type="tel"
              pattern="[6-9][0-9]{9}"
              required
              placeholder="10-digit mobile number"
            />
          </label>

          <label>
            Full Delivery Address
            <textarea
              name="address"
              required
              placeholder="House number, street, area, city, state"
              rows={3}
            />
          </label>

          <label>
            PIN Code
            <input
              name="pincode"
              inputMode="numeric"
              pattern="[0-9]{6}"
              required
              placeholder="6-digit PIN code"
            />
          </label>

          <button type="submit" className="gold-button su-button">
            CONFIRM COD DETAILS
          </button>
        </form>
      </>
    )}
  </div>
</section>
      <section className="promise-section" id="order-info">
        <span className="eyebrow">A BETTER WAY TO SHOP</span>
        <h2>
          Premium Looks.
          <br />
          <span className="gold">Peace of Mind.</span>
        </h2>
        <p>
          Find your favourites at Shopping University.
          Cash on Delivery is our planned payment option.
        </p>
        <div className="promise-grid">
          <div><span>✦</span><strong>Curated Style</strong><small>Fashion for every mood</small></div>
          <div><span>◇</span><strong>COD Focus</strong><small>Pay at your doorstep</small></div>
          <div><span>♡</span><strong>Made for You</strong><small>A better shopping experience</small></div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-mark">SU</span>
          <span><strong>SHOPPING</strong><small>UNIVERSITY</small></span>
        </a>
        <p>YOUR STYLE. YOUR STATEMENT.</p>
        <span>© {new Date().getFullYear()} Shopping University</span>
      </footer>
    </main>
  );
}
/* Shopping University: subtle 3D product animation */

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .product-card.su-product {
    transition:
      transform 450ms ease,
      box-shadow 450ms ease,
      border-color 450ms ease;
  }

  .product-card.su-product:hover {
    transform: translateY(-4px);
    border-color: var(--gold);
    box-shadow: 0 12px 30px rgba(214, 181, 109, 0.16);
  }

  .product-card.su-product .product-image img {
    transition: transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
    transform-origin: center;
  }

  .product-card.su-product:hover .product-image img {
    transform: perspective(1000px)
      rotateX(1deg)
      rotateY(-1.5deg)
      scale(1.035);
  }
}

@media (hover: none) and (prefers-reduced-motion: no-preference) {
  .product-card.su-product:active {
    border-color: var(--gold);
    box-shadow: 0 8px 22px rgba(214, 181, 109, 0.16);
  }

  .product-card.su-product:active .product-image img {
    transform: scale(1.02);
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-card.su-product,
  .product-card.su-product .product-image img {
    transition: none !important;
    transform: none !important;
  }
      }
