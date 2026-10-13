
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
                  <a
                    className="product-action"
                    href="#order-info"
                    aria-label={`View ${product.name}`}
                  >
                    ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
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
