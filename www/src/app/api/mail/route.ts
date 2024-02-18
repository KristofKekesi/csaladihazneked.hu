import { NextRequest } from "next/server";
import { sendMail } from "./action";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export async function GET(request: NextRequest) {
	// Getting data from the URL.
	const searchParams = request.nextUrl.searchParams;
	const emailAddress = searchParams.get("email-address");
	const name = searchParams.get("name");
	const message = searchParams.get("message");

	// Calling MailGun API. (https://www.mailgun.com/)
	const response = await sendMail({
		emailAddress: emailAddress!,
		name: name!,
		message: message!
	});

	return Response.json(response);
}
