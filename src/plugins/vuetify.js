// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  icons: {
    iconfont: "fa" || "md" || "mdi",
  },
  theme: {
    dark: {
      background: "#111111",
    },
  },
});
