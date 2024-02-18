import { getAllImages, getAllPartners } from "@/lib/api";
import { Subtitle, Title } from "@/components/general/Typography";
import CustomGallery from "@/components/general/gallery/CustomGallery";
import { Image } from "@/types/Image";
import { Metadata } from "next";
import { Partner } from "@/types/Partner";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export const metadata: Metadata = {
	title: "Referencia"
};

/**
 * @returns Page for /referencia.
 */
export default async function Referencia() {
  const images: Array<Image> = await getAllImages();

  const partners: Array<Partner> = await getAllPartners();
  const partnerImageURLs: Array<string> = partners.map((partner) => { return partner.image.src; });

  const filteredImages = images.filter((image) => { return !partnerImageURLs.includes(image.src);});

  return (
    <main className="flex flex-col just pt-3">
      <Title className="px-6">Referencia</Title>
      <Subtitle className="px-6">Kiemelt képek</Subtitle>
      <hr className="pb-4" />
      <CustomGallery className="px-6 pt-2" images={ filteredImages } />
    </main>
  );
}
