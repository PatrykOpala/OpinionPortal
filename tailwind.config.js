/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
	    colors:{
	          "green": "#0daf0d",
            "white": "#eeeeee",
            "white-hover": "#fdfdfd",
            "dark-green": "#066506",
            "border-white": "#f7f7f7a9"
        },
      },
  },
  plugins: [],
}

