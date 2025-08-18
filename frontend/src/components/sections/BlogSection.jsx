// src/components/sections/BlogSection.jsx
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogPosts";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our articles on design, development, and digital innovation
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/default-blog.jpg"}
                  alt={post.alt || post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Author Info (optional) */}
                {post.author && (
                  <div className="flex items-center mt-auto mb-4">
                    <img
                      src={post.author.avatar || "/default-avatar.png"}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-2"
                      loading="lazy"
                    />
                    <span className="text-sm text-gray-700">{post.author.name}</span>
                  </div>
                )}

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary font-semibold hover:text-primary-dark flex items-center group mt-auto"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blogs */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary-dark transition"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
