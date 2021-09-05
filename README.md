====Start====
npm install && npm start



===1.Creat React App===
1.1.npx create-react-app my-app
1.2.cd my-app
1.3.npm start


===2.TalwindCSS===
2.1.npm install tailwindcss
2.2.npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^
2.3.npm install @craco/craco
2.4. {
    // ...
    "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
2.5.module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

2.6.npx tailwindcss-cli@latest init
2.7.  module.exports = {
   purge: [],
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }

2.8./* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

3.====Redux====
3.1.npm install react-redux
3.2.const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;