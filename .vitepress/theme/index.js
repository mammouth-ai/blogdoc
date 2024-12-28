// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import CustomLayout from "./CustomLayout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: CustomLayout,
};
