import 'reset-css';
import './exterrnal-libs/layout/index.css'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.css";
import "./src/components/global.pcss";
import "./src/components/header/header.pcss";
import mobileNav from './src/components/header/header'

document.addEventListener('DOMContentLoaded', () => {
  mobileNav()
});