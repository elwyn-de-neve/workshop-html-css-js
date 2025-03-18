import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import placeholderImage from '../../../assets/images/placeholder.svg';
import styles from './CategoriesShowcase.module.css';

const categories = [
    {
        id: 1,
        name: "Women's Fashion",
        image: placeholderImage,
        itemCount: 1250,
        link: "/category/women"
    },
    {
        id: 2,
        name: "Men's Collection",
        image: placeholderImage,
        itemCount: 850,
        link: "/category/men"
    },
    {
        id: 3,
        name: "Accessories",
        image: placeholderImage,
        itemCount: 520,
        link: "/category/accessories"
    },
    {
        id: 4,
        name: "Footwear",
        image: placeholderImage,
        itemCount: 320,
        link: "/category/footwear"
    }
];

const CategoriesShowcase = () => {
    return (
        <section className={styles.categories}>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Shop by Category</h2>
                        <p className={styles.description}>Explore our wide range of carefully curated categories</p>
                    </div>
                    <Link to="/categories" className={styles['view-all']}>
                        View All Categories
                        <ArrowRight size={20} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {categories.map(category => (
                        <Link key={category.id} to={category.link} className={styles['category-card']}>
                            <div className={styles['image-container']}>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles['category-name']}>{category.name}</h3>
                                <p className={styles['item-count']}>{category.itemCount.toLocaleString()} items</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles['mobile-view-all']}>
                    <Link to="/categories" className={styles['mobile-link']}>
                        View All Categories
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoriesShowcase; 