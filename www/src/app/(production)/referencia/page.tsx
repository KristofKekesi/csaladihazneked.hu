import { Subtitle, Title } from "@/components/general/Typography";
import CustomGallery from "@/components/general/gallery/CustomGallery";
import { getImages } from "@/lib/filter_data";
import { Image } from "@/types/Image";
import { Metadata } from "next";

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
  const images: Array<Image> = await getImages({ isPartnerImage: false});

  return (
    <main className="flex flex-col just pt-3">
      <Title className="px-6 pb-2">Referencia</Title>
      <Subtitle className="px-6">Kiemelt képek</Subtitle>
      <hr className="pb-4" />
      <CustomGallery className="px-6 pt-2" images={ images } />
    </main>
  );
}
