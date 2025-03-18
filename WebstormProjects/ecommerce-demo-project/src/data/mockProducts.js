const mockProducts = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        regularPrice: 249.99,
        stock: 15,
        sku: "HDPH-001-BLK",
        category: "Electronics",
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
        category: "Wearables",
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
        category: "Photography",
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
        category: "Computers",
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
    
    <p>The stunning 14\" 4K display delivers vibrant colors and sharp details, while the latest-generation processor and 16GB of RAM ensure smooth multitasking even with demanding applications.</p>
    
    <h3>Features:</h3>
    <ul>
      <li>Latest gen Intel Core i7 processor</li>
      <li>14\" 4K Ultra HD display</li>
      <li>16GB DDR4 RAM</li>
      <li>512GB NVMe SSD</li>
      <li>Backlit keyboard</li>
      <li>All-day battery life (up to 12 hours)</li>
      <li>Fingerprint reader for secure login</li>
    </ul>`,
        specifications: {
            "Brand": "TechPro",
            "Model": "UltraBook X14",
            "Processor": "Intel Core i7-1165G7",
            "RAM": "16GB DDR4",
            "Storage": "512GB NVMe SSD",
            "Display": "14\" 4K (3840x2160) IPS",
            "Graphics": "Intel Iris Xe Graphics",
            "Battery": "Up to 12 hours",
            "Weight": "1.2kg",
            "Warranty": "2 years"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 401, name: "i5 / 8GB / 256GB", inStock: true },
            { id: 402, name: "i7 / 16GB / 512GB", inStock: true },
            { id: 403, name: "i7 / 32GB / 1TB", inStock: true }
        ],
        reviews: [
            {
                id: 4001,
                author: "Daniel W.",
                title: "Perfect balance of performance and portability",
                rating: 5,
                date: "2023-11-05",
                content: "This laptop is exactly what I was looking for. It's lightweight enough to carry everywhere but powerful enough to handle my video editing work. The display is stunning and battery life is excellent."
            },
            {
                id: 4002,
                author: "Sophia L.",
                title: "Great for productivity",
                rating: 4,
                date: "2023-10-12",
                content: "I've been using this laptop for work for about a month now and it's been great. Fast, reliable, and the keyboard is comfortable for long typing sessions. My only minor complaint is that it can get a bit warm under heavy load."
            }
        ]
    },
    {
        id: 5,
        name: "Smart Home Security Camera",
        price: 79.99,
        regularPrice: 99.99,
        stock: 25,
        sku: "SEC-500-CAM",
        category: "Smart Home",
        isNew: true,
        rating: 4.3,
        reviewCount: 132,
        ratingBreakdown: {
            5: 70,
            4: 40,
            3: 15,
            2: 5,
            1: 2
        },
        shortDescription: "Keep your home secure with this wireless security camera featuring 1080p HD video, night vision, and motion detection.",
        description: `<p>Our Smart Home Security Camera provides peace of mind with crystal clear 1080p HD video and advanced motion detection technology. Get instant alerts on your smartphone whenever motion is detected, so you always know what's happening at home.</p>
    
    <p>With infrared night vision, you can monitor your home even in complete darkness. The camera is easy to install and can be placed indoors or outdoors thanks to its weather-resistant design.</p>
    
    <h3>Features:</h3>
    <ul>
      <li>1080p Full HD video</li>
      <li>130° wide-angle view</li>
      <li>Night vision up to 30ft</li>
      <li>Advanced motion detection</li>
      <li>Two-way audio</li>
      <li>Cloud and local storage options</li>
      <li>Works with Alexa and Google Assistant</li>
    </ul>`,
        specifications: {
            "Brand": "SecureView",
            "Model": "ProWatch 2",
            "Resolution": "1080p Full HD",
            "Field of View": "130°",
            "Night Vision": "Up to 30ft",
            "Audio": "Two-way with noise cancellation",
            "Storage": "Cloud (subscription) or microSD (up to 128GB)",
            "Power": "Wired or rechargeable battery",
            "Weather Resistance": "IP65",
            "Warranty": "1 year"
        },
        images: [
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg",
            "/src/assets/images/placeholder.svg"
        ],
        variants: [
            { id: 501, name: "Indoor Camera", inStock: true },
            { id: 502, name: "Outdoor Camera", inStock: true },
            { id: 503, name: "Doorbell Camera", inStock: false }
        ],
        reviews: [
            {
                id: 5001,
                author: "Karen M.",
                title: "Great peace of mind",
                rating: 5,
                date: "2023-11-15",
                content: "This camera was easy to set up and the video quality is excellent. I love being able to check on my home when I'm away and the motion alerts work perfectly."
            },
            {
                id: 5002,
                author: "Brian P.",
                title: "Good but subscription costs add up",
                rating: 3,
                date: "2023-10-20",
                content: "The camera itself works well, but be aware that to access recorded video you need a subscription. I wish they offered more features without the monthly fee."
            }
        ]
    }
];

export default mockProducts;
