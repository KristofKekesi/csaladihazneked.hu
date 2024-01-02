import PostBigCarousel from "@/components/blog/PostBigCarousel";
import PostMedium from "@/components/blog/PostMedium";

export default function Blog() {
  return (
    <main className="flex flex-col just px-6 pt-3">
      <h1 className="text-2xl font-mono font-bold italic">Blog</h1>
      <p>Itt fognak megjelenni a blogos bejegyzések.</p>
      <h1 className="text-2xl font-mono font-bold italic">Kiemelt bejegyzések</h1>
      <PostBigCarousel />
      <h1 className="text-2xl font-mono font-bold italic">Minden bejegyzés</h1>
      <section className="grid grid-cols-2 pt-6 gap-3">
        <PostMedium bgOpacity="bg-opacity-100" post={{
            id: 0,
            title: "Harmadik bejegyzés",
            description: "Mi is ez itt?",
            imageURL: "",
            content: ""
          }} />
          <PostMedium bgOpacity="bg-opacity-100" post={{
            id: 0,
            title: "Harmadik bejegyzés",
            description: "Mi is ez itt?",
            imageURL: "",
            content: ""
          }} />
          <PostMedium bgOpacity="bg-opacity-80" post={{
            id: 0,
            title: "Második bejegyzés",
            description: "Mi is ez itt?",
            imageURL: "",
            content: ""
          }} />
          <PostMedium bgOpacity="bg-opacity-70" post={{
            id: 0,
            title: "Első bejegyzés",
            description: "Mi is ez itt?",
            imageURL: "",
            content: ""
          }} />
      </section>
    </main>
  )
}
