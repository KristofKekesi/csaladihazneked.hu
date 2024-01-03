export default function ExtendedFooter(props: {children: JSX.Element}) {
	return (
		<div className="-mb-6 p-6 grid justify-between gap-x-4 gap-y-2 rounded-t-3xl text-black/75 bg-[#BABEAE]">
			{props.children}
		</div>
	);
}
