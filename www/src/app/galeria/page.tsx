import { Subtitle, Title } from "@/components/general/Typography";
import CustomGallery from "@/components/general/gallery/CustomGallery";
import { Photo } from "@/types/Photo";
import { Metadata } from "next";

const images: Array<Photo> = [
  {
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/1.png",
    "width": 4078,
    "height": 5437
},
{
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/2.png",
    "width": 3715,
    "height": 4955
},
{
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/3.png",
    "width": 3715,
    "height": 4955
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/1.png",
  "width": 4078,
  "height": 5437
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/2.png",
  "width": 3715,
  "height": 4955
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/3.png",
  "width": 3715,
  "height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 4078,
"height": 5437
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 1300,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 4078,
"height": 5437
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 3715,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 2000,
"height": 5437
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 3715,
"height": 3000
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/1.png",
  "width": 4078,
  "height": 5437
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/2.png",
  "width": 3715,
  "height": 4955
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/3.png",
  "width": 3715,
  "height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 4078,
"height": 5437
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 3715,
"height": 4955
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 4078,
"height": 5437
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955,
},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 1300,
"height": 4955,

},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 4078,
"height": 5437,

},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955,

},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 3715,
"height": 4955,

},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/1.png",
"width": 2000,
"height": 5437,

},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/2.png",
"width": 3715,
"height": 4955,

},
{
"title": "Tabló portré",
"alt": "Tabló portré",
"src": "/images/3.png",
"width": 3715,
"height": 3000,

},
    {
        "title": "Tabló portré",
        "alt": "Tabló portré",
        "src": "/images/1.png",
        "width": 4078,
        "height": 5437,
        
    },
    {
        "title": "Tabló portré",
        "alt": "Tabló portré",
        "src": "/images/2.png",
        "width": 3715,
        "height": 4955,
        
    },
    {
        "title": "Tabló portré",
        "alt": "Tabló portré",
        "src": "/images/3.png",
        "width": 3715,
        "height": 4955,
        
    },
    {
      "title": "Tabló portré",
      "alt": "Tabló portré",
      "src": "/images/1.png",
      "width": 4078,
      "height": 5437,
      
  },
  {
      "title": "Tabló portré",
      "alt": "Tabló portré",
      "src": "/images/2.png",
      "width": 3715,
      "height": 4955,
      
  },
  {
      "title": "Tabló portré",
      "alt": "Tabló portré",
      "src": "/images/3.png",
      "width": 3715,
      "height": 4955,
      
  },
  {
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/1.png",
    "width": 4078,
    "height": 5437,
    
},
{
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/2.png",
    "width": 3715,
    "height": 4955,
    
},
{
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/3.png",
    "width": 1300,
    "height": 4955,
    
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/1.png",
  "width": 4078,
  "height": 5437,
  
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/2.png",
  "width": 3715,
  "height": 4955,
  
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/3.png",
  "width": 3715,
  "height": 4955,
  
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/1.png",
  "width": 2000,
  "height": 5437,
  
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/2.png",
  "width": 3715,
  "height": 4955,
  
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/3.png",
  "width": 3715,
  "height": 3000,
  
}
];


export const metadata: Metadata = {
	title: "Galéria"
};


export default function Galeria() {
  return (
    <main className="flex flex-col just pt-3">
      <Title className="px-6">Galéria</Title>
      <Subtitle className="px-6">Kiemelt képek</Subtitle>
      <hr className="pb-4" />
      <CustomGallery className="px-6 pt-2" images={images} />
    </main>
  );
}
