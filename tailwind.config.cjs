/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'fade-in':"fade-in 1s linear",
      },
      minHeight:{
        'inboxScreen':"calc(100vh - 60px)"
      },
      flex:{
        "flex-input":"0 1 auto",
      },
      outlineColor:{
        instagram:"#e1306c"//"linear-gradient(45deg,#405de6,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
      },
      textColor:{
        primary: "#0095f6",
        textLink: "#8E8E8E",
      },
      backgroundColor:{
        'login-input': "#fafafa",
        'primary' : "#0095f6",
      },
      backgroundImage:{
        'phonePhoto':"url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
        'sliderPhoto1':"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png')",
        'sliderPhoto2':"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png')",
        'sliderPhoto3':"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png')",
      },
      backgroundPosition:{
        "left-4":"-46px 0px",
      },
      backgroundSize:{
        'fitScreen':"468.32px 634.15px",
      },
    },
  },
  plugins: [],
}
