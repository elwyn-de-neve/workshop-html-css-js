import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './BlogDetail.module.css';
import BlogPost from '../../components/sections/BlogPost';

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // In a real app, this would be an API call to fetch the post data
        // For now we'll simulate a fetch with setTimeout
        setLoading(true);

        setTimeout(() => {
            // This is just mock data - in a real app, you'd fetch based on the slug
            if (slug) {
                // Simulate successful fetch
                setPost(null); // We'll use the default post in the BlogPost component
                setLoading(false);
            } else {
                // Simulate error if no slug provided
                setError('Blog post not found');
                setLoading(false);
            }
        }, 500);
    }, [slug]);

    const handleGoBack = () => {
        navigate('/blog');
    };

    if (loading) {
        return (
            <div className={styles.blogDetailPage}>
                <div className={styles.container}>
                    <div className={styles.loadingState}>
                        <div className={styles.spinner}></div>
                        <p>Loading blog post...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.blogDetailPage}>
                <div className={styles.container}>
                    <div className={styles.errorState}>
                        <h2>Error</h2>
                        <p>{error}</p>
                        <button
                            className={styles.backButton}
                            onClick={handleGoBack}
                        >
                            <ArrowLeft size={16} />
                            Back to Blog
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.blogDetailPage}>
            <div className={styles.container}>
                <button
                    className={styles.backButton}
                    onClick={handleGoBack}
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </button>

                <BlogPost post={post} />
            </div>
        </div>
    );
};

export default BlogDetail; 