import { type Params as contactEmailHtmlParams } from "@/lib/send_message";
import { type Params as newsletterEmailHtmlParams } from "@/lib/send_newsletter";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A function to generate the contact form email's HTML.
 * @param url An optional string of the url from where the contact form was filled.
 * @param emailAddress The email address of the visitor.
 * @param name The name of the visitor.
 * @param message The message of the visitor.
 */
export function contactEmailHtml(params: contactEmailHtmlParams): string {
	return (`
		<style>
			* { padding: 0; margin: 0; }
			.mt-6 { margin-top: 1.5rem/* 24px */; }
			.px-6 { padding-left: 1.5rem; /* 24px */ padding-right: 1.5rem; /* 24px */ }
			.pl-6 { padding-left: 1.5rem; /* 24px */ }
			.pr-6 { padding-right: 1.5rem; /* 24px */ }
			.pt-6 { padding-top: 1.5rem; /* 24px */ }
			.pt-3 { padding-top: 0.75rem; /* 12px */ }
			.py-3 { padding-top: 0.75rem; /* 12px */ padding-bottom: 0.75rem; /* 12px */ }
			.gap-4 { gap: 1rem/* 16px */; }
			.flex { display: flex; }
			.flex-col { flex-direction: column; }
			.items-center { align-items: center; }
			.justify-between { justify-content: space-between; }
			.bg-customGreen { background-color: #BABEAE; }
			.bg-customBrown { background-color: #B0A187; }
			.bg-white { background-color: #FFFFFF; }
			.font-serif { font-family: ui-serif, Georgia, 
				Cambria, "Times New Roman", Times, serif; }
			.font-sans { font-family: ui-sans-serif, system-ui, sans-serif, 
				"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
			.text-black/75 { color: rgb(0, 0, 0 / 0.75); }
			.font-bold { font-weight: 700; }
			.sticky { position: sticky; }
			.top-0 { top: 0; }
			.s-6 { height: 1.5rem/* 24px */; width: 1.5rem/* 24px */; }
			.w-full { width: 100% }
			.h-full { height: 100% }
			.rounded-tl-3xl { border-top-left-radius: 1.5rem/* 24px */; }
			.rounded-tr-3xl { border-top-right-radius: 1.5rem/* 24px */; }

			a.nodecor:link { text-decoration: none; color: #000000; } 
			a.nodecor:visited { text-decoration: none; color: #000000; } 
			a.nodecor:hover { text-decoration: none; color: #000000; } 
			a.nodecor:active { text-decoration: none; color: #000000; }
		</style>
		
		<div class="w-full h-full bg-white">
			<div class="flex flex-col text-black/75 sticky top-0 font-bold font-serif">
				<div class="bg-customGreen py-3 w-full flex items-center">
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }" class="nodecor px-6">
						csaladihazneked.hu
					</a>
				</div>
				<div class="flex justify-between">
					<div class="s-6 bg-customGreen">
						<div class="w-full h-full rounded-tl-3xl bg-white"></div>
					</div>
					<div class="s-6 bg-customGreen">
						<div class="w-full h-full rounded-tr-3xl bg-white"></div>
					</div>
				</div>
			</div>

			<div class="flex flex-col px-6 font-sans">
				<p>
					<span class="font-bold">Kitöltés helye</span>: 
					<a href="${params.url}">${params.url}</a>
				</p>
				<p>
					<span class="font-bold">Emailcím</span>: 
					<a href="mailto:${params.emailAddress}">${params.emailAddress}</a>
				</p>
				<p><span class="font-bold">Név</span>: ${params.name}</p>
				<p class="pt-6 font-bold">Üzenet:</p>
				<p>${params.message}</p>
			</div>

			<div class="flex justify-between rounded-tl-3xl 
			rounded-tr-3xl mt-6 py-3 bg-customBrown font-sans">
				<div class="pl-6 pt-3">
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }/hirlevel" class="nodecor">
						Leiratkozás
					</a>
				</div>
				<div class="pr-6 pt-3 flex gap-4">
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }/referencia" class="nodecor">
						Referencia
					</a>
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }/tervrajzok" class="nodecor">
						Tervrajzok
					</a>
				</div>
			</div>
		</>
	`);
}

