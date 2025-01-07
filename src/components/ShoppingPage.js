import React, { useState, useEffect } from 'react';
import './ShoppingPage.css';
import DetailsShopping from './DetailsShopping';

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
        name: "Straits Quay Marina Mall",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/14/e0/7a/caption.jpg?w=1200&h=-1&s=1",
            "https://www.urtrips.com/wp-content/uploads/2023/02/Straits-Quay-Marina-Mall-Penang3.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM8yjDkw8xw9XbSr1H8Y7KINRJFHBZ5shtW-aKoP_7ShlfppCx3bkij2KZMmxwdayIem2Ir1kPLEW4E36_yf1xm583DsGJH5Yq0msYjCBJ3xrIRuIseoj_g1KTHqD7gYd17BozKrqRbFQ/s1600/The+Straits+Quay+11.jpg"
        ],
        description: "Straits Quay Marina Mall is Penang’s first and only seafront retail marina, blending shopping with stunning ocean views. Opened in 2010, the mall is home to specialty stores, boutiques, and waterfront cafes. Visitors can stroll along the marina, enjoy live music at the central plaza, or embark on a sunset cruise. The area is also known for festivals and community events, making it a vibrant destination all year round.",
        hours: "10 AM - 10 PM",
        address: "Jalan Seri Tanjung Pinang 10470 Tanjong Tokong, Penang Malaysia",
        gallery: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/78/1a/41/caption.jpg?w=1100&h=600&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/62/fa/img-20200106-194132-largejpg.jpg?w=700&h=400&s=1"
        ],
    },
    {
        id: 5,
        name: "1st Avenue Mall",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/1st_Avenue_in_George_Town%2C_Penang_2023.jpg/1200px-1st_Avenue_in_George_Town%2C_Penang_2023.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9c/e2/ca/photo1jpg.jpg?w=1400&h=800&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ed/8b/81/a-stylish-city-mall-located.jpg?w=1400&h=800&s=1 "
        ],
        description: "Located in Georgetown, 1st Avenue Mall offers a modern and urban shopping experience. Since its opening in 2010, the mall has attracted visitors with trendy fashion stores, local boutiques, and a rooftop cinema offering panoramic views of the city. With a mix of lifestyle brands and dining spots, it’s a go-to for both locals and tourists seeking entertainment in the heart of the city.",
        hours: "10 AM - 10 PM",
        address: "182, Jalan Magazine, 10300 George Town, Pulau Pinang",
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
        id: 6,
        name: "Prangin Mall",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/4a/fc/5c/prangin-mall.jpg?w=1200&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/65/88/31/travel-photos.jpg?w=1400&h=800&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/85/69/f2/caption.jpg?w=1400&h=800&s=1"
        ],
        description: "Prangin Mall is a long-standing shopping center known for its affordability and variety. Opened in 2001, it’s a hub for electronics, local goods, and fashion finds. Visitors often frequent the mall for its budget-friendly gadgets, clothing, and beauty products. Located near Komtar, it’s a popular stop for those exploring Georgetown and looking for bargains.",
        hours: "10 AM - 10 PM",
        address: "No 33, Jalan Dr Lim Chwee Leong, George Town, 10100 George Town, Pulau Pinang",
        gallery: [
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/0d/ed/05/prangin-mall.jpg",
            "https://media.penang360.my/file/penang360/shopping/jpg-prangin-mall-10.jpg"
        ],
    },
    {
        id: 7,
        name: "Design Village Outlet Mall",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/18/2c/f2/photo1jpg.jpg?w=1800&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/be/27/70/one-of-the-outlets.jpg?w=1800&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/08/82/ab/photo2jpg.jpg?w=1800&h=1000&s=1"
        ],
        description: "As Penang’s largest outlet mall, Design Village Outlet Mall offers incredible discounts on top global brands. Opened in 2016, this open-air mall in Batu Kawan features Nike, Guess, and Kate Spade outlets. It’s a must-visit for fashion enthusiasts and bargain hunters, with savings of up to 70% year-round. Its spacious layout and greenery make for a pleasant and relaxing shopping experience.",
        hours: "11 AM - 10 PM",
        address: "733, Jalan Cassia Barat 2, Bandar Cassia, 14110 Simpang Ampat, Pulau Pinang",
        gallery: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicvFS8UcF0vIwlHGeC3Jb3zTShGz11KHi6H4DACmOle5wf2phQ5kpAuUkQrDFQH8zjDvYDMX6LxIEMqplcaNZCWzL2eAeFe0odyspem_mr4gkG-1XS1HglWEG-eoWOmvP5F-3M77f1hMBT/s640/maps_2-1024x720.jpg"
        ],
    },
    {
        id: 8,
        name: "Sunway Carnival Mall",
        images: [
            "https://www.sunwaycarnival.com/static/Sunway-Carnival-Mall-1019-SP-copy-1684394749386/w768.jpg",
            "https://insideretail.asia/wp-content/uploads/2022/06/Sunway-Malls.jpeg",
            "https://image-tc.galaxy.tf/wijpeg-ey1iwsvs9vfv25u77qgg3kdh0/sunway-carnival-mall-full-hero-banner-2.jpg?width=2000"
        ],
        description: "Sunway Carnival Mall, located in Seberang Perai, is one of the mainland’s most popular retail spots. Opened in 2007, the mall features a mix of local and international stores, alongside family entertainment facilities. The mall’s expansion has introduced more dining options and larger event spaces, making it a lively community hub.",
        hours: "10 AM - 10 PM",
        address: "3068, Jalan Todak Pusat Bandar Seberang Jaya, Seberang Jaya, 13700 Perai, Pulau Pinang",
        gallery: [
            "https://www.sunwaycarnival.com/static/shops/d3a7c0ec346ea8c3aad63bf683bc2941/w768.jpg",
            "https://www.sunwaycarnival.com/static/shops/9bbd24bf02e3636ab9d49409c136c82f/w768.jpeg",
            "https://www.sunwaycarnival.com/static/shops/b8beea6eab7f1baa72e246cb2f92f1ff/w768.jpeg",
            "https://www.sunwaycarnival.com/static/shops/05b80c282a8377ec51e8352e503ebe5e/w768-crop.jpg",
            "https://www.sunwaycarnival.com/static/shops/595971614d85965d4e9f70cdf6c7350a/w768.jpeg"
        ],
    },
    {
        id: 9,
        name: "Sunshine Central Mall",
        images: [
            "https://apicms.thestar.com.my/uploads/images/2023/09/23/2299551.webp",
            "https://img1.penangpropertytalk.com/wp-content/uploads/2017/09/Entrance.jpg",
            "https://lh3.googleusercontent.com/p/AF1QipMHxCwPg-saeMqLQWEXih945puEVwEXt4usEEY=s1360-w1360-h1020"
        ],
        description: "Sunshine Central Mall is an emerging lifestyle and retail hub in Bayan Lepas. As part of the Sunshine Group, it aims to be a one-stop destination for shopping, entertainment, and dining. While the mall is still under development, it promises modern design, family-friendly activities, and a broad range of retail outlets upon completion.",
        hours: "10 AM - 10 PM",
        address: "Sunshine Mall @ Sunshine Central, 8, Jln Thean Tek, Farlim, 11500 Air Itam, Penang",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4Mn3_qmvEAvgJdSCGP360YGToNSIhIL6nrTbhvcVKgA-BPFapPDXRrJglnmgrhCvp38&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoh6r5OqEc7JX1eKVmvTAZEgKTrpswtDmZs-GeM0zHjIbMtdfHEryD16tDXw7aGRf6534&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS1uu8d8AjMKGAsqNPI-wPDvayiA2BM35Cg&s"
        ],
    },
    {
        id: 10,
        name: "Aeon Mall Bukit Mertajam",
        images: [
            "https://mypenang.gov.my/uploads/directory/1097/cover/AEON-BM.jpeg",
            "https://www.lingzie.com/wp-content/uploads/2014/06/P1070161.jpg",
            "https://fastly.4sqi.net/img/general/600x600/22548149_yu_l5YJKy-B6DqDthhXoO_eChGcrZzDajPzHTm6kFKw.jpg"
        ],
        description: "Aeon Mall Bukit Mertajam stands as one of the busiest malls in Seberang Perai, attracting shoppers from across the region. Opened in 2014, it features a wide array of stores, including Aeon’s department store, supermarkets, and specialty shops. The mall regularly hosts seasonal events and offers numerous dining options, making it a popular weekend spot for families and visitors.",
        hours: "10 AM - 10 PM",
        address: "Lot 30908, Jalan Rozhan, Alma, 14000 Bukit Mertajam, Pulau Pinang",
        gallery: [
            "https://cdn.aeonmallmy.com/web-cms/tenant-listings/SjW4e5DIQD3zboarSKWAi7jX2OeUjpLtDblXrcZ2.jpg?token=8lGnSuGfopkY7Gxr8YEZtQ&expires=1736095332",
            "https://cdn.aeonmallmy.com/web-cms/tenant-listings/JFVyLRG0DxATZuN8ZKT9nat52Wfv7q1aqnpCBJQb.jpg?token=swlgvIjegUxlSiYkSEOXJw&expires=1736095273",
            "https://cdn.aeonmallmy.com/web-cms/tenant-listings/Wb398j3IaFkskseKKsJF2BKnz2uJANM32rvrmBMt.jpg?token=HqskipWroPJQoVL57SS-PQ&expires=1736096838"
        ],
    }
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
            <h1>Shopping Markets</h1>
            <ShoppingMallList onDetails={handleDetails} />
            {selectedMall && (
                <DetailsShopping mall={selectedMall} onClose={closeModal} />
            )}
        </div>
    );

}

export default ShoppingPage;