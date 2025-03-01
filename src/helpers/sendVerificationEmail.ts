import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from '@/types/ApiResponse';

//sdgfgdghfkjsffffsdf
//sggggggggggggggggggggggggggggggggggg
export async function sendVerificationEmail(email: string, username: string, verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Mystery Message Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return { success: true, message: 'Verification email sent successfully.' };
    } catch (emailError) {
        console.log("Email Sendind Verification Erorr", emailError)
        return { success: false, message: "Failed to send Verification email" }
    }
}