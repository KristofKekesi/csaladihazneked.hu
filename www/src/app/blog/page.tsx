import PostBigCarousel from "@/components/blog/PostBigCarousel";
import PostMedium from "@/components/blog/PostMedium";

export default function Blog() {
  return (
    <main className="flex flex-col just pt-3">
      <h1 className="text-2xl font-mono font-bold italic px-6">Blog</h1>
      <h1 className="text-2xl font-mono font-bold italic px-6">Kiemelt bejegyzések</h1>
      <PostBigCarousel className="px-0 xl:px-6" />
      <h1 className="text-2xl font-mono font-bold italic px-6">Minden bejegyzés</h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 pt-6 px-6 gap-3">
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
