import { getAllImages, getAllPartners } from "@/lib/api";
import { Subtitle, Title } from "@/components/general/Typography";
import CustomGallery from "@/components/general/gallery/CustomGallery";
import { Metadata } from "next";
import { Partner } from "@/types/Partner";
import { Photo } from "@/types/Photo";


export const metadata: Metadata = {
	title: "Galéria"
};

/**
 * @returns Page for /galeria.
 */

export default async function Galeria() {
  const photos: Array<Photo> = await getAllImages();

  const partners: Array<Partner> = await getAllPartners();
  const partnerImageURLs: Array<string> = partners.map((partner) => { return partner.photo.src; });

  const filteredPhotos = photos.filter((photo) => { return !partnerImageURLs.includes(photo.src);});

  return (
    <main className="flex flex-col just pt-3">
      <Title className="px-6">Galéria</Title>
      <Subtitle className="px-6">Kiemelt képek</Subtitle>
      <hr className="pb-4" />
      <CustomGallery className="px-6 pt-2" images={ filteredPhotos } />
    </main>
  );
}