/**
 * A function to generate the contact form email's HTML.
 * @param subject The subject of the newsletter issue.
 * @param text The content of the newsletter issue.
 */
export function newsletterEmailHtml(params: newsletterEmailHtmlParams): string {
	return (`
		<style>
			* { padding: 0; margin: 0; }
			.mt-6 { margin-top: 1.5rem/* 24px */; }
			.px-6 { padding-left: 1.5rem; /* 24px */ padding-right: 1.5rem; /* 24px */ }
			.pl-6 { padding-left: 1.5rem; /* 24px */ }
			.pr-6 { padding-right: 1.5rem; /* 24px */ }
			.pt-6 { padding-top: 1.5rem; /* 24px */ }
			.pt-3 { padding-top: 0.75rem; /* 12px */ }
			.py-3 { padding-top: 0.75rem; /* 12px */ padding-bottom: 0.75rem; /* 12px */ }
			.gap-4 { gap: 1rem/* 16px */; }
			.flex { display: flex; }
			.flex-col { flex-direction: column; }
			.items-center { align-items: center; }
			.justify-between { justify-content: space-between; }
			.bg-customGreen { background-color: #BABEAE; }
			.bg-customBrown { background-color: #B0A187; }
			.bg-white { background-color: #FFFFFF; }
			.font-serif { font-family: ui-serif, Georgia, 
				Cambria, "Times New Roman", Times, serif; }
			.font-sans { font-family: ui-sans-serif, system-ui, sans-serif, 
				"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
			.text-black/75 { color: rgb(0, 0, 0 / 0.75); }
			.font-bold { font-weight: 700; }
			.sticky { position: sticky; }
			.top-0 { top: 0; }
			.s-6 { height: 1.5rem/* 24px */; width: 1.5rem/* 24px */; }
			.w-full { width: 100% }
			.h-full { height: 100% }
			.rounded-tl-3xl { border-top-left-radius: 1.5rem/* 24px */; }
			.rounded-tr-3xl { border-top-right-radius: 1.5rem/* 24px */; }

			a.nodecor:link { text-decoration: none; color: #000000; } 
			a.nodecor:visited { text-decoration: none; color: #000000; } 
			a.nodecor:hover { text-decoration: none; color: #000000; } 
			a.nodecor:active { text-decoration: none; color: #000000; }
		</style>
		
		<div class="w-full h-full bg-white">
			<div class="flex flex-col text-black/75 sticky top-0 font-bold font-serif">
				<div class="bg-customGreen py-3 w-full flex items-center">
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }" class="nodecor px-6">
						csaladihazneked.hu
					</a>
				</div>
				<div class="flex justify-between">
					<div class="s-6 bg-customGreen">
						<div class="w-full h-full rounded-tl-3xl bg-white"></div>
					</div>
					<div class="s-6 bg-customGreen">
						<div class="w-full h-full rounded-tr-3xl bg-white"></div>
					</div>
				</div>
			</div>

			<div class="flex flex-col px-6 font-sans">
				<p class="font-bold">
					${ params.subject }
				</p>
				<p class="pt-6">${ params.message }</p>
			</div>

			<div class="flex justify-between rounded-tl-3xl 
			rounded-tr-3xl mt-6 py-3 bg-customBrown font-sans">
				<div class="pl-6 pt-3">
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }/hirlevel" class="nodecor">
						Leiratkozás
					</a>
				</div>
				<div class="pr-6 pt-3 flex gap-4">
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }/referencia" class="nodecor">
						Referencia
					</a>
					<a href="${ process.env.NEXT_PUBLIC_DOMAIN }/tervrajzok" class="nodecor">
						Tervrajzok
					</a>
				</div>
			</div>
		</>
	`);
}
