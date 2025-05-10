"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SectionWrapper } from '@/components/section-wrapper';
import { contactData, emailAddress } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-background">
       <AnimatedSection>
        <div className="flex items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <span className="text-primary font-mono text-2xl md:text-3xl mr-2">04.</span>
            {contactData.title}
          </h2>
          <div className="ml-4 flex-grow h-px bg-border/50"></div>
        </div>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection delay="duration-300">
          <p className="text-foreground/80 mb-10 leading-relaxed">
            {contactData.intro} You can also reach me directly at <a href={`mailto:${emailAddress}`} className="font-medium text-primary hover:underline">{emailAddress}</a>.
          </p>
        </AnimatedSection>

        <AnimatedSection delay="duration-500">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">{contactData.formLabels.name}</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-card border-border/50 focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">{contactData.formLabels.email}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-card border-border/50 focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">{contactData.formLabels.message}</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Hi Krishnpal, I'd like to talk about..." {...field} rows={5} className="bg-card border-border/50 focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base px-8 py-3"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : contactData.formLabels.submit}
              </Button>
            </form>
          </Form>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}