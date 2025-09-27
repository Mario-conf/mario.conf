'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactEmail - A function that handles sending the contact email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<{ success: boolean }> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    // In a real-world scenario, you would integrate an email sending service here
    // For example, using a library like Nodemailer with a service like SendGrid or Gmail.
    // Since we can't do that directly here, we'll log the details to the console
    // as a simulation of the email being sent.

    console.log('--- New Contact Form Submission ---');
    console.log(`Recipient: mario04asir@gmail.com`);
    console.log(`From: ${input.name} <${input.email}>`);
    console.log('Message:');
    console.log(input.message);
    console.log('------------------------------------');

    // Here you would add the actual email sending logic.
    // For example:
    //
    // const emailer = new EmailService(process.env.EMAIL_API_KEY);
    // await emailer.send({
    //   to: 'mario04asir@gmail.com',
    //   from: input.email,
    //   subject: `New message from ${input.name}`,
    //   body: input.message,
    // });
    
    // We'll return success: true to simulate a successful email send.
    return { success: true };
  }
);
