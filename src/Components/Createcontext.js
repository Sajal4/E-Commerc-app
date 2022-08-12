import React, { createContext, useState } from 'react';

export const Createcontext = createContext();
export const Provider = (props) => {
    const [list, setList] = useState([
        {

            "id": 1,
            "imageurl":"https://mpng.subpng.com/20191102/olb/transparent-dress-clothing-gown-white-blue-5dbdcef4c0c1e9.9316189515727203727895.jpg",
            "name":"Blue & Black Dress",
            "description":" ",
            "category": "Fashion",
            "price":1000,
        },
        {

            "id": 2,
            "imageurl":"https://w7.pngwing.com/pngs/270/398/png-transparent-laptop-intel-core-hp-envy-hewlett-packard-laptop.png",
            "name":"HP-Silver",
            "description":" ",
            "category": "Laptop",
            "price":70000,
        },
        {

            "id": 3,
            "imageurl":"https://m.media-amazon.com/images/I/611ovP2GkrL._SX522_.jpg",
            "name":"Apple iPhone 13 Pro Max",
            "description":" ",
            "category": "Mobile",
            "price":60000,
        },
        {

            "id": 4,
            "imageurl":"https://img.favpng.com/11/10/9/headphones-apple-earbuds-clip-art-png-favpng-qtBMgmvm1du8Cg6SrmHFhbJmu.jpg",
            "name":"Bluetooth Headset ",
            "description":" ",
            "category": "Accesories",
            "price":1000,
        },
        {

            "id": 5,
            "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27Ab_oioMN7ApFlf9Ly4tBZdWbAmO3n82fw&usqp=CAU",
            "name":"Small Baby Boy Dress",
            "description":" ",
            "category": "Fashion",
            "price":649,
        },
        {

            "id": 6,
            "imageurl":"https://img.favpng.com/20/4/19/child-pink-toddler-baby-dress-png-favpng-V4cEMNReHvHnmncP1Sf0WMx7z.jpg",
            "name":"Girl-Dress",
            "description":" ",
            "category": "Fashion",
            "price":449,
        },
        {

            "id": 7,
            "imageurl":"https://cdn.imgbin.com/4/9/8/imgbin-dress-shirt-sleeve-hoodie-formal-wear-dress-shirt-DtnD8eeVEbsAZXvX2a2iG2602.jpg",
            "name":"formal-wear-shirt",
            "description":" ",
            "category": "Fashion",
            "price":799,
        },
        {

            "id": 8,
            "imageurl":"https://www.seekpng.com/png/detail/259-2599986_women-cotton-embroidered-anarkali-kurta-kurta.png",
            "name":"Womens- Kurta-set",
            "description":" ",
            "category": "Fashion",
            "price":999,
        },
        {

            "id": 9,
            "imageurl":"https://w7.pngwing.com/pngs/168/338/png-transparent-t-shirt-suit-graphy-clothing-men-s-suits-person-wearing-2-piece-dress-suit-tshirt-white-men-suit-thumbnail.png",
            "name":"mens-suit",
            "description":" ",
            "category": "Fashion",
            "price":1199,
        },
        {

            "id": 10,
            "imageurl":"https://png.pngtree.com/element_our/20190528/ourmid/pngtree-minority-boy-cartoon-illustration-image_1164500.jpg",
            "name":"Boys ethnic wear",
            "description":" ",
            "category": "Fashion",
            "price":899,
        },
        {

            "id": 11,
            "imageurl":"https://static.toiimg.com/img/78656120/Master.jpg",
            "name":"girls ethnic wear",
            "description":" ",
            "category": "Fashion",
            "price":499,
        },
        {

            "id": 12,
            "imageurl":"https://e7.pngegg.com/pngimages/102/623/png-clipart-apple-macbook-air-13-mid-2017-laptop-intel-core-macbook-electronics-computer.png",
            "name":"macbook",
            "description":" ",
            "category": "Laptop",
            "price":90000,
        },
        {

            "id": 13,
            "imageurl":"https://img.favpng.com/7/24/25/laptop-intel-core-i7-dell-xps-png-favpng-ChNtBdXFi8XSTPknZwdvkS7Zz.jpg",
            "name":"Dell",
            "description":" ",
            "category": "Laptop",
            "price":70000,
        },
        {

            "id": 14,
            "imageurl":"https://www.pngfind.com/pngs/m/658-6586213_alienware-18-dell-inspiron-15-5000-gaming-laptop.png",
            "name":"dell-inspiron-5000",
            "description":" ",
            "category": "Laptop",
            "price":58000,
        },
        {

            "id": 15,
            "imageurl":"https://cdn.imgbin.com/7/25/1/imgbin-macbook-pro-15-4-inch-apple-mac-mini-laptop-macbook-HsSHaV8t1MH1uY87xMwCGSrw4.jpg",
            "name":"macbook-pro-15",
            "description":" ",
            "category": "Laptop",
            "price":59000,
        },
        {

            "id": 16,
            "imageurl":"https://www.pngfind.com/pngs/m/677-6777181_hp-i3-laptop-silver-hd-png-download.png",
            "name":"hp-i5-laptop-silver",
            "description":" ",
            "category": "Laptop",
            "price":55000,
        },
        {

            "id": 17,
            "imageurl":"https://www.pngitem.com/pimgs/m/247-2475863_acer-laptop-png-transparent-png.png",
            "name":"acer-laptop",
            "description":" ",
            "category": "Laptop",
            "price":65000,
        },
        {

            "id": 18,
            "imageurl":"https://cdn.imgbin.com/0/20/17/imgbin-dell-xps-15-9560-intel-core-i7-laptop-laptops-for-college-students-PKgEmEmvbmpv47gqqjNPQhbNa.jpg",
            "name":"Dell XPS 15 9560 Intel Core I7 Laptop",
            "description":" ",
            "category": "Laptop",
            "price":55000,
        },
        {

            "id": 19,
            "imageurl":"https://static.toiimg.com/photo/msid-78642800/78642800.jpg",
            "name":"Apple iPhone 11 Red",
            "description":" ",
            "category": "Mobile",
            "price":48000,
        },
        {

            "id": 20,
            "imageurl":"https://cdn.bajajelectronics.com/product/7375-1.png",
            "name":"Redmi Note 10S",
            "description":" ",
            "category": "Mobile",
            "price":15000,
        },
        {

            "id": 21,
            "imageurl":"https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9r/Lake-Blue-gallery..png",
            "name":"OnePlus 9R",
            "description":" ",
            "category": "Mobile",
            "price":45000,
        },
        {

            "id": 22,
            "imageurl":"https://www.pngitem.com/pimgs/m/519-5190921_realme-5-pro-hd-png-download.png",
            "name":"Realme 5 Pro",
            "description":" ",
            "category": "Mobile",
            "price":17000,
        },
        {

            "id": 23,
            "imageurl":"https://fscl01.fonpit.de/devices/23/2223.png",
            "name":"Samsung Galaxy S22",
            "description":" ",
            "category": "Mobile",
            "price":35000,
        },
        {

            "id": 24,
            "imageurl":"https://i02.appmifile.com/988_operator_sg/09/02/2022/b09176f07d84e119623b4d218bfea455.png",
            "name":"Poco M4 Pro",
            "description":" ",
            "category": "Mobile",
            "price":18000,
        },
        {

            "id": 25,
            "imageurl":"https://st1.bgr.in/wp-content/uploads/2022/02/Poco-M4-Pro-5G-2-1.jpg",
            "name":"Poco",
            "description":" ",
            "category": "Mobile",
            "price":15000,
        },
        {

            "id": 26,
            "imageurl":"https://cdn.imgbin.com/13/21/1/imgbin-nokia-3310-2017-jio-phone-sd-feature-phone-4g-jio-0XC865cmNa5iuFs23u4zv92cd.jpg",
            "name":"Jio Phone",
            "description":" ",
            "category": "Mobile",
            "price":9000,
        },
        {

            "id": 27,
            "imageurl":"https://www.kindpng.com/picc/m/282-2822934_nokia-smartphones-nokia-7-2-hd-png-download.png",
            "name":"Nokia",
            "description":" ",
            "category": "Mobile",
            "price":12000,
        },
        {

            "id": 28,
            "imageurl":"https://e7.pngegg.com/pngimages/661/870/png-clipart-lenovo-vibe-k5-plus-lenovo-vibe-p1-lenovo-smartphones-android-android-gadget-mobile-phone.png",
            "name":"lenovo",
            "description":" ",
            "category": "Mobile",
            "price":10000,
        },
        {

            "id": 30,
            "imageurl":"https://motorolaroe.vtexassets.com/arquivos/ids/156684-800-auto?width=800&height=auto&aspect=true",
            "name":"Moto",
            "description":" ",
            "category": "Mobile",
            "price":17000,
        },
        {

            "id": 31,
            "imageurl":"https://e7.pngegg.com/pngimages/857/954/png-clipart-mobile-phone-accessories-charger-connection-line-data-lines.png",
            "name":"Usb charger ",
            "description":" ",
            "category": "Accesories",
            "price":690,
        },
        {

            "id": 32,
            "imageurl":"https://toppng.com/uploads/preview/earphone-11523956635875e9jqzj8.png",
            "name":"Bluetooth earphones ",
            "description":" ",
            "category": "Accesories",
            "price":1300,
        },
        {

            "id": 33,
            "imageurl":"https://www.kindpng.com/picc/m/552-5529897_photo-camera-png-image-transparent-sony-alpha-9.png",
            "name":"Sony Alfa ",
            "description":" ",
            "category": "Accesories",
            "price":30000,
        },
        {

            "id": 34,
            "imageurl":"https://img.favpng.com/9/17/8/selfie-stick-bluetooth-mobile-phones-mobile-phone-accessories-png-favpng-v36WkqN12YRVQL8dNPYKutECQ.jpg",
            "name":"selfie-stick ",
            "description":" ",
            "category": "Accesories",
            "price":400,
        },
        {

            "id": 35,
            "imageurl":"https://drive.google.com/file/d/1Tys3houI1OtE9sMuCzxEZIT8MXYZKqFZ/view?usp=sharing",
            "name":"wireless bluetooth ",
            "description":" ",
            "category": "Accesories",
            "price":1000,
        },
        {

            "id": 36,
            "imageurl":"https://spng.pngfind.com/pngs/s/180-1803624_2014-apple-watch-hd-png-download.png",
            "name":"smartwatch ",
            "description":" ",
            "category": "Accesories",
            "price":600,
        },
        {

            "id": 37,
            "imageurl":"https://www.freeiconspng.com/thumbs/bag-png/bags-png-31.png",
            "name":"leather-bag ",
            "description":" ",
            "category": "Accesories",
            "price":2000,
        },
        {

            "id": 38,
            "imageurl":"https://cdn.imgbin.com/14/24/22/imgbin-computer-keyboard-computer-mouse-laptop-hewlett-packard-wireless-keyboard-keyboard-umh7ZVfLTwCPgM0KNw5VxsZEH.jpg",
            "name":"keyboard-computer-mouse-laptop ",
            "description":" ",
            "category": "Accesories",
            "price":999,
        },
        {

            "id": 39,
            "imageurl":"https://pngimg.com/uploads/printer/printer_PNG7756.png",
            "name":"printer ",
            "description":" ",
            "category": "Accesories",
            "price":10,
        },
        {

            "id": 40,
            "imageurl":"https://w7.pngwing.com/pngs/631/788/png-transparent-table-wood-tables-orange-table-illustration-angle-furniture-rectangle-thumbnail.png",
            "name":"Table ",
            "description":" ",
            "category": "Accesories",
            "price":849,
        },
        {

            "id": 41,
            "imageurl":"https://toppng.com/uploads/preview/eye-glass-11550204989kpm0esg4os.png",
            "name":"Eyeglasses",
            "description":" ",
            "category": "Accesories",
            "price":700,
        },
        {

            "id": 42,
            "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38uUMEdYfxsvLyEPgSGuIrutWz9hvQAHu7g&usqp=CAU",
            "name":"Men Shoes  ",
            "description":" ",
            "category": "Fashion",
            "price":1500,
        },
        {

            "id": 43,
            "imageurl":"https://sfrfootwear.com/products/about_us_20_05_19_11_27_35_116082.png",
            "name":"Women's Shoes ",
            "description":" ",
            "category": "Fashion",
            "price":800,
        },
        {

            "id": 44,
            "imageurl":"https://png.pngtree.com/png-vector/20201129/ourmid/pngtree-childrens-shoes-png-image_2392000.jpg",
            "name":"baby shoes ",
            "description":" ",
            "category": "Fashion",
            "price":199,
        },
        {

            "id": 45,
            "imageurl":"https://img.favpng.com/9/25/6/rolex-datejust-rolex-submariner-watch-colored-gold-png-favpng-0gYiAETZehChSEV2hqvZPLpDK_t.jpg",
            "name":"Rolex watch ",
            "description":" ",
            "category": "Fashion",
            "price":10000,
        },
        {

            "id": 46,
            "imageurl":"https://www.pngitem.com/pimgs/m/297-2978265_dell-laptop-png-images-dell-xps-15-9570.png",
            "name":"dell-xps-15-8gb ",
            "description":" ",
            "category": "Laptop",
            "price":48000,
        },
        {

            "id": 47,
            "imageurl":"https://w7.pngwing.com/pngs/99/715/png-transparent-xiaomi-mi-notebook-air-12-5%E2%80%B3-laptop-macbook-air-laptop-electronics-netbook-computer.png",
            "name":"MI",
            "description":" ",
            "category": "Laptop",
            "price":45000,
        },
        {

            "id": 48,
            "imageurl":"https://www.lg.com/uk/lg-gram/images/hand-laptop.png",
            "name":" lg gram",
            "description":" ",
            "category": "Laptop",
            "price":40000,
        },
        {

            "id": 49,
            "imageurl":"https://w7.pngwing.com/pngs/936/581/png-transparent-laptop-lenovo-thinkpad-intel-core-ibm-lenovo-logo-electronics-netbook-computer.png",
            "name":"lenovo thinkpad ",
            "description":" ",
            "category": "Laptop",
            "price":38000,
        },

    ])

    return (
        <Createcontext.Provider value={[list,setList]}>
            {props.children}
        </Createcontext.Provider>
    )
}