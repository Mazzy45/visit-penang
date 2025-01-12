import React, { useState, useEffect } from 'react';
import './ShoppingPage.css';
import DetailShopping from './DetailShopping';

const malls = [
    {
        id: 1,
        name: "Gurney Plaza",
        images: [
            'https://i.ytimg.com/vi/CK1cnl-s1uM/maxresdefault.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/3/32/Gurney_Plaza_at_night.jpg',
            'https://live.staticflickr.com/3834/9076487644_184f0218c2_b.jpg'
        ],
        description: "Located along the famous Gurney Drive, Gurney Plaza is one of Penang’s premier shopping destinations. Opened in 2001, this 9-story mall boasts over 380 stores, ranging from luxury brands to popular international retailers. Visitors can shop at H&M, Marks & Spencer, and Coach, or unwind at the top-floor cinema. The mall is also known for its diverse dining options, with a mix of local delights and international cuisines.",
        hours: "10 AM - 10 PM",
        address: "170, Gurney Dr, Pulau Tikus, 10250 George Town, Penang",
        website: 'https://gurneyplaza.com.my/',
        gallery: [
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/B1-1-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/GF-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/1st-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/2nd-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/3rd-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/4th-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/5th-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/6th-1024x576.jpg",
            "https://gurneyplaza.com.my/wp-content/uploads/sites/2/2024/11/7th-1024x576.jpg"
        ],
    },
    {
        id: 2,
        name: "Queensbay Mall",
        images: [
            "https://insideretail.asia/wp-content/uploads/2022/11/Queensbay-Mall.jpeg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIhEhfZFf9Sk5s_JBbq2e7UthBnC9aP4VZiJzNcS5k5GuoQt_RBe671qHCM5cXkSqGQCKThegQTViJqz-9uN6ykJwuuGinZghHN5wMdOWNtdzruOdiMlAkI_7z0Kf8Ww17CcX5cTMZeABI/s1600/IMG_20150422_195832.jpg",
            "https://www.capitaland.com/en/find-a-property/global-property-listing/retail/queensbay-mall/_jcr_content/root/container/container/entitydetails.coreimg.jpeg/content/dam/capitaland-media-library/retail/Malaysia/Penang/Queensbay%20Mall/Queensbay_Mall_Interior.jpg"
        ],
        description: "As the largest mall in Penang, Queensbay Mall is a vibrant shopping haven located near the scenic waterfront of Bayan Lepas. Opened in 2006, it features over 500 retail outlets, including Zara, Adidas, and Uniqlo. Families can enjoy a variety of entertainment options, from arcades to a spacious cinema. The mall’s waterfront location offers stunning sunset views, making it a perfect place to shop and relax by the sea.",
        hours: "10:30 AM - 10:30 PM",
        address: "100, Persiaran Bayan Indah, 11900 Bayan Lepas, Penang",
        website: 'https://www.queensbaymallmalaysia.com/',
        gallery: [
            "https://www.queensbaymallmalaysia.com/queensbay/assets/img/page/zoneplan-lg.png",
            "https://www.queensbaymallmalaysia.com/queensbay/assets/img/page/zoneplan-gf.png",
            "https://www.queensbaymallmalaysia.com/queensbay/assets/img/page/zoneplan-1f.png",
            "https://www.queensbaymallmalaysia.com/queensbay/assets/img/page/zoneplan-2f.png",
            "https://www.queensbaymallmalaysia.com/queensbay/assets/img/page/zoneplan-3f.png"
        ],
    },
    {
        id: 3,
        name: "Gurney Paragon Mall",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/fc/30/0e/gurney-paragon-shopping.jpg?w=1200&h=-1&s=1",
            "https://media.penang360.my/file/penang360/shopping/jpg-cover-gurney-paragon-mall.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/fc/30/62/gurney-paragon-shopping.jpg?w=900&h=500&s=1"
        ],
        description: "Living up to its name, Gurney Paragon Mall is nestled in Gurney Drive, serving as one of the high-end malls in Penang. Opened in 2013, this mall features over 380 stores, combining luxury shopping, fine dining, and entertainment. Visitors can browse brands like Tory Burch and Michael Kors or watch the latest blockbusters at the cinema. The mall’s open-air design and seafront views make for a unique shopping experience.",
        hours: "10 AM - 10 PM",
        address: "163d, Gurney Dr, 10250 George Town, Penang",
        website: 'https://www.gurneyparagon.com/',
        gallery: [
            "https://www.gurneyparagon.com/images/tenants/Jaya-Grocer23.jpg",
            "https://www.gurneyparagon.com/images/tenants/20240919/michaelkors.jpg",
            "https://www.gurneyparagon.com/images/tenants/Typo23.jpg",
            "https://www.gurneyparagon.com/images/tenants/Cosas202308.jpg",
            "https://www.gurneyparagon.com/images/tenants/Harvey-Norman.jpg",
            "https://www.gurneyparagon.com/images/tenants/20240919/sushizanmai.jpg",
            "https://www.gurneyparagon.com/images/DSC_8930.jpg",
            "https://www.gurneyparagon.com/images/tenants/TGV23.jpg"
        ],
    },
    {
        id: 4,
        name: "1st Avenue Mall",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/1st_Avenue_in_George_Town%2C_Penang_2023.jpg/1200px-1st_Avenue_in_George_Town%2C_Penang_2023.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9c/e2/ca/photo1jpg.jpg?w=1400&h=800&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ed/8b/81/a-stylish-city-mall-located.jpg?w=1400&h=800&s=1 "
        ],
        description: "Located in Georgetown, 1st Avenue Mall offers a modern and urban shopping experience. Since its opening in 2010, the mall has attracted visitors with trendy fashion stores, local boutiques, and a rooftop cinema offering panoramic views of the city. With a mix of lifestyle brands and dining spots, it’s a go-to for both locals and tourists seeking entertainment in the heart of the city.",
        hours: "10 AM - 10 PM",
        address: "182, Jalan Magazine, 10300 George Town, Pulau Pinang",
        website: 'https://www.1st-avenuepenang.com.my/',
        gallery: [
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/07/2023-version_LG-Floor-Model_Ai-Cha-scaled.jpg",
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/09/2023-version_G-Floor-Model_Lovisa-scaled.jpg",
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/09/2023-version_1st_Outlet-scaled.jpg",
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/04/2023-version_2ndModel_7-Eleven-scaled.jpg",
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/09/2023-version_3rd_Seoul-Garden-scaled.jpg",
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/09/2023-version_4th-Floor-Model_Empire-Sushi-scaled.jpg",
            "https://www.1st-avenuepenang.com.my/wp-content/uploads/2024/07/2023-vesion_8th-Floor-Model_Red-Box-scaled.jpg"
        ],
    },
    {
        id: 5,
        name: "Sunway Carnival Mall",
        images: [
            "https://www.sunwaycarnival.com/static/Sunway-Carnival-Mall-1019-SP-copy-1684394749386/w768.jpg",
            "https://insideretail.asia/wp-content/uploads/2022/06/Sunway-Malls.jpeg",
            "https://image-tc.galaxy.tf/wijpeg-ey1iwsvs9vfv25u77qgg3kdh0/sunway-carnival-mall-full-hero-banner-2.jpg?width=2000"
        ],
        description: "Sunway Carnival Mall, located in Seberang Perai, is one of the mainland’s most popular retail spots. Opened in 2007, the mall features a mix of local and international stores, alongside family entertainment facilities. The mall’s expansion has introduced more dining options and larger event spaces, making it a lively community hub.",
        hours: "10 AM - 10 PM",
        address: "3068, Jalan Todak Pusat Bandar Seberang Jaya, Seberang Jaya, 13700 Perai, Pulau Pinang",
        website: 'https://www.sunwaycarnival.com/',
        gallery: [
            "https://www.sunwaycarnival.com/static/shops/d3a7c0ec346ea8c3aad63bf683bc2941/w768.jpg",
            "https://www.sunwaycarnival.com/static/shops/9bbd24bf02e3636ab9d49409c136c82f/w768.jpeg",
            "https://www.sunwaycarnival.com/static/shops/b8beea6eab7f1baa72e246cb2f92f1ff/w768.jpeg",
            "https://www.sunwaycarnival.com/static/shops/05b80c282a8377ec51e8352e503ebe5e/w768-crop.jpg",
            "https://www.sunwaycarnival.com/static/shops/595971614d85965d4e9f70cdf6c7350a/w768.jpeg"
        ],
    },
];

