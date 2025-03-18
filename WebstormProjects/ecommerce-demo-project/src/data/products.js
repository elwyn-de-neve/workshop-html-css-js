export const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        regularPrice: 249.99,
        stock: 15,
        sku: "HDPH-001-BLK",
        categoryId: 1, // Electronics
        isNew: true,
        rating: 4.5,
        reviewCount: 128,
        ratingBreakdown: {
            5: 75,
            4: 32,
            3: 15,
            2: 4,
            1: 2
        },
        shortDescription: "Immerse yourself in premium sound quality with these wireless noise-cancelling headphones.",
        description: `<p>Experience music like never before with our Premium Wireless Headphones. These headphones feature advanced noise-cancellation technology that blocks out ambient noise, allowing you to focus on your music or calls without distractions.</p>
    
    <p>With up to 30 hours of battery life, you can enjoy your favorite tunes all day long. The comfortable over-ear design with premium memory foam ear cushions ensures comfort even during extended listening sessions.</p>
    
    <h3>Features:</h3>
    <ul>
      <li>Active Noise Cancellation</li>
      <li>30-hour battery life</li>
      <li>Premium sound quality with deep bass</li>
      <li>Bluetooth 5.0 for stable connection</li>
      <li>Built-in microphone for calls</li>
      <li>Foldable design for easy storage</li>
    </ul>`,
        specifications: {
            "Brand": "SoundWave",
            "Model": "Pro X500",
            "Color": "Matte Black",
            "Connectivity": "Bluetooth 5.0",
            "Battery Life": "Up to 30 hours",
            "Charging Time": "2 hours",
            "Driver Size": "40mm",
            "Weight": "250g",
            "Warranty": "2 years"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 101, name: "Black", inStock: true },
            { id: 102, name: "White", inStock: true },
            { id: 103, name: "Navy Blue", inStock: false }
        ],
        reviews: [
            {
                id: 1001,
                author: "John D.",
                title: "Excellent sound quality!",
                rating: 5,
                date: "2023-11-15",
                content: "These headphones exceeded my expectations. The sound is crisp and clear, and the noise cancellation works perfectly in noisy environments. Highly recommended!"
            },
            {
                id: 1002,
                author: "Sarah M.",
                title: "Great value",
                rating: 4,
                date: "2023-10-22",
                content: "Very comfortable and the battery life is impressive. The sound quality is good but could use a bit more bass. Overall a great purchase."
            },
            {
                id: 1003,
                author: "Michael P.",
                title: "Perfect for travel",
                rating: 5,
                date: "2023-09-30",
                content: "I use these headphones primarily for travel and they are perfect. The noise cancellation helps a lot on planes and the foldable design makes them easy to pack."
            }
        ]
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 149.00,
        regularPrice: 149.00,
        stock: 8,
        sku: "SFW-200-SLV",
        categoryId: 2, // Wearables
        isNew: true,
        rating: 4.2,
        reviewCount: 95,
        ratingBreakdown: {
            5: 45,
            4: 30,
            3: 15,
            2: 3,
            1: 2
        },
        shortDescription: "Track your fitness goals with this water-resistant smart watch featuring heart rate monitoring and sleep tracking.",
        description: `<p>Our Smart Fitness Watch is your perfect companion for a healthier lifestyle. With advanced sensors to track your heart rate, steps, calories, and sleep patterns, you'll have all the data you need to optimize your fitness routine.</p>
    
    <p>The watch features a high-resolution color touchscreen that's easy to read even in bright sunlight. With water resistance up to 50 meters, you can wear it while swimming or in the shower without worry.</p>
    
    <h3>Features:</h3>
    <ul>
      <li>24/7 heart rate monitoring</li>
      <li>Step counter and distance tracking</li>
      <li>Sleep quality analysis</li>
      <li>Water-resistant up to 50m</li>
      <li>Smartphone notifications</li>
      <li>Up to 7 days battery life</li>
    </ul>`,
        specifications: {
            "Brand": "FitTech",
            "Model": "Pulse Pro",
            "Color": "Silver",
            "Display": "1.3\" AMOLED",
            "Water Resistance": "50m (5 ATM)",
            "Battery Life": "Up to 7 days",
            "Sensors": "Heart rate, Accelerometer, Gyroscope",
            "Compatibility": "iOS 11+, Android 7.0+",
            "Warranty": "1 year"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 201, name: "Silver", inStock: true },
            { id: 202, name: "Black", inStock: true },
            { id: 203, name: "Rose Gold", inStock: true }
        ],
        reviews: [
            {
                id: 2001,
                author: "Emma L.",
                title: "Perfect for my workouts",
                rating: 5,
                date: "2023-11-10",
                content: "This watch has been a game-changer for my fitness routine. The heart rate monitoring is accurate and the battery lasts for days. I love that I can wear it swimming too!"
            },
            {
                id: 2002,
                author: "James K.",
                title: "Good but app needs improvement",
                rating: 3,
                date: "2023-10-05",
                content: "The watch itself is great, but the companion app could use some improvement. It sometimes loses connection and the interface isn't very intuitive."
            }
        ]
    },
    {
        id: 3,
        name: "Professional DSLR Camera",
        price: 899.99,
        regularPrice: 1099.99,
        stock: 5,
        sku: "CAM-300-PRO",
        categoryId: 3, // Photography
        isNew: false,
        rating: 4.8,
        reviewCount: 52,
        ratingBreakdown: {
            5: 45,
            4: 5,
            3: 2,
            2: 0,
            1: 0
        },
        shortDescription: "Capture stunning images with this professional DSLR camera featuring a 24.2MP sensor and 4K video recording.",
        description: `<p>Take your photography to the next level with our Professional DSLR Camera. Featuring a high-resolution 24.2MP sensor and advanced image processing, this camera delivers exceptional image quality in any lighting condition.</p>
    
    <p>Whether you're shooting landscapes, portraits, or action shots, the fast autofocus system ensures you never miss a moment. With 4K video recording capabilities, you can also create stunning videos with cinema-like quality.</p>
    
    <h3>Features:</h3>
    <ul>
      <li>24.2MP CMOS sensor</li>
      <li>4K video recording</li>
      <li>45-point all cross-type AF system</li>
      <li>7 fps continuous shooting</li>
      <li>3.0-inch vari-angle touchscreen LCD</li>
      <li>Built-in Wi-Fi and Bluetooth</li>
    </ul>`,
        specifications: {
            "Brand": "OptiView",
            "Model": "Pro 7000",
            "Sensor": "24.2MP CMOS",
            "ISO Range": "100-25600 (expandable to 51200)",
            "Autofocus": "45-point all cross-type AF",
            "Video": "4K UHD at 30p",
            "Storage": "Dual SD card slots",
            "Battery Life": "Approx. 950 shots",
            "Weight": "765g (body only)",
            "Warranty": "2 years"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 301, name: "Body Only", inStock: true },
            { id: 302, name: "With 18-55mm Lens", inStock: true },
            { id: 303, name: "With 18-135mm Lens", inStock: false }
        ],
        reviews: [
            {
                id: 3001,
                author: "Robert T.",
                title: "Professional quality at a reasonable price",
                rating: 5,
                date: "2023-10-20",
                content: "I've been a photographer for over 15 years and this camera has exceeded my expectations. The image quality is fantastic and the autofocus is lightning fast. Great value for the price."
            },
            {
                id: 3002,
                author: "Olivia N.",
                title: "Perfect for my wildlife photography",
                rating: 5,
                date: "2023-09-15",
                content: "The fast continuous shooting and excellent autofocus make this perfect for wildlife photography. Battery life is also impressive - lasted for a full day of shooting."
            }
        ]
    },
    {
        id: 4,
        name: "Ultra Slim Laptop",
        price: 1299.99,
        regularPrice: 1499.99,
        stock: 12,
        sku: "LAP-400-SLM",
        categoryId: 4, // Computers
        isNew: false,
        rating: 4.6,
        reviewCount: 87,
        ratingBreakdown: {
            5: 65,
            4: 15,
            3: 5,
            2: 2,
            1: 0
        },
        shortDescription: "Powerful and portable ultrabook with 14\" 4K display, 16GB RAM, and 512GB SSD for smooth multitasking.",
        description: `<p>Our Ultra Slim Laptop combines powerful performance with elegant design. At just 14mm thin and weighing only 1.2kg, it's perfect for professionals on the go who need reliable performance.</p>
    
    <p>The stunning 14\" 4K display delivers vibrant colors and sharp details, while the latest-generation processor and 16GB of RAM ensure smooth multitasking even with demanding applications.</p>`,
        specifications: {
            "Brand": "TechPro",
            "Model": "UltraBook X14",
            "Processor": "11th Gen Intel Core i7",
            "RAM": "16GB LPDDR4X",
            "Storage": "512GB NVMe SSD",
            "Display": "14\" 4K (3840x2160) IPS",
            "Graphics": "Intel Iris Xe Graphics",
            "Battery": "Up to 12 hours",
            "Weight": "1.2 kg",
            "Warranty": "3 years"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 401, name: "i5/8GB/256GB", inStock: true },
            { id: 402, name: "i7/16GB/512GB", inStock: true },
            { id: 403, name: "i7/32GB/1TB", inStock: false }
        ],
        reviews: [
            {
                id: 4001,
                author: "Thomas R.",
                title: "Perfect for work and travel",
                rating: 5,
                date: "2023-11-05",
                content: "This laptop has been my daily driver for both work and personal use. It's incredibly lightweight but doesn't compromise on performance. The battery easily lasts a full workday."
            },
            {
                id: 4002,
                author: "Lisa W.",
                title: "Great but runs hot sometimes",
                rating: 4,
                date: "2023-10-12",
                content: "Overall a fantastic laptop. The display is stunning and performance is excellent. My only complaint is that it can get quite warm under heavy load. Still, I would recommend it."
            }
        ]
    },
    {
        id: 5,
        name: "Smartphone Stand and Wireless Charger",
        price: 39.99,
        regularPrice: 49.99,
        stock: 25,
        sku: "ACC-500-CHG",
        categoryId: 5, // Accessories
        isNew: true,
        rating: 4.3,
        reviewCount: 42,
        ratingBreakdown: {
            5: 25,
            4: 10,
            3: 5,
            2: 1,
            1: 1
        },
        shortDescription: "Charge your smartphone while keeping it at a convenient viewing angle with this 2-in-1 stand and wireless charger.",
        description: `<p>Our Smartphone Stand and Wireless Charger combines functionality and style. The adjustable stand holds your phone at the perfect angle for video calls, watching videos, or following recipes while the 15W fast wireless charging ensures your device stays powered up.</p>
    
    <p>Compatible with all Qi-enabled devices, this charger works with most phone cases up to 5mm thick. The non-slip base keeps it stable on any surface, and the sleek aluminum construction adds a touch of elegance to your desk or nightstand.</p>`,
        specifications: {
            "Brand": "PowerUp",
            "Model": "StandCharge Pro",
            "Material": "Aluminum alloy + ABS",
            "Charging Power": "15W max",
            "Input": "USB-C, 5V/2A, 9V/2A",
            "Compatibility": "All Qi-enabled devices",
            "Adjustable Angle": "15-75 degrees",
            "Dimensions": "120 x 70 x 110mm",
            "Weight": "220g",
            "Warranty": "1 year"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 501, name: "Black", inStock: true },
            { id: 502, name: "Silver", inStock: true },
            { id: 503, name: "White", inStock: true }
        ],
        reviews: [
            {
                id: 5001,
                author: "Daniel K.",
                title: "Works great with my iPhone",
                rating: 5,
                date: "2023-10-25",
                content: "This charger works flawlessly with my iPhone 14. Charges quickly and the stand is sturdy. Great for watching videos while charging."
            },
            {
                id: 5002,
                author: "Amanda J.",
                title: "Good but could be better",
                rating: 3,
                date: "2023-09-18",
                content: "It charges well but the angle adjustment is a bit stiff and difficult to change. Otherwise, it's a decent product for the price."
            }
        ]
    }
]; 