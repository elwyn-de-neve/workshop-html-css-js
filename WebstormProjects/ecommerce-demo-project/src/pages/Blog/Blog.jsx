import React from 'react';
import styles from './Blog.module.css';
import BlogList from '../../components/sections/BlogList';

const Blog = () => {
    return (
        <div className={styles.blogPage}>
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Our Blog</h1>
                    <p className={styles.pageDescription}>
                        Stay up to date with the latest trends, tips, and insights from our experts
                    </p>
                </div>

                <div className={styles.blogListSection}>
                    <BlogList />
                </div>
            </div>
        </div>
    );
};

export default Blog; 