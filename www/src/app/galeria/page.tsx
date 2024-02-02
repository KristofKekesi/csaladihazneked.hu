import { Subtitle, Title } from "@/components/general/Typography";
import CustomGallery from "@/components/general/gallery/CustomGallery";
import { getImages } from "@/lib/api";
import { Metadata } from "next";
import { Photo } from "@/types/Photo";


export const metadata: Metadata = {
	title: "Galéria"
};


export default async function Galeria() {
  const images: Array<Photo> = await getImages();

  return (
    <main className="flex flex-col just pt-3">
      <Title className="px-6">Galéria</Title>
      <Subtitle className="px-6">Kiemelt képek</Subtitle>
      <hr className="pb-4" />
      <CustomGallery className="px-6 pt-2" images={ images } />
    </main>
  );
}
