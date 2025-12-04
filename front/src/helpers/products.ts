interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export const productsToPreLoad: IProduct[] = [
  {
    name: "Canon EOS 250 5D",
    price: 3500,
    description:
      "A professional full-frame DSLR with a 30.4 MP CMOS sensor and DIGIC 6+ processor. Delivers excellent image quality, wide dynamic range, and reliable autofocus with Dual Pixel CMOS AF. Shoots 4K video at 30fps and continuous bursts up to 7fps. Features a weather-sealed magnesium alloy body for durability. Offers Wi-Fi, GPS, and touchscreen control. A workhorse widely used in weddings, landscapes, and portrait photography.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755817767/Camara_Canon_EOS_250DEF-S18-55mm_f4-5.6-removebg-preview_awoojs.png",
    categoryId: 1,
    stock: 0,
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
    stock: 0,
  },
  {
    name: "Canon PowerShot SX740 HS",
    price: 450,
    description:
      "Compacta avanzada con zoom óptico de 40x (equivalente a 24-960mm). Sensor de 20.3 MP y procesador DIGIC 8 garantizan buena calidad en viajes. Capaz de grabar video 4K y con conectividad Wi-Fi y Bluetooth para compartir al instante. La pantalla abatible de 180° es ideal para selfies y vlogs. Ligera y práctica, pensada para viajeros que desean versatilidad sin llevar equipo pesado.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502198/Canon_Powershot_SX70-removebg-preview_gmkmjq.png",
    categoryId: 1,
    stock: 0,
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
    name: "Canon EOS R5",
    price: 3900,
    description:
      "Una cámara mirrorless profesional de fotograma completo con sensor de 45 MP. Ofrece un rango dinámico impresionante y Dual Pixel CMOS AF II con seguimiento avanzado. Captura video 8K RAW y 4K hasta 120fps, ideal para creadores híbridos. Su estabilización en el cuerpo de hasta 8 pasos permite disparos a mano con nitidez. Construcción robusta y sellada contra el clima, perfecta para fotógrafos de naturaleza, bodas y cineastas exigentes.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1755817705/C%C3%A1mara_Mirrorless_Canon_EOS_R50__negro-removebg-preview_fce7zp.png",
    categoryId: 1,
    stock: 18,
  },

  {
    name: "Canon EOS M50 Mark II",
    price: 800,
    description:
      "Mirrorless compacta con sensor APS-C de 24.1 MP. Popular entre creadores de contenido por su video 4K, enfoque rápido y pantalla táctil articulada. Incluye conectividad Wi-Fi y soporte para transmisión en vivo directa a YouTube. El visor electrónico integrado y su cuerpo liviano la hacen portátil y versátil. Excelente para vloggers, fotógrafos viajeros y quienes buscan calidad superior a un smartphone.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502028/Canon_Eos_M50-removebg-preview_wrbse5.png",
    categoryId: 1,
    stock: 8,
  },
  {
    name: "Canon VIXIA HF G20",
    price: 1150,
    description:
      "Full HD camcorder with a 1/3-inch HD CMOS Pro sensor delivering excellent low-light performance. Features a 10x optical zoom lens (≈30.4–304 mm equiv.), optical image stabilization, and a wide dynamic range. Dual SD card slots allow relay or backup recording. Offers manual controls for focus, exposure, and white balance, plus assignable buttons for custom workflows. Compact and reliable—ideal for indie filmmakers, education, and documentary work.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502570/Canon_VIXIA_HF_G20_camcorder_-removebg-preview_blazuq.png",
    categoryId: 2,
    stock: 12,
  },

  {
    name: "Canon XA10",
    price: 980,
    description:
      "Compact professional Full HD camcorder with a 1/3-inch HD CMOS Pro sensor. Offers 10x optical zoom (≈30.4–304 mm equiv.), Wide DR Gamma, and infrared mode for extreme low-light recording. Built-in 64 GB flash memory plus dual SD card slots ensure extended recording times. Includes detachable handle with dual XLR inputs for professional audio capture. Lightweight (~775 g) and discreet—popular among journalists and event videographers.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502606/Canon_Xa10_camcorder_-removebg-preview_rumfps.png",
    categoryId: 2,
    stock: 14,
  },

  {
    name: "Canon IVISHFM41RD",
    price: 690,
    description:
      "Mid-range consumer camcorder (invented model) featuring a 1/4-inch CMOS sensor and DIGIC DV 4 processor. Offers 10x optical zoom lens (≈35–350 mm equiv.), Intelligent IS, and Full HD recording in AVCHD format. Includes 32 GB internal flash memory and SD card expansion. Compact design with a 3-inch touchscreen LCD, HDMI output, and easy sharing options. Designed for families and hobbyists seeking reliable everyday video recording.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502646/IVISHFM41RD_10x_camcorder_-removebg-preview_cwdauf.png",
    categoryId: 2,
    stock: 0,
  },

  {
    name: "Canon VIXIA HF G70",
    price: 2375,
    description:
      "Advanced 4K UHD camcorder with a 1/2.3-inch CMOS sensor and DIGIC DV 6 processor. Features 20x optical zoom (≈29–601 mm), 5-axis stabilization, and a circular 8-blade iris for cinematic bokeh. Records 4K up to 30fps and FHD 60p in MP4 or XF-AVC formats. Dual SD card slots enable relay or simultaneous backup. Adds infrared shooting, OSD timestamp, and USB-C UVC livestreaming. Versatile tool for events, run-and-gun production, and corporate video.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502684/Vixia_HF_G70_camcorder_-removebg-preview_iz1a8n.png",
    categoryId: 2,
    stock: 11,
  },

  {
    name: "Canon VIXIA HF S20",
    price: 820,
    description:
      "Full HD consumer camcorder with a 1/2.6-inch CMOS sensor and DIGIC DV III processor. Equipped with a 10x optical zoom lens (≈30.4–304 mm), optical IS, and Dual Recording mode (AVCHD + MP4). Features 32 GB built-in flash memory plus dual SD card slots. Manual control dial, touchscreen LCD, and mini-HDMI output. Compact, reliable, and user-friendly—well-suited for home videographers and advanced enthusiasts.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502736/VIXIA_HF_S20_camcorder_-removebg-preview_pfjlnx.png",
    categoryId: 2,
    stock: 0,
  },

  {
    name: "Canon XA11 Compact",
    price: 1280,
    description:
      "Compact professional Full HD camcorder with a 1/2.84-inch HD CMOS Pro sensor and DIGIC DV 4 processor. Offers 20x optical zoom lens (≈26.8–576 mm), Wide DR Gamma, and advanced Dynamic IS for handheld stability. Detachable handle with XLR audio inputs for professional sound. Dual SD card slots, infrared mode, and assignable function buttons. Portable yet packed with pro features, designed for journalists, corporate creators, and wedding videographers.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502780/XA11_compacta_camcorder_-removebg-preview_isb4ha.png",
    categoryId: 2,
    stock: 0,
  },

  {
    name: "Canon XF605 4K",
    price: 4300,
    description:
      "Professional 4K UHD camcorder with a 1.0-inch CMOS sensor and DIGIC DV 7 processor. Records in XF-AVC and MP4 4:2:2 10-bit, up to 4K60p and FHD 120p. Features Dual Pixel CMOS AF II with advanced eye and subject tracking, 15x optical zoom (≈25.5–382.5 mm), and image stabilization. Built-in ND filters, dual SD card slots, 12G-SDI, HDMI, and XLR audio inputs make it broadcast-ready. Compact but powerful—ideal for ENG, documentaries, and live events.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759502816/XF605_4K_camcorder_-removebg-preview_ibq3cx.png",
    categoryId: 2,
    stock: 6,
  },

  {
    name: "Canon PowerShot V10",
    price: 420,
    description:
      "Compacta cámara diseñada para creadores de contenido y vlogging. Sensor CMOS de 1 pulgada con grabación en 4K UHD hasta 30 fps y Full HD 60 fps. Incluye micrófonos estéreo integrados, estabilización digital, pantalla táctil abatible y soporte incorporado tipo trípode. Conectividad Wi-Fi/Bluetooth para fácil transmisión en redes sociales y portabilidad total.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1755818272/Videocamara_Canon_PowerShot_V10_Essential_Kit__Silver_1_-removebg-preview_yfjfp6.png",
    categoryId: 2,
    stock: 15,
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
    name: "Canon SELPHY CP900",
    price: 180,
    description:
      'Compacta impresora fotográfica inalámbrica con tecnología de sublimación de tinta. Compatible con Wi-Fi, permite imprimir directamente desde smartphones, tablets y cámaras. Ofrece impresiones de 4"x6" resistentes al agua y al paso del tiempo. Ideal para uso doméstico y eventos pequeños.',
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503301/Canon_SELPHY_CP900_printer_-removebg-preview_ersbvm.png",
    categoryId: 3,
    stock: 12,
  },
  {
    name: "Canon PIXMA G6020",
    price: 380,
    description:
      "Impresora multifuncional MegaTank de alto rendimiento con sistema de tinta recargable. Imprime hasta 6,000 páginas en negro y 7,700 en color por recarga. Incluye funciones de copia y escaneo. Conectividad Wi-Fi, Ethernet y compatibilidad con AirPrint y Google Cloud Print.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503353/PIXMA_G6020_printer_-removebg-preview_hd09at.png",
    categoryId: 3,
    stock: 20,
  },
  {
    name: "Canon PIXMA TS9550",
    price: 310,
    description:
      "Impresora multifuncional A3 compacta con impresión a doble cara automática, escaneo y copia. Conectividad inalámbrica avanzada, compatible con AirPrint, Mopria y la app Canon PRINT. Ideal para oficinas en casa y proyectos creativos gracias a su soporte de distintos tipos de papel.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503404/Pixma_TS9550_printer_-removebg-preview_einuhw.png",
    categoryId: 3,
    stock: 15,
  },
  {
    name: "Canon PROGRAF TC-20",
    price: 1150,
    description:
      "Plotter de 24 pulgadas diseñado para impresiones CAD, posters y presentaciones gráficas. Incluye sistema de tinta pigmentada en botellas recargables, alta precisión en líneas y colores vibrantes. Compacto y silencioso, perfecto para oficinas pequeñas o estudios de arquitectura.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503471/Plotter_Canon_Imageprograf_Tc-20_printer_-removebg-preview_1_c9vatr.png",
    categoryId: 3,
    stock: 6,
  },

  {
    name: "PIXMA PRO-200S A3",
    price: 645,
    description: `High-quality A3+ (13″) wireless inkjet photo printer using an 8-color dye-based ink system. Capable of vibrant, borderless prints up to 13"x19". Features fast print speeds (~90 s for A3+, ~53 s for 8"x10") and skew correction technology. Compact footprint with 3″ LCD for navigation. Great for photographers and graphic artists seeking gallery-quality prints without oversize equipment.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818671/Impresora_fotogr%C3%A1fica_inal%C3%A1mbrica_A3__en_color_Canon_PIXMA_PRO-200S_1_-removebg-preview_xx9afu.png",
    categoryId: 3,
    stock: 0,
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
    stock: 0,
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
    name: " Canon IS Binoculars",
    price: 980,
    description: `Compact and lightweight, the Canon 10x30 IS binoculars are ideal for travel, birdwatching, and sporting events. They feature Canon's Image Stabilization technology, which reduces hand-shake and delivers steady views even at 10x magnification. Multi-coated lenses improve brightness and contrast, offering sharp images with good color fidelity. Their ergonomic design makes them comfortable to use for extended periods.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818423/Prism%C3%A1ticos_Canon_10x30_IS-removebg-preview_dxtr1k.png",
    categoryId: 4,
    stock: 0,
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
    stock: 0,
  },
  {
    name: "Canon EF 70-200",
    price: 1800,
    description: `A professional-grade telephoto zoom, the Canon EF 70-200 mm f/2.8L IS II USM is one of the most versatile lenses in Canon's lineup. It features a constant f/2.8 aperture, delivering excellent low-light performance and smooth background blur. The 4-stop Image Stabilizer ensures sharp handheld shots, while the ultrasonic motor (USM) provides fast and accurate autofocus. Built with L-series optics and weather sealing, it performs in demanding conditions, making it a go-to lens for sports, wildlife, and portrait photographers.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818462/Objetivo_Canon_EF_70-200mm_f2.8L_IS_III_USM_3_-removebg-preview_yow6n6.png",
    categoryId: 5,
    stock: 19,
  },
  {
    name: "Canon RF 50-STM",
    price: 150,
    description: `Compact and lightweight, the Canon RF 50 mm f/1.8 STM is an affordable prime lens for Canon's RF mirrorless system. Its wide f/1.8 aperture produces shallow depth of field and beautiful bokeh, making it excellent for portraits and low-light photography. The stepping motor (STM) delivers smooth, quiet autofocus—perfect for both stills and video. Despite its small size, it offers sharp optics and reliable performance, making it a must-have starter lens for beginners and a handy addition for professionals.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818448/Objetivo_Canon_RF_50mm_F1.8_STM_3_-removebg-preview_jfw93u.png",
    categoryId: 5,
    stock: 18,
  },
  {
    name: "Canon RF 200",
    price: 2800,
    description: `The Canon RF 200-800mm is a versatile super-telephoto zoom lens designed for EOS R mirrorless cameras. It features built-in image stabilization that helps achieve sharp results, even when handheld at long focal lengths. The fast and quiet Nano USM autofocus system makes it suitable for both photography and video. Its wide focal range is perfect for wildlife, sports, and outdoor scenes. Despite its reach, it remains relatively portable and weather-resistant for outdoor use.`,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/f_webp/v1755818438/Objetivo_Canon_RF_200-800mm_F6.3-9_IS_USM_2_-removebg-preview_f0unuh.png",
    categoryId: 5,
    stock: 25,
  },
  {
    name: "Canon RF 28mm F2.8 STM",
    price: 380,
    description:
      "Objetivo gran angular compacto y ligero con montura RF. Apertura máxima f/2.8 ideal para fotografía callejera, de viajes y paisajes. Su diseño STM permite un enfoque automático suave y silencioso, óptimo también para video.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503659/Canon_RF_28mm_F2.8_STM_obj_-removebg-preview_xgnep8.png",
    categoryId: 5,
    stock: 0,
  },
  {
    name: "Canon CN10X25 IAS S",
    price: 24000,
    description:
      "Objetivo cine zoom 25-250mm T2.95-3.95 con montura EF. Diseñado para producciones profesionales en 4K y 8K, ofrece calidad de imagen cinematográfica, servo motorizado intercambiable y excelente rango de zoom.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503724/CN10X25_IAS_S_obj_-removebg-preview_umz2wl.png",
    categoryId: 5,
    stock: 3,
  },
  {
    name: "Canon CN-R14mm T3.1 L F",
    price: 5400,
    description:
      "Objetivo prime de cine de 14mm con apertura T3.1. Montura RF, construcción robusta y diseño optimizado para producciones cinematográficas en resoluciones hasta 8K. Ofrece un ángulo ultra gran angular con mínima distorsión.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503771/CN-R14mm_T3.1_L_F__obj_-removebg-preview_fnzbb5.png",
    categoryId: 5,
    stock: 0,
  },
  {
    name: "Canon RF DUAL FISHEYE",
    price: 2100,
    description:
      "Objetivo especial de la serie L diseñado para captura VR 180°. Óptica dual de 5.2mm con apertura f/2.8, ideal para experiencias inmersivas de realidad virtual en 3D. Compatible con cámaras Canon RF full-frame.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503818/RF_5.2mm_F2.8L_DUAL_FISHEYE_obj_-removebg-preview_o4kshx.png",
    categoryId: 5,
    stock: 0,
  },
  {
    name: "Canon RF-S IS STM",
    price: 500,
    description:
      "Zoom versátil para cámaras APS-C RF. Cobertura desde gran angular hasta teleobjetivo. Cuenta con estabilización de imagen de hasta 4.5 pasos y motor STM para un enfoque silencioso. Perfecto para fotografía de viajes y uso diario.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759503872/RF-S_18-150mm_F3.5-6.3_IS_STM_obj_-removebg-preview_jhjnup.png",
    categoryId: 5,
    stock: 18,
  },
  {
    name: "Canon TS-E 90mm f2.8L Macro",
    price: 1400,
    description:
      "Objetivo macro con control de inclinación y desplazamiento. Longitud focal de 90mm y apertura f/2.8, ideal para fotografía de producto, arquitectura y control preciso de la perspectiva. Pertenece a la gama profesional L.",
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1759504020/TS-E_90mm_f2.8L_Macro_obj_-removebg-preview_y1ycdw.png",
    categoryId: 5,
    stock: 9,
  },
];
