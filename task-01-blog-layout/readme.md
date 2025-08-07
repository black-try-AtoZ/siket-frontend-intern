# 📝 Task 01 – Basic Blog Post Layout

## 📌 Task Overview

This task involves designing a **single HTML file** that represents a blog post layout. The goal is to use **semantic HTML tags** to structure the content meaningfully and accessibly.

### 🔧 Requirements

- Blog title
- Publication date
- Author name
- Introduction section
- Main content section (with a list)
- Conclusion section
- At least one image
- A "Read More" link at the end

---

## 💡 Approach & Structure

I used semantic HTML elements such as:

- `<header>` for the blog title and metadata
- `<section>` for introduction, main content, and conclusion
- `<article>` to wrap the entire blog post
- `<figure>` and `<img>` for the image
- `<footer>` for the "Read More" link

This ensures the layout is both **accessible** and **SEO-friendly**.

---

## 🖼️ Preview

Here’s a quick look at the structure:

```html
<article>
  <header>
    <h1>Blog Title</h1>
    <p>Published on: <time>2025-08-07</time> by Author Name</p>
  </header>

  <section>
    <h2>Introduction</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Main Content</h2>
    <ul>
      <li>Point One</li>
      <li>Point Two</li>
      <li>Point Three</li>
    </ul>
  </section>

  <section>
    <h2>Conclusion</h2>
    <p>...</p>
  </section>

  <figure>
    <img src="image.jpg" alt="Descriptive Alt Text">
    <figcaption>Image Caption</figcaption>
  </figure>

  <footer>
    <a href="#">Read More</a>
  </footer>
</article>
