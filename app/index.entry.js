import 'reset-css';
import './exterrnal-libs/layout/index.css'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.css";
import "./src/components/header/header.pcss";
import "./src/components/header/header.pcss";
import "./src/components/hero/hero.pcss";
import "./src/components/products/products.pcss";
import "./src/components/products/productsItem.pcss";
import "./src/components/products/tag.pcss";
import "./src/components/features/features.pcss";
import "./src/components/features/featuresItem.pcss";
import "./src/components/toolboxApp/toolboxApp.pcss";

import mobileNav from './src/components/header/header'
import productsInteraction from './src/components/products/products'


document.addEventListener('DOMContentLoaded', () => {
  mobileNav()
  productsInteraction()
});