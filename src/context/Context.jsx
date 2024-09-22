import { createContext, useContext } from "react";

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const link1 = [
    { name: "Shopify" },
    { name: "BigCommerce" },
    { name: "WooCommerce" },
    { name: "Magento" },
    { name: "Wix" },
    { name: "Squarespace" },
    { name: "PrestaShop" },
    { name: "OpenCart" },
    { name: "Weebly" },
    { name: "Ecwid" },
    { name: "Zen Cart" },
    { name: "Joomla" },
    { name: "Etsy" },
  ];

  const link2 = [
    { name: "Blogs" },
    { name: "Guides" },
    { name: "Products" },
    { name: "Case Studies" },
    { name: "Tutorials" },
    { name: "FAQs" },
    { name: "Pricing" },
    { name: "Testimonials" },
    { name: "Features" },
    { name: "Resources" },
    { name: "Support" },
    { name: "Events" },
    { name: "News" },
  ];

  const link3 = [
    { name: "Custom T-shirt" },
    { name: "Custom Hoodie" },
    { name: "Bulk Order" },
    { name: "Custom Mugs" },
    { name: "Custom Phone Cases" },
    { name: "Custom Stickers" },
    { name: "Custom Posters" },
    { name: "Custom Hats" },
    { name: "Custom Bags" },
    { name: "Custom Jackets" },
    { name: "Custom Shoes" },
    { name: "Custom Socks" },
    { name: "Custom Accessories" },
  ];

  const link4 = [
    { name: "Print on Demand" },
    { name: "Print Providers" },
    { name: "About Us" },
    { name: "Contact Us" },
    { name: "Shipping Information" },
    { name: "Return Policy" },
    { name: "Privacy Policy" },
    { name: "Terms of Service" },
    { name: "Affiliate Program" },
    { name: "Careers" },
    { name: "Sustainability" },
    { name: "Partnerships" },
    { name: "Press" },
  ];

  return (
    <LinkContext.Provider value={{ link1, link2, link3, link4 }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinks = () => {
  return useContext(LinkContext);
};
