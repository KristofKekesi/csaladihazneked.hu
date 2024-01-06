import CustomGallery from "@/components/gallery/CustomGallery";

const images = [
    {
        "title": "Tabló portré",
        "alt": "Tabló portré",
        "src": "/images/1.png",
        "width": 4078,
        "height": 5437,
        "genre": ["portre"]
    },
    {
        "title": "Tabló portré",
        "alt": "Tabló portré",
        "src": "/images/2.png",
        "width": 3715,
        "height": 4955,
        "genre": ["portre"]
    },
    {
        "title": "Tabló portré",
        "alt": "Tabló portré",
        "src": "/images/3.png",
        "width": 3715,
        "height": 4955,
        "genre": ["portre"]
    },
    {
      "title": "Tabló portré",
      "alt": "Tabló portré",
      "src": "/images/1.png",
      "width": 4078,
      "height": 5437,
      "genre": ["portre"]
  },
  {
      "title": "Tabló portré",
      "alt": "Tabló portré",
      "src": "/images/2.png",
      "width": 3715,
      "height": 4955,
      "genre": ["portre"]
  },
  {
      "title": "Tabló portré",
      "alt": "Tabló portré",
      "src": "/images/3.png",
      "width": 3715,
      "height": 4955,
      "genre": ["portre"]
  },
  {
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/1.png",
    "width": 4078,
    "height": 5437,
    "genre": ["portre"]
},
{
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/2.png",
    "width": 3715,
    "height": 4955,
    "genre": ["portre"]
},
{
    "title": "Tabló portré",
    "alt": "Tabló portré",
    "src": "/images/3.png",
    "width": 1300,
    "height": 4955,
    "genre": ["portre"]
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/1.png",
  "width": 4078,
  "height": 5437,
  "genre": ["portre"]
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/2.png",
  "width": 3715,
  "height": 4955,
  "genre": ["portre"]
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/3.png",
  "width": 3715,
  "height": 4955,
  "genre": ["portre"]
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/1.png",
  "width": 2000,
  "height": 5437,
  "genre": ["portre"]
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/2.png",
  "width": 3715,
  "height": 4955,
  "genre": ["portre"]
},
{
  "title": "Tabló portré",
  "alt": "Tabló portré",
  "src": "/images/3.png",
  "width": 3715,
  "height": 3000,
  "genre": ["portre"]
}
];

export default function Galeria() {
  return (
    <main className="flex flex-col just px-6 pt-3">
      <h1 className="text-2xl font-mono font-bold italic">Galéria</h1>
      <p>Itt fognak megjelenni a feltöltött képek.</p>
      <CustomGallery images={images} />
    </main>
  )
}
