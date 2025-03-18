import React from 'react';
import { Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import styles from './BlogPost.module.css';

const BlogPost = ({ post }) => {
    // In a real app, this would come from an API call based on the post slug
    // This is a mock data structure that would normally be fetched
    const blogPost = post || {
        id: 1,
        title: 'Top 10 Summer Fashion Trends for 2023',
        content: `
            <p>Summer is just around the corner, and with it comes a fresh wave of fashion trends to embrace. From bold colors to sustainable materials, this season promises exciting options for every style preference. Here's our guide to the top 10 summer fashion trends you'll want to add to your wardrobe this year.</p>
            
            <h2>1. Vibrant Dopamine Dressing</h2>
            <p>After years of neutral tones dominating fashion, vibrant colors are making a strong comeback. Think electric blues, vivid pinks, and sunshine yellows that instantly boost your mood. The idea behind "dopamine dressing" is to wear colors that make you feel happy and energized.</p>
            
            <h2>2. Sustainable Materials</h2>
            <p>Eco-conscious fashion continues to gain momentum, with more brands offering pieces made from recycled or sustainable materials. Look for items crafted from organic cotton, Tencel, or innovative fabrics made from recycled plastic bottles.</p>
            
            <h2>3. Oversized Shirts</h2>
            <p>The oversized button-down shirt has evolved from a beach cover-up to a versatile summer staple. Wear it over a swimsuit, pair it with shorts, or belt it as a mini dress for an effortlessly chic look.</p>
            
            <h2>4. Cut-Out Details</h2>
            <p>Strategic cut-outs are everywhere this season, offering a subtle yet striking way to show some skin. From dresses with side cut-outs to tops with keyhole details, this trend allows for personalized levels of exposure.</p>
            
            <h2>5. Platform Sandals</h2>
            <p>The 90s revival continues with platform sandals making a significant impact this summer. These comfortable yet height-adding shoes pair perfectly with everything from flowy dresses to casual jeans.</p>
            
            <h2>6. Crochet Everything</h2>
            <p>Handcrafted crochet pieces bring texture and a bohemian vibe to summer wardrobes. From bags to tops and even dresses, crochet items add an artisanal touch to any outfit.</p>
            
            <h2>7. Wide-Leg Pants</h2>
            <p>Offering both comfort and style, wide-leg pants continue their popularity this summer. Choose lightweight fabrics like linen or cotton for breathability during hot days.</p>
            
            <h2>8. Statement Sunglasses</h2>
            <p>Eyewear goes bold this season with oversized frames, colorful tints, and unique shapes. Sunglasses are no longer just a practical accessory but a defining element of your summer style.</p>
            
            <h2>9. Minimalist Jewelry</h2>
            <p>While clothing gets more colorful and expressive, jewelry takes a more subdued approach. Delicate gold chains, simple pearl accents, and minimalist designs complement rather than compete with bold outfits.</p>
            
            <h2>10. Bucket Hats</h2>
            <p>Providing both style and sun protection, bucket hats remain a summer essential. This season sees them in new patterns, textures, and sustainable materials.</p>
            
            <h2>How to Incorporate These Trends</h2>
            <p>Remember that fashion should be fun and personal. You don't need to adopt every trend – choose those that align with your personal style and make you feel confident. Even incorporating just one or two new trends can refresh your existing wardrobe for the season.</p>
            
            <p>For a sustainable approach, consider investing in one or two quality pieces that represent these trends rather than overhauling your entire wardrobe. Many of these styles, particularly the sustainable options and classic oversized shirts, will likely remain relevant beyond this season.</p>
            
            <p>Which summer fashion trends are you most excited to try? Share your thoughts and styling ideas in the comments below!</p>
        `,
        image: '/images/blog/summer-fashion.jpg',
        date: 'June 15, 2023',
        readTime: '5 min read',
        author: {
            name: 'Emma Rodriguez',
            title: 'Fashion Editor',
            avatar: '/images/team/emma.jpg'
        },
        category: 'Fashion',
        tags: ['Summer', 'Fashion', 'Trends', 'Style Guide']
    };

    // Function to handle social sharing
    const handleShare = (platform) => {
        const url = window.location.href;
        const title = blogPost.title;

        let shareUrl;

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
                return;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <div className={styles.blogPost}>
            <div className={styles.header}>
                <h1 className={styles.title}>{blogPost.title}</h1>

                <div className={styles.meta}>
                    <div className={styles.authorInfo}>
                        <div className={styles.avatarPlaceholder}>
                            {blogPost.author.name.charAt(0)}
                        </div>
                        <div>
                            <span className={styles.authorName}>{blogPost.author.name}</span>
                            <span className={styles.authorTitle}>{blogPost.author.title}</span>
                        </div>
                    </div>

                    <div className={styles.postDetails}>
                        <span className={styles.postDate}>
                            <Calendar size={14} />
                            {blogPost.date}
                        </span>
                        <span className={styles.postReadTime}>
                            <Clock size={14} />
                            {blogPost.readTime}
                        </span>
                        <span className={styles.postCategory}>
                            <Tag size={14} />
                            {blogPost.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.featuredImageContainer}>
                {/* In a real app, this would be an actual image */}
                <div className={styles.featuredImagePlaceholder}>
                    <span className={styles.placeholderText}>Featured Image</span>
                </div>
            </div>

            <div className={styles.content}>
                {/* Using dangerouslySetInnerHTML to render HTML content */}
                {/* In a real app, you'd want to sanitize this HTML first */}
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            <div className={styles.tagsSection}>
                <h3 className={styles.tagTitle}>Tags:</h3>
                <div className={styles.tags}>
                    {blogPost.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className={styles.shareSection}>
                <h3 className={styles.shareTitle}>
                    <Share2 size={16} />
                    Share this article
                </h3>
                <div className={styles.shareButtons}>
                    <button
                        className={`${styles.shareButton} ${styles.facebook}`}
                        onClick={() => handleShare('facebook')}
                        aria-label="Share on Facebook"
                    >
                        <Facebook size={16} />
                    </button>
                    <button
                        className={`${styles.shareButton} ${styles.twitter}`}
                        onClick={() => handleShare('twitter')}
                        aria-label="Share on Twitter"
                    >
                        <Twitter size={16} />
                    </button>
                    <button
                        className={`${styles.shareButton} ${styles.linkedin}`}
                        onClick={() => handleShare('linkedin')}
                        aria-label="Share on LinkedIn"
                    >
                        <Linkedin size={16} />
                    </button>
                    <button
                        className={`${styles.shareButton} ${styles.copy}`}
                        onClick={() => handleShare('copy')}
                        aria-label="Copy link"
                    >
                        <Copy size={16} />
                    </button>
                </div>
            </div>

            {/* Additional components like related posts or comments system could be added here */}
        </div>
    );
};

export default BlogPost; 