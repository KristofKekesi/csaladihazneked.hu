export default function Page({ params }: { params: { id: string } }) {
	return(
		<div className="w-full flex justify-center">{params.id}</div>
	);
}
