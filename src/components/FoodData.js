const foodData = [
    {
        category: "food",
        name: "Nasi Lemak",
        image: "/images/Nasi_lemak_1.png",
        images:
            [
                "/images/Nasi_lemak_2.png",
                "/images/Nasi_lemak_3.png" ,
                "/images/Nasi_lemak_4.png",
            ],
        description:
            "Nasi Lemak is a beloved Malaysian dish featuring fragrant rice cooked " +
            "in coconut milk, served with a variety of accompaniments such as crispy" +
            " anchovies, peanuts, a hard-boiled egg, and sambal (spicy chili paste)." +
            "It’s a comforting and flavorful meal often enjoyed for breakfast or " +
            "lunch." +
            "Here is Penang's famous place to buy this traditional food which wrapped into" +
            " a triangle shape using banana leaf." ,

        locations:
            [
                {
                    stallName: "Ali Nasi Lemak Daun Pisang",
                    price:"RM2.50 per pack",
                    address: "Sri Weld Food Court, Beach St, Georgetown, 10300 George Town, Penang",
                    operatingHours: "7am – 2pm (Mon – Fri), 7am – 1pm (Sat) | Closed on Sun",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/nasi-lemak-spots-in-penang/",
    },


    {
        category: "food",
        name: "Nasi Kandar",
        image: "/images/Nasi_kandar_1.png",
        images:
            [
                "/images/Nasi_kandar_2.png",
                "/images/Nasi_kandar_3.png",
                "/images/Nasi_kandar_4.png",
                "/images/Nasi_kandar_5.png",
                "/images/Nasi_kandar_6.png"
            ],
        description:
            "Nasi Kandar is a renowned Malaysian dish, especially popular in Penang. " +
            "It features steamed white rice served with a variety of flavorful curries " +
            "and side dishes. The name originates from the traditional method of selling it," +
            " where vendors carried poles (kandar) with baskets of rice and dishes on each end.",

        locations:
            [
                {
                    stallName: "Nasi Kandar Sulaiman ",
                    price: "RM5 - RM15",
                    address: "739, Jalan Air Itam, George Town, 10460 George Town, Pulau Pinang ",
                    operatingHours: "Monday to Sunday (6.30 am – 2.30 pm)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/best-penang-nasi-kandar/",
    },

    {
        category: "food",
        name: "Char Kuey Teow",
        image: "/images/Kuey_teow_1.png",
        images:
            [
                "/images/Kuey_teow_2.png",
                "/images/Kuey_teow_3.png",
                "/images/Kuey_teow_4.png",
                "/images/Kuey_teow_5.png",
                "/images/Kuey_teow_6.png"
            ],
        description:
            "Char Kuey Teow is a beloved Malaysian street food featuring " +
            "flat rice noodles stir-fried over high heat with prawns, eggs, " +
            "bean sprouts, and Chinese sausage. Infused with smoky " +
            "wok hei (breath of the wok), this flavorful dish is a must-try, " +
            "especially in Penang, where it’s famously prepared.",

        locations:
            [
                {
                    stallName: "Siam Road Charcoal Char Koay Teow",
                    price: "RM9 per plate",
                    address: "82, Jalan Siam, George Town, 10400 George Town, Pulau Pinang",
                    operatingHours: "Tuesday to Saturday (12 – 6 pm), Closed on Sundays & Mondays ",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/best-char-koay-teow-penang/",
    },

    {
        category: "food",
        name: "Banana Leaf Rice",
        image: "/images/Bananaleaf_1.png",
        images:
            [
                "/images/Bananaleaf_2.png",
                "/images/Bananaleaf_3.png",
                "/images/Bananaleaf_4.png",
                "/images/Bananaleaf_5.png",
                "/images/Bananaleaf_6.png"
            ],
        description:
            "Banana Leaf Rice is a traditional South " +
            "Indian-inspired Malaysian meal served on a banana leaf. " +
            "It typically includes steamed rice, a variety of vegetable curries, " +
            "pickles, crispy papadum, and optional meat or seafood. " +
            "The banana leaf enhances the aroma and flavor, making it a " +
            "unique and satisfying dining experience. In Penang, Banana Leaf Rice " +
            "is a popular choice, with local restaurants offering their own " +
            "delicious variations, providing a rich and authentic taste " +
            "of the island’s diverse culinary culture.",

        locations:
            [
                {
                    stallName: "Veloo Villas",
                    price: "RM8 - RM 20",
                    address: "No.22, Penang St, Georgetown, 10200 George Town, Penang.",
                    operatingHours: "7AM-10PM (Daily)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/8-banana-leaf-restaurants-in-penang-that-are-so-good-you-cant-be-leaf-it/",
    },

    {
        category: "food",
        name: "Roti Canai",
        image: "/images/Roti_canai_1.png",
        images:
            [
                "/images/Roti_canai_2.png",
                "/images/Roti_canai_2.png",
                "/images/Roti_canai_4.png",
                "/images/Roti_canai_5.png"

            ],
        description:
            "\n" +
            "Roti Canai is a popular Malaysian flatbread with Indian origins, " +
            "known for its crispy, flaky exterior and soft, chewy layers. " +
            "Often served with dhal (lentil curry), chicken curry, or sambal, " +
            "it’s a versatile dish enjoyed as breakfast or a snack. A must-try staple " +
            "of Malaysia’s vibrant food culture! In Penang, Roti Canai is " +
            "especially beloved, with local stalls offering their own delicious " +
            "twists, making it a must-try for anyone visiting Penang.",

        locations:
            [
                {
                    stallName: "Transfer Road Roti Canai",
                    price: "RM2.50 - RM4.00",
                    address: "110-114, Jalan Transfer, George Town, 10050 George Town, Pulau Pinang, Malaysia.",
                    operatingHours: "8:00AM to 11:00AM",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/top-8-roti-canai-penang/",
    },

    {
        category: "food",
        name: "Bak Kut Teh",
        image: "/images/Bak_kut_1.png",
        images:
            [
                "/images/Bak_kut_2.png",
                "/images/Bak_kut_3.png",
                "/images/Bak_kut_4.png",
                "/images/Bak_kut_5.png",
                "/images/Bak_kut_6.png"
            ],
        description:
            "Bak Kut Teh is a flavorful Malaysian-Chinese dish " +
            "featuring pork ribs simmered in a fragrant herbal broth with garlic, " +
            "spices, and soy sauce. Often served with rice, fried dough sticks (youtiao), " +
            "and tea, it’s a comforting and aromatic dish cherished for its " +
            "rich taste and traditional appeal. In Penang, Bak Kut Teh is especially " +
            "popular, with local eateries offering their own unique variations, " +
            "making it a must-try for visitors looking to savor authentic flavors.",

        locations:
            [
                {
                    stallName: "Khoon Klang Bak Kut Teh",
                    price: "RM20 - RM30",
                    address: " 320, Jalan Perak, Jelutong, 11600 George Town, Pulau Pinang.",
                    operatingHours: "11AM-10.30PM (Closed on Fridays)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/12-best-local-spots-in-penang-for-bak-kut-teh-2024-guide/",
    },

    {
        category: "food",
        name: "Tomyum",
        image: "/images/Tomyum_1.png",
        images:
            [
                "/images/Tomyum_2.png",
                "/images/Tomyum_3.png",
                "/images/Tomyum_4.png",
                "/images/Tomyum_5.png",
                "/images/Tomyum_6.png"

            ],
        description:
            "Tom Yum is a spicy and sour Thai-inspired soup popular in Malaysia. " +
            "Bursting with bold flavors, it features a fragrant broth made with " +
            "lemongrass, lime leaves, galangal, chili, and lime juice. Typically " +
            "prepared with seafood or chicken, it’s a zesty and comforting dish " +
            "perfect for spice lovers. In Penang, Tom Yum is a must-try, with local " +
            "versions often featuring fresh seafood and an extra punch of flavor, " +
            "making it a favorite at hawker stalls and restaurants.",

        locations:
            [
                {
                    stallName: "Nana Tomyam",
                    price: "RM9 - RM15",
                    address: "6A, Jalan Transfer, George Town, 10050 George Town, Pulau Pinang.",
                    operatingHours: "11.30 am – 7.30 pm (Mon); 11.30 am – 10.30 pm (Tue-Sun)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/10-spicylicious-tomyam-spots-in-penang/",
    },

    {
        category: "food",
        name: "Laksa",
        image: "/images/Laksa_1.png",
        images:
            [
                "/images/Laksa_2.png",
                "/images/Laksa_3.png",
                "/images/Laksa_4.png",
                "/images/Laksa_5.png"

            ],
        description:
            "Laksa is a spicy and aromatic noodle soup, " +
            "popular in Malaysia and Southeast Asia. It features a flavorful broth, " +
            "often coconut-based (curry laksa) or tamarind-based (asam laksa), " +
            "served with rice noodles, prawns, fish, or chicken, and garnished with " +
            "fresh herbs. A must-try dish for noodle and spice lovers! In Penang, " +
            "Laksa is especially famous, with the island offering its own iconic " +
            "variations, such as the tangy and fragrant Penang Asam Laksa, a " +
            "favorite among locals and visitors alike.",

        locations:
            [
                {
                    stallName: "Penang Road Laksa",
                    price: "RM8.50 per bowl",
                    address: "5-7, Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang ",
                    operatingHours: "Thursday to Tuesday (9 am – 5.30 pm), Closed on Wednesdays ",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/top-10-best-laksa-in-penang-2024-guide/",
    },

    {
        category: "dessert",
        name: "Cendol",
        image: "/images/Cendol_1.png",
        images:[
            "/images/Cendol_2.png",
            "/images/Cendol_3.png",
            "/images/Cendol_4.png",
            "/images/Cendol_5.png",
            "/images/Cendol_6.png"
        ],
        description:
            "Cendol is a refreshing Southeast Asian dessert made with shaved ice, " +
            "coconut milk, and sweet toppings like green rice flour jelly, palm sugar, " +
            "and red beans. Popular in Malaysia and Singapore, it’s known for its " +
            "vibrant colors and cooling, sweet taste, making it a perfect treat for hot " +
            "weather. In Penang, Cendol is a must-try, with local vendors offering their " +
            "own unique variations, often featuring rich palm sugar syrup and a satisfying " +
            "blend of textures." ,

        locations:
            [
                {
                    stallName: "Penang Road Famous Teochew Chendul",
                    price: "RM8.90 per bowl",
                    address: "27-29, Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang.",
                    operatingHours: "Monday to Sunday (10 am – 5 pm)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/top-10-must-try-cendol-spots-in-penang-2024-guide/",
    },

    {
        category: "dessert",
        name: "Tau Fu Fah",
        image: "/images/Tofu_1.png",
        images:[
            "/images/Tofu_2.png",
            "/images/Tofu_3.png",
            "/images/tofu_4.png",
            "/images/tofu_5.png",
            "/images/tofu_6.png"
        ],
        description:
            "Tau Fu Fah is a smooth and silky Malaysian dessert " +
            "made from fresh tofu, typically served warm or chilled with sweet " +
            "syrup made from palm sugar or ginger. It has a delicate texture and " +
            "subtle sweetness, making it a comforting treat. In Penang, " +
            "Tau Fu Fah is a beloved local snack, often enjoyed as a refreshing " +
            "dessert after meals, with several stalls offering their own signature versions." ,

        locations:
            [
                {
                    stallName: " Pearl Hill Soya Bean @ Tanjung Bungah",
                    price: "RM2 - RM5",
                    address: "123, Jalan Lembah Permai, Tanjung Bungah, 11200, Georgetown, Penang.",
                    operatingHours: "10 AM to 9 PM.Closed on Sunday",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/7-best-tau-fu-fah-in-penang-for-dessert-lovers/",
    },

    {
        category: "dessert",
        name: "Mooncakes",
        image: "/images/Mooncake_1.png",
        images:[
            "/images/Mooncake_2.png",
            "/images/Mooncake_3.png",
            "/images/Mooncake_3.png",
            "/images/Mooncake_5.png",
            "/images/Mooncake_6.png"

        ],
        description:
            "Mooncakes are traditional Chinese pastries enjoyed during " +
            "the Mid-Autumn Festival. These round cakes have a thick, sweet filling, " +
            "typically made of lotus seed paste or red bean paste, with or " +
            "without salted egg yolks. The outer skin is soft and slightly chewy, " +
            "making mooncakes a delicious symbol of unity and celebration. " +
            "In Penang, mooncakes are a popular seasonal treat, and you can find them " +
            "at local bakeries, often with unique regional variations." ,

        locations:
            [
                {
                    stallName: "NG Kee Cake Shop",
                    price: "RM1 - RM20",
                    address: "61, Lebuh Cintra, George Town, 10100 George Town, Pulau Pinang.",
                    operatingHours: "(Tue-Fri) 9:00 a.m.-6 p.m. (Sun) 9:00 a.m.-4:00 p.m. Closed on Monday.",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/10-unique-mooncakes-spotted-in-penang-2023-guide/",
    },
    {
        category: "dessert",
        name: "Apom Balik",
        image: "/images/Apom_1.png",
        images:[
            "/images/Apom_2.png",
            "/images/Apom_3.png",
            "/images/Apom_4.png",
            "/images/Apom_5.png",
            "/images/Apom_6.png"
         ],
        description:
            "Apom Balik is a popular Malaysian street snack, " +
            "often described as a sweet, thick pancake. It features a crispy " +
            "outer layer with a soft, spongy interior, filled with peanuts, " +
            "sweet corn, sugar, and sometimes a drizzle of condensed milk. " +
            "Often folded into a half-moon shape, it's a delightful treat " +
            "enjoyed by many. In Penang, this snack is especially loved and can " +
            "be found at various local stalls, making it a must-try when visiting." ,

        locations:
            [
                {
                    stallName: "Aki Pancake",
                    price: "RM2 - RM5",
                    address: "Bayan Lepas, 47, Jalan Nipah, Bayan Lepas, 11900 Bayan Lepas, Penang.",
                    operatingHours: " 6 PM to 9 PM. Closed on Wednesday.",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/best-apom-penang/",
    },

    {
        category: "dessert",
        name: "Tau Sar Piah",
        image: "/images/Piah_1.png",
        images:[
            "/images/Piah_2.png",
            "/images/Piah_3.png",
            "/images/Piah_4.png",
            "/images/Piah_5.png",
            "/images/Piah_6.png"
            ],
        description:
            "Tau Sar Piah is a traditional Malaysian pastry " +
            "filled with sweet mung bean paste. This flaky, golden-brown " +
            "biscuit is often enjoyed as a snack or gift. The outer crust is " +
            "delicate and crisp, while the smooth mung bean filling provides " +
            "a subtle sweetness, making it a beloved treat, especially in Penang." ,

        locations:
            [
                {
                    stallName: "Him Heang",
                    price: "RM7.90 per box (12 pieces)",
                    address: "162, Jalan Burma, 10050 Penang, Malaysia.",
                    operatingHours: "(Mon-Sat) 8.30am – 5.00pm (Closed on Sundays)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/10-best-places-to-get-tau-sar-piah-in-penang/",
    },

    {
        category: "dessert",
        name: "Pisang Goreng",
        image: "/images/Pisang_1.png",
        images:[
            "/images/Pisang_2.png",
            "/images/Pisang_3.png",
            "/images/Pisang_4.png",
            "/images/Pisang_5.png",
            "/images/Pisang_6.png"
        ],
        description:
            "Pisang Goreng is a popular Malaysian snack made by " +
            "deep-frying ripe bananas coated in a light batter until golden and " +
            "crispy on the outside, while the inside remains soft and sweet. " +
            "Often served with a dusting of sugar or paired with spicy sambal, " +
            "it’s a delicious and comforting treat. You can easily find it in Penang." ,

        locations:
            [
                {
                    stallName: "Pisang Goreng @ Air Itam",
                    price: "RM4 - RM6",
                    address: "Kampung Baharu, 11400 Air Itam, Penang.",
                    operatingHours: "12 p.m.-6 p.m. (Closed on Friday& Saturday)",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/10-crispy-pisang-goreng-in-penang-to-snack-on/",
    },

    {
        category: "drinks",
        name: "Teh Tarik",
        image: "/images/Tarik_1.png",
        images:
            [
                "/images/Tarik_2.png",
                "/images/Tarik_3.png",
                "/images/Tarik_4.png",
                "/images/Tarik_5.png"
            ],
        description:
            "Teh Tarik is Malaysia’s iconic frothy milk tea, " +
            "made from strong black tea and sweetened condensed milk. The tea is " +
            "“pulled” between two cups to create a frothy top and cool it to the perfect " +
            "temperature. This sweet, creamy beverage is enjoyed throughout the day, " +
            "especially at mamak stalls, and is a beloved drink in Malaysia and Singapore." +
            " In Penang, you’ll find some of the best Teh Tarik, making it a must-try.",

        locations:
            [
                {
                    stallName: "Restoran Nasi Kandar Line Clear",
                    price: "RM6.50",
                    address: "Beside 161 & 177 Penang Road, George Town, 10000 George Town, Pulau Pinang.",
                    operatingHours: "8:00 am – 12:00 am (Daily)",
                },
            ],
        moreInfoLink:"https://myweekendplan.asia/top-best-teh-tarik-in-penang/",
    },

    {
        category: "drinks",
        name: "Coffee",
        image: "/images/Coffee_1.png",
        images:
            [
                "/images/Coffee_2.png",
                "/images/Coffee_3.png",
                "/images/Coffee_4.png",
                "/images/Coffee_5.png",
                "/images/Coffee_6.png"
            ],
        description:
            "Coffee is a popular beverage made from roasted coffee beans, " +
            "known for its rich, bold flavor and energizing effects. It comes in " +
            "various forms, such as espresso, cappuccino, latte, and black coffee, " +
            "each with its own distinct taste and preparation method. Coffee is enjoyed " +
            "worldwide and often paired with breakfast or snacks for a refreshing start " +
            "to the day. In Penang, you can also find some of the best coffee, " +
            "making it a must-try for coffee lovers.",

        locations:
            [
                {
                    stallName: "China House",
                    price: "RM15 - RM20",
                    address: "153, Beach St, Georgetown, 10300 George Town, Penang.",
                    operatingHours: "9:30 am – 1:00 am (Monday – Sunday)",
                },
            ],
        moreInfoLink:"https://myweekendplan.asia/top-best-coffee-in-penang/",
    },

    {
        category: "drinks",
        name: "Ais Tingkap",
        image: "/images/Ais_1.png",
        images:
            [
                "/images/Ais_1.png",
                "/images/Ais_2.png",
                "/images/Ais_3.png",
                "/images/Ais_4.png",
                "/images/Ais_5.png"
            ],
        description:
            "Ais Tingkap is a traditional Malaysian iced dessert made with " +
            "shaved ice, sweet syrup, and a variety of colorful ingredients like jelly, " +
            "grass jelly, and sometimes red beans or corn. Often served in a glass with a straw," +
            " it’s a popular, refreshing treat during hot weather, especially in Penang. " +
            "The name Ais Tingkap refers to the layers of ice that resemble window panes, " +
            "offering a cool and sweet experience.",

        locations:
            [
                {
                    stallName: "Chowrasta Market",
                    price: "RM2.50 per glass",
                    address: "2, Lebuh Tamil, George Town, 10100 George Town, Pulau Pinang.",
                    operatingHours: "Opens daily, 11:00 a.m. – 7:00 p.m.",
                },
            ],
        moreInfoLink:"https://penangfoodie.com/100-years-of-ais-tingkap/#google_vignette",
    },
];

export default foodData;