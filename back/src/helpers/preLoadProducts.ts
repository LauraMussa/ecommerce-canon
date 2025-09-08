import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Canon EOS 250 5D",
    price: 3500,
    description:
      "A professional full-frame DSLR with a 30.4 MP CMOS sensor and DIGIC 6+ processor. Delivers excellent image quality, wide dynamic range, and reliable autofocus with Dual Pixel CMOS AF. Shoots 4K video at 30fps and continuous bursts up to 7fps. Features a weather-sealed magnesium alloy body for durability. Offers Wi-Fi, GPS, and touchscreen control. A workhorse widely used in weddings, landscapes, and portrait photography.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817767/Camara_Canon_EOS_250DEF-S18-55mm_f4-5.6-removebg-preview_awoojs.png",
    categoryId: 1,
    stock: 15,
  },

  {
    name: "Canon EOS 250 F”",
    price: 650,
    description:
      "Compact and lightweight DSLR with an APS-C 24.1 MP sensor. Includes a versatile 18-55mm lens, ideal for beginners. Equipped with Dual Pixel AF, DIGIC 8 processor, and 4K video recording. The vari-angle touchscreen makes vlogging and selfies easy. Easy to carry, user-friendly menus, yet capable of manual control. A great step-up from smartphones into interchangeable-lens photography.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817750/C%C3%A1mara_Canon_EOS_250D_EF-S_18-55mm_f4-5.6_IS_STM_3_-removebg-preview_aeo6sd.png",
    categoryId: 1,
    stock: 12,
  },

  {
    name: "Canon EOS 4000D",
    price: 590,
    description:
      "An entry-level DSLR designed for students and casual photographers. 18 MP APS-C sensor with DIGIC 4+ processor. Basic 9-point autofocus and Full HD video recording. Simplified controls and built-in feature guides help new users learn. Lightweight plastic body keeps the cost low. Affordable way to start photography while still enjoying DSLR image quality. Best suited for beginners on a budget.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817734/C%C3%A1mara_Canon_EOS_4000D_6_-removebg-preview_nolz3s.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Canon EOS 5D",
    price: 3800,
    description:
      "A professional full-frame DSLR with a 30.4 MP CMOS sensor and DIGIC 6+ processor. Delivers excellent image quality, wide dynamic range, and reliable autofocus with Dual Pixel CMOS AF. Shoots 4K video at 30fps and continuous bursts up to 7fps. Features a weather-sealed magnesium alloy body for durability. Offers Wi-Fi, GPS, and touchscreen control. A workhorse widely used in weddings, landscapes, and portrait photography.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817776/Cuerpo_de_la_c%C3%A1mara_Canon_EOS_5D_Mark_IV-removebg-preview_imwbph.png",
    categoryId: 1,
    stock: 15,
  },
  {
    name: "Canon EOS R8",
    price: 1500,
    description:
      "A modern full-frame mirrorless camera with a 24.2 MP sensor. Delivers excellent low-light performance, Dual Pixel CMOS AF II, and fast continuous shooting (up to 40fps with electronic shutter). Records oversampled 4K 60p video without major crop. Lightweight body, making it a portable option for professionals. Offers advanced subject-tracking AF for people, animals, and vehicles. A great balance of performance and portability.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817722/Canon_EOS_R8-removebg-preview_ftrq5m.png",
    categoryId: 1,
    stock: 18,
  },
  {
    name: "Canon EOS-1D X",
    price: 5800,
    description:
      "Canon's flagship professional DSLR built for sports and wildlife photography. Features a rugged weather-sealed body, 20.1 MP full-frame sensor, and DIGIC X processor. Extremely fast shooting up to 20fps with electronic shutter. Outstanding autofocus accuracy in challenging conditions. 5.5K RAW video recording available for high-end workflows. Designed for professionals who demand speed, reliability, and durability. One of the most advanced DSLRs ever made.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817696/Camara_EOS-1D-X-_Mark-III_01-removebg-preview_omkxvy.png",
    categoryId: 1,
    stock: 30,
  },
  {
    name: "Canon PowerShot G7",
    price: 750,
    description:
      "A premium compact camera with a 20.1 MP 1-inch sensor. Bright 24-100mm f/1.8-2.8 zoom lens for low-light shooting. Records 4K video and supports live streaming directly to YouTube. Popular among vloggers thanks to its flip-up touchscreen and external mic input. Portable pocket-sized body makes it great for travel. Fast burst shooting ensures you capture the moment. A strong choice for hybrid photo and video creators.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817676/camara_digital_Canon_PowerShot_G7_X_Mark_III-removebg-preview_ozeeht.png",
    categoryId: 1,
    stock: 14,
  },
  {
    name: "Canon Zoemini S2",
    price: 300,
    description:
      "A pocket-sized instant camera with built-in ZINK printer. Shoots 8 MP photos and instantly prints them on 2x3-inch sticky-backed paper. Includes a small mirror with ring light for selfies. MicroSD slot allows saving digital copies of your shots. Rechargeable and portable for events, travel, or parties. Connects via Bluetooth to smartphones for remote shooting and extra editing options. Fun, casual device more about creativity than pro image quality.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817635/Camara_Canon_Zoemini_S2S2-WHT_01-removebg-preview_iydjhr.png",
    categoryId: 1,
    stock: 9,
  },
  {
    name: "Canon Legria HF-G70",
    price: 2375,
    description:
      "Enthusiast-level 4K camcorder featuring a 1/2.3-inch UHD CMOS sensor and DIGIC DV 6 processor. Delivers 4K UHD video at 30fps, 20x optical zoom (≈29-601 mm equiv.), plus 5-axis image stabilization and a circular 8-blade iris for smoother bokeh. Adds timestamp OSD recording, UVC streaming over USB-C, infrared mode, and dual SD card slots for backup or relay. Lightweight (~740 g) and compact—great for run-and-gun shooting, events, documentation.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818306/Videoc%C3%A1mara_4K_LEGRIA_HF_G70_de_Canon_1_-removebg-preview_j07byz.png",
    categoryId: 2,
    stock: 11,
  },
  {
    name: "Canon PowerShot V1",
    price: 1075,
    description:
      "A compact, video-first hybrid camera with a 1.4-inch sensor (around 22.3 MP stills, 18.7 MP for video), ultra-wide 16-50mm equivalent lens (f/2.8-4.5), and active cooling fan for unlimited 4K-60p recording without overheating. Includes Canon Log 3 (10-bit video), advanced Dual Pixel CMOS AF II, lens + digital IS, and a vari-angle touchscreen. Designed for streamers and vloggers, with USB-C, Wi-Fi/Bluetooth, product demo mode, and solid stabilization.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818288/videcamara_C%C3%A1mara_Canon_PowerShot_V1__negro-removebg-preview_bq80mi.png",
    categoryId: 2,
    stock: 25,
  },
  {
    name: "Canon XA60 4K",
    price: 1780,
    description: `Compact professional-grade UHD 4K camcorder with a 1/2.3" CMOS sensor and DIGIC DV 6 processor. Equipped with 20x optical zoom lens (≈29-601 mm) plus digital zoom, 5-axis Dynamic IS, dual SD card slots, and OSD timestamp recording. Offers XF-AVC and MP4 recording, up to 4K30 at 160 Mbps and FHD 60p, plus mini-HDMI output and USB-C UVC livestreaming. Includes two XLR audio inputs on a detachable handle for pro-level sound. Professional control layout, touchscreen LCD, OLED EVF, assignable buttons.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818258/Videoc%C3%A1mara_profesional_XA60_de_Cano-removebg-preview_iegszs.png",
    categoryId: 2,
    stock: 7,
  },
  {
    name: "SELPHY CP1000",
    price: 140,
    description: `Ultra-compact dye-sublimation printer delivering lab-quality 2.1"x3.4" postcard prints. Prints directly from camera, USB, or memory cards. Fast, portable, and easy to use—ideal for casual photo enthusiasts. Durable prints that resist fading. Affordable entry point into dedicated photo printing. Great for instant photo gifts, scrapbooking, or event mementos.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818675/Canon_SELPHY_CP1000__blanco-removebg-preview_wscyhq.png",
    categoryId: 3,
    stock: 8,
  },
  {
    name: "PIXMA PRO-200S A3",
    price: 645,
    description: `High-quality A3+ (13″) wireless inkjet photo printer using an 8-color dye-based ink system. Capable of vibrant, borderless prints up to 13"x19". Features fast print speeds (~90 s for A3+, ~53 s for 8"x10") and skew correction technology. Compact footprint with 3″ LCD for navigation. Great for photographers and graphic artists seeking gallery-quality prints without oversize equipment.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818671/Impresora_fotogr%C3%A1fica_inal%C3%A1mbrica_A3__en_color_Canon_PIXMA_PRO-200S_1_-removebg-preview_xx9afu.png",
    categoryId: 2,
    stock: 17,
  },
  {
    name: "SELPHY QX20 Portable",
    price: 190,
    description: `Pocket-size dye-sublimation printer with built-in battery and paper tray—prints 2.1"x3.4" and 2.7"x2.7" sticker-style photos. Wireless connection via QR code; ideal for mobile printing. Excellent color quality for its size, though very high cost per print. Perfect for creative labeling, journaling, or on-the-go stickers on trips or social events.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818653/Impresora_fotogr%C3%A1fica_inal%C3%A1mbrica_y_port%C3%A1til_en_color_Canon_SELPHY_QX20__en_gris_oscuro_2_-removebg-preview_pnielx.png",
    categoryId: 3,
    stock: 8,
  },
  {
    name: "SELPHY CP1500",
    price: 320,
    description: `Portable, wireless dye-sublimation printer supporting 4"x6", square, and label-sized prints. Compatible with Wi-Fi, AirPrint, USB, SD card, and Canon Photo Layout app. Optional battery pack allows up to ~54 prints per charge—excellent for travel or gatherings. Produces long-lasting, water-resistant prints rated up to 100 years. A reliable, fun way to create tangible memories instantly.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818631/Impresora_fotogr%C3%A1fica_port%C3%A1til_en_color_SELPHY_CP1500_de_Canon__negro__1_-removebg-preview_f408be.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "PROGRAF PRO-310",
    price: 950,
    description: `This professional-grade printer is built for graphic artists and photographers. It supports A3+ media and delivers exceptional detail with Canon's advanced ink system. The PRO-310 offers precise color calibration for consistent results. It can handle thicker papers and fine art media, expanding creative possibilities. Connectivity options include Wi-Fi, Ethernet, and USB. The design is robust and suitable for heavy workloads. Ideal for producing gallery-quality prints and proofs.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818643/Impresora_imagePROGRAF_PRO-310_A3__de_Canon_2_-removebg-preview_hikao7.png",
    categoryId: 3,
    stock: 25,
  },
  {
    name: "SmallRig Camera Case",
    price: 140,
    description: `The SmallRig Leather Half-Case is a premium protective accessory designed for Canon R5, R6, and similar mirrorless cameras. It combines genuine leather with a lightweight aluminum alloy frame, offering both durability and style. The textured grip improves handling during long shoots, while the half-case design ensures easy access to all ports, buttons, and the battery compartment. Its retro aesthetic adds elegance without bulk, making it ideal for photographers who want protection and comfort on the go. Approximate price: USD 80-100 depending on the model.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818518/Accesorio_Estuche_para_c%C3%A1maras_de_SmallRig-removebg-preview_tek3dp.png",
    categoryId: 4,
    stock: 15,
  },
  {
    name: "JOBY GorillaPod",
    price: 90,
    description: `The JOBY GorillaPod 3K Kit is a flexible and compact tripod that adapts to almost any shooting environment. Its bendable legs allow you to wrap it around poles, branches, or uneven surfaces, while the included ball head provides smooth adjustments and 360° rotation. With a load capacity of up to 3 kg (6.6 lbs), it easily supports DSLRs, mirrorless cameras, or even lighting gear. Lightweight yet sturdy, it's a favorite for vloggers, travelers, and creators who need stability in versatile setups.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818516/Accesorios_Kit_GorillaPod_3K_de_JOBY__negro_1_-removebg-preview_xswpgp.png",
    categoryId: 4,
    stock: 3,
  },
  {
    name: "Manfrotto Mini Tripod",
    price: 85,
    description: `The Manfrotto PIXI EVO is a compact tabletop tripod built for creators who need stability in a small form factor. Its adjustable legs and ball head allow multiple shooting angles, including low-angle photography and overhead shots. Despite its small size, it supports compact cameras, smartphones (with clamp), and even lightweight mirrorless setups. The durable build and sleek design make it great for travel, desktop filming, or vlogging on the move.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818485/Accesorio_Mini_tr%C3%ADpode_de_2_secciones_PIXI_EVO_de_Manfrotto__negro_2_-removebg-preview_wfevt6.png",
    categoryId: 4,
    stock: 22,
  },
  {
    name: "Canon EF 70-200",
    price: 1800,
    description: `A professional-grade telephoto zoom, the Canon EF 70-200 mm f/2.8L IS II USM is one of the most versatile lenses in Canon's lineup. It features a constant f/2.8 aperture, delivering excellent low-light performance and smooth background blur. The 4-stop Image Stabilizer ensures sharp handheld shots, while the ultrasonic motor (USM) provides fast and accurate autofocus. Built with L-series optics and weather sealing, it performs in demanding conditions, making it a go-to lens for sports, wildlife, and portrait photographers.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818462/Objetivo_Canon_EF_70-200mm_f2.8L_IS_III_USM_3_-removebg-preview_yow6n6.png",
    categoryId: 4,
    stock: 19,
  },
  {
    name: "Canon RF 50-STM",
    price: 150,
    description: `Compact and lightweight, the Canon RF 50 mm f/1.8 STM is an affordable prime lens for Canon's RF mirrorless system. Its wide f/1.8 aperture produces shallow depth of field and beautiful bokeh, making it excellent for portraits and low-light photography. The stepping motor (STM) delivers smooth, quiet autofocus—perfect for both stills and video. Despite its small size, it offers sharp optics and reliable performance, making it a must-have starter lens for beginners and a handy addition for professionals.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818448/Objetivo_Canon_RF_50mm_F1.8_STM_3_-removebg-preview_jfw93u.png",
    categoryId: 4,
    stock: 18,
  },
  {
    name: "Canon RF 200",
    price: 2800,
    description: `The Canon RF 200-800mm is a versatile super-telephoto zoom lens designed for EOS R mirrorless cameras. It features built-in image stabilization that helps achieve sharp results, even when handheld at long focal lengths. The fast and quiet Nano USM autofocus system makes it suitable for both photography and video. Its wide focal range is perfect for wildlife, sports, and outdoor scenes. Despite its reach, it remains relatively portable and weather-resistant for outdoor use.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818438/Objetivo_Canon_RF_200-800mm_F6.3-9_IS_USM_2_-removebg-preview_f0unuh.png",
    categoryId: 4,
    stock: 25,
  },
  {
    name: " Canon IS Binoculars",
    price: 980,
    description: `Compact and lightweight, the Canon 10x30 IS binoculars are ideal for travel, birdwatching, and sporting events. They feature Canon's Image Stabilization technology, which reduces hand-shake and delivers steady views even at 10x magnification. Multi-coated lenses improve brightness and contrast, offering sharp images with good color fidelity. Their ergonomic design makes them comfortable to use for extended periods.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818423/Prism%C3%A1ticos_Canon_10x30_IS-removebg-preview_dxtr1k.png",
    categoryId: 4,
    stock: 2,
  },
  {
    name: "Canon IS Binoculars",
    price: 1200,
    description: `The Canon 10x42L IS binoculars belong to Canon's professional L-series and deliver outstanding clarity and performance. With large 42 mm objective lenses, they offer bright images even in low-light conditions such as dusk or dawn. The advanced stabilization system ensures steady viewing at 1x magnification. Built with a durable, weather-resistant body, they are suited for demanding outdoor activities.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818413/Prism%C3%A1ticos_port%C3%A1tiles_Canon_10x42L_IS-removebg-preview_z05fyu.png",
    categoryId: 4,
    stock: 7,
  },
  {
    name: "Canon PowerShot GOLF",
    price: 780,
    description: `Canon's PowerShot GOLF is a unique hybrid between a laser rangefinder and a compact digital camera. It measures distances up to 800 yards with high accuracy and slope correction, making it ideal for golfers. Equipped with 6-12x digital zoom, optical image stabilization, and IPX4 water resistance, it performs reliably outdoors. In addition to precise measurements, it can capture still images and short video clips, allowing golfers to document shots or share experiences. Lightweight and USB-C rechargeable, it's a modern tool for both play and recording. Discounted price: USD 350 (MSRP USD 380).`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755847814/Camara_Canon-PowerShot-GOLF___06-removebg-preview_au1rtq_a_hflip_cavnwo.png",
    categoryId: 4,
    stock: 5,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
