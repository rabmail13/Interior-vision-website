The blog page is a blog listing that displays articles managed through Sanity CMS.
Visual Layout:
A responsive grid showing 3 columns on desktop, stacking to single column on mobile
Each article card has a 4:3 aspect ratio featured image at the top
Below the image: a black category badge, publication date, title, and excerpt
Cards have a hover effect where images scale up slightly and titles change color
How It Works:
On page load, it fetches all blog posts from Sanity using a GROQ query
Posts are displayed in a grid with staggered scroll-reveal animations (using the portfolio animation utilities)
Each card links to the individual article's detail page at /blog/[slug]
Shows loading and error states while data is being fetched
Sanity CMS Integration:
Content editors create blog posts in the Sanity Studio dashboard
Each post has: title, URL slug (auto-generated from title), category (from a predefined list like "Interior Design" or "Design Tips"), excerpt, rich text body content, featured image with alt text, and publish date
Posts can be marked as "featured" for homepage prominence
SEO fields are available for meta titles, descriptions, and keywords
The frontend queries Sanity's API and transforms image references into optimized URLs using Sanity's image builder
Categories are stored as values (like interior-design) and mapped to display labels (like "Interior Design") on the frontend