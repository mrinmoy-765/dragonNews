# React + DaisyUi + Tailwind + Firebase +Env Variables


Commands..................................................................................................................

# npm create vite@latest

# cd dragonNews

# npm i react-router-dom

# npm install tailwindcss @tailwindcss/vite

go to--->vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
plugins: [
tailwindcss(),
],
})

# npm i -D daisyui@beta

Go to --->index.css
@import "tailwindcss";
@plugin "daisyui";

//time format

# npm install moment --save

# npm i react-fast-marquee

# npm install react-icons --save

# npm i firebase
