import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useCarousel } from "@/components/ui/Carousel";

/**
 * A custom next item component.
 * @param params Basic `HTMLButtonElement` type. 
 * @returns A custom next item component.
 */
export function CustomCarouselNext(params: Partial<HTMLButtonElement>) {
// eslint-disable-next-line no-unused-vars
const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      //ref={ref}
      variant="outline"
      size="icon"
      className={cn(
        "size-8",
        params.className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}

    >
      <ChevronRight className="size-4" />
      <span className="sr-only">Következő</span>
    </Button>
  );
}
/**
 * A custom next item component.
 * @param params Basic `HTMLButtonElement` type. 
 * @returns A custom next item component.
 */
export function CustomCarouselPrev(params: Partial<HTMLButtonElement>) {
	// eslint-disable-next-line no-unused-vars
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<Button
			//ref={ref}
			variant="outline"
			size="icon"
			className={cn(
				"size-8",
				params.className
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}

		>
			<ChevronLeft className="size-4" />
			<span className="sr-only">Előző</span>
		</Button>
	);
}
