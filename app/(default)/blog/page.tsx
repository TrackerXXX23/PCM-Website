import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: "PCM Financial Services - Blog and Resources",
  description: "Insights and resources on financial planning, wealth management, and succession planning for individuals and businesses in Saskatchewan and Alberta.",
};

const blogPosts = [
  {
    title: "5 Essential Farm Succession Planning Tips",
    excerpt: "Ensure a smooth transition for your agricultural business with these key succession planning strategies.",
    date: "2023-05-15",
    slug: "farm-succession-planning-tips"
  },
  {
    title: "Wealth Management Strategies for High Net Worth Individuals",
    excerpt: "Discover effective wealth management techniques tailored for high net worth individuals in Saskatchewan and Alberta.",
    date: "2023-05-01",
    slug: "wealth-management-high-net-worth"
  },
  {
    title: "Navigating Business Financial Planning in Alberta",
    excerpt: "Learn about the unique aspects of financial planning for businesses in Alberta's dynamic economic landscape.",
    date: "2023-04-20",
    slug: "business-financial-planning-alberta"
  }
]

const BlogPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">Blog and Resources</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">Stay informed with the latest insights on financial planning, wealth management, and more.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
