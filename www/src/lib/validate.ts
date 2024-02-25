import { z } from "zod";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type emailAddressParams = {
	emailAddress: string
}

/**
 * Function to validate email addresses with.
 * @param emailAddress The address that we want to validate. 
 * @returns Success represented as a `Boolean`.
 */
export function validateEmailAddress({ emailAddress }: emailAddressParams) : Boolean {
	const validateEmailAddress = z.object({
		emailAddress: z.string().regex(RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
	});

	if (validateEmailAddress.safeParse({ emailAddress }).success) {
		return true;
	} else {
		return false;
	}
}

type subjectParams = {
	subject: string
}

/**
 * Function to validate subjects with.
 * @param subject The subject that we want to validate. 
 * @returns Success represented as a `Boolean`.
 */
export function validateSubject({ subject }: subjectParams) : Boolean {
	if (subject !== "" && subject !== undefined) {
		return true;
	} else {
		return false;
	}
}

type nameParams = {
	name: string
}

/**
 * Function to validate names with.
 * @param name The name that we want to validate. 
 * @returns Success represented as a `Boolean`.
 */
export function validateName({ name }: nameParams) : Boolean {
	if (name !== "" && name !== undefined) {
		return true;
	} else {
		return false;
	}
}

type messageParams = {
	message: string
}

/**
 * Function to validate names with.
 * @param message The message that we want to validate. 
 * @returns Success represented as a `Boolean`.
 */
export function validateMessage({ message }: messageParams) : Boolean {
	const validateMessage = z.object({
		message: z.string().min(16)
	});

	if (validateMessage.safeParse({ message }).success) {
		return true;
	} else {
		return false;
	}
}
