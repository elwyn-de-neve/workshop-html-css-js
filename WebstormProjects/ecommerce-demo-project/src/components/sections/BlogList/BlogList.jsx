import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search, Tag } from 'lucide-react';
import styles from './BlogList.module.css';

const BlogList = () => {
    // In a real app, this data would come from an API or CMS
    const blogPosts = [
        {
            id: 1,
            title: 'Top 10 Summer Fashion Trends for 2023',
            excerpt: 'Discover the hottest fashion trends that will dominate this summer season and how to incorporate them into your wardrobe.',
            image: '/images/blog/summer-fashion.jpg',
            date: 'June 15, 2023',
            readTime: '5 min read',
            category: 'Fashion',
            slug: 'summer-fashion-trends-2023'
        },
        {
            id: 2,
            title: 'The Ultimate Guide to Sustainable Shopping',
            excerpt: 'Learn how to make more environmentally friendly purchasing decisions and support brands that prioritize sustainability.',
            image: '/images/blog/sustainable-shopping.jpg',
            date: 'May 28, 2023',
            readTime: '8 min read',
            category: 'Sustainability',
            slug: 'ultimate-guide-sustainable-shopping'
        },
        {
            id: 3,
            title: 'How to Choose the Perfect Home Office Desk',
            excerpt: 'Tips and considerations for selecting the ideal desk for your home office that balances functionality, comfort, and style.',
            image: '/images/blog/home-office-desk.jpg',
            date: 'May 12, 2023',
            readTime: '6 min read',
            category: 'Home Decor',
            slug: 'choose-perfect-home-office-desk'
        },
        {
            id: 4,
            title: 'Essential Kitchen Gadgets for Healthy Cooking',
            excerpt: 'Explore the must-have kitchen tools that make preparing nutritious meals easier, faster, and more enjoyable.',
            image: '/images/blog/kitchen-gadgets.jpg',
            date: 'April 29, 2023',
            readTime: '7 min read',
            category: 'Kitchen',
            slug: 'essential-kitchen-gadgets-healthy-cooking'
        },
        {
            id: 5,
            title: 'Budget-Friendly Home Decoration Ideas',
            excerpt: 'Creative and affordable ways to refresh your living space without breaking the bank.',
            image: '/images/blog/budget-decoration.jpg',
            date: 'April 15, 2023',
            readTime: '6 min read',
            category: 'Home Decor',
            slug: 'budget-friendly-home-decoration-ideas'
        },
        {
            id: 6,
            title: 'The Science of Sleep: Choosing the Right Mattress',
            excerpt: 'Understanding how different mattress types affect your sleep quality and which one might be best for your needs.',
            image: '/images/blog/mattress-guide.jpg',
            date: 'March 30, 2023',
            readTime: '9 min read',
            category: 'Bedroom',
            slug: 'science-of-sleep-choosing-right-mattress'
        }
    ];

    // Sample categories for filter
    const categories = [
        'All',
        'Fashion',
        'Sustainability',
        'Home Decor',
        'Kitchen',
        'Bedroom',
        'Technology'
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter blog posts based on search term and selected category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className={styles.blogList}>
            <div className={styles.controls}>
                <div className={styles.searchBar}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.categoryFilter}>
                    <div className={styles.categoryTags}>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`${styles.categoryTag} ${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {filteredPosts.length === 0 ? (
                <div className={styles.noPosts}>
                    <p>No blog posts found matching your criteria.</p>
                    <button
                        className={styles.resetButton}
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('All');
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            ) : (
                <div className={styles.postsGrid}>
                    {filteredPosts.map(post => (
                        <div key={post.id} className={styles.postCard}>
                            <div className={styles.postImageContainer}>
                                <div className={styles.postImagePlaceholder}>
                                    <span className={styles.placeholderText}>Blog Image</span>
                                </div>
                                <span className={styles.postCategory}>{post.category}</span>
                            </div>

                            <div className={styles.postContent}>
                                <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                                    <h3 className={styles.postTitle}>{post.title}</h3>
                                </Link>

                                <p className={styles.postExcerpt}>{post.excerpt}</p>

                                <div className={styles.postMeta}>
                                    <span className={styles.postDate}>
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                    <span className={styles.postReadTime}>
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <Link to={`/blog/${post.slug}`} className={styles.readMoreLink}>
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogList; 