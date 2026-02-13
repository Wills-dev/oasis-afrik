export const orderInfo = {
  id: "ORD001",
  createdAt: "2025-01-05T09:15:00Z",
  status: "processing",
  addrees: "32 Adebisi Oyenola Street",

  product: {
    id: "PRD001",
    productName: "Raw Cashew Nuts",
    createdAt: "2025-01-05T10:22:00Z",
    status: "processing",
    price: "$250",
    country: "Nigeria",
    minOrder: "10 tons",
    quantity: "50 tons",

    minLead: 7,
    minLeadPeriod: "days",
    maxLead: 14,
    maxLeadPeriod: "days",
    description:
      "High-quality raw cashew nuts sourced directly from Nigerian farmers. Well-dried, clean, and export-ready.",
    productImages: [
      { id: "IMG01", imgUrl: "/assets/dummy/prodImg.jpg" },
      { id: "IMG02", imgUrl: "/assets/dummy/prodImg1.jpg" },
      { id: "IMG03", imgUrl: "/assets/dummy/prodImg2.jpg" },
      { id: "IMG04", imgUrl: "/assets/dummy/prodImg3.jpg" },
      { id: "IMG05", imgUrl: "/assets/dummy/prodImg4.jpg" },
    ],
    category: "Nuts & Seeds",
    rating: 4.5,
    reviews: 20,
  },

  seller: {
    id: "SELL001",
    firstName: "Adewale ",
    lastName: "Farms",
    email: "contact@adewalefarms.com",
    phoneNumber: "+2348012345678",
    country: "Nigeria",
    companyName: "Adewale Agro Exporters Ltd",
  },

  buyer: {
    id: "BUY001",
    firstName: "Global",
    lastName: "Foods Import LLC",
    email: "info@globalfoods.com",
    phoneNumber: "+1 202 555 0192",
    country: "USA",
    companyName: "Global Foods Import LLC",
  },
};