const ShoppingMallList = ({ onDetails }) => {
    return (
        <div className="mall-list">
            {malls.map(mall => (
                <div className="mall-card" key={mall.id}>
                    <h2>{mall.id}. {mall.name}</h2>
                    {/* Add ImageSlider for each mall */}
                    <ImageSlider images={mall.images} />
                    <p>{mall.description}</p>
                    <button
                        className="details-btn"
                        onClick={() => onDetails(mall)}
                    >
                        More Details
                    </button>
                </div>
            ))}
        </div>
    );
};

// ImageSlider Component to cycle through images
const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);  // 5000 milliseconds = 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    // Handle next and previous button clicks
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-slider">
            <button className="prev-btn" onClick={handlePrev}>
                &#10094;
            </button>
            <img
                src={images[currentIndex]}
                alt={`Shopping mall ${currentIndex + 1}`}
                className="slider-image"
            />
            <button className="next-btn" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
};


const ShoppingPage = () => {
    const [selectedMall, setSelectedMall] = useState(null);

    console.log('ShoppingMarketsPage rendered');  // Log to track if it's being re-rendered too often

    const handleDetails = (mall) => {
        console.log("Mall selected:", mall);
        setSelectedMall(mall);
    };

    const closeModal = () => {
        setSelectedMall(null);
    };

    return (
        <div>
            <h1>Best Shopping Malls in Penang</h1>
            <p>Explore Penang’s top malls, where shopping dreams come true.</p>
            <ShoppingMallList onDetails={handleDetails} />
            {selectedMall && (
                <DetailShopping mall={selectedMall} onClose={closeModal} />
            )}
        </div>
    );

}

export default ShoppingPage;