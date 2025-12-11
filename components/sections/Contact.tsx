"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsSend, BsArrowRight } from "react-icons/bs";
import { AnimatedSectionHeading } from "@/components/shared/AnimatedSectionHeading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";

const contactOptions = [
  {
    icon: MdOutlineEmail,
    title: "Email",
    value: "chibueze@buezrico.com",
    link: "mailto:chibueze@buezrico.com",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: BsWhatsapp,
    title: "WhatsApp",
    value: "+239-810-916-9579",
    link: "https://wa.link/em6oai",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 group/btn relative overflow-hidden"
      size="lg"
    >
      <span className="flex items-center justify-center gap-2 relative z-10">
        {pending ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
            />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <BsSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            <span>Send Message</span>
          </>
        )}
      </span>
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useFormState(sendEmail, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <section id="contact" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <AnimatedSectionHeading subtitle="Let's Connect" title="Get In Touch" />

      <div className="container-custom max-w-6xl">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 items-start overflow-hidden">
          {/* Contact Options */}
          <div className="space-y-6">
            {/* Intro Text */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-lg p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Let's Work Together</h3>
                <p className="text-light text-sm leading-relaxed">
                  Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below. I'm always open to discussing new opportunities and ideas.
                </p>
              </Card>
            </motion.div>

            {/* Contact Cards */}
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient}`} />

                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative p-6">
                      {/* Icon Badge */}
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${option.gradient} shadow-lg shadow-primary/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-2xl" />
                      </div>

                      {/* Content */}
                      <h4 className="font-bold text-lg mb-2 text-foreground">{option.title}</h4>
                      <p className="text-sm text-light mb-4 font-medium">{option.value}</p>

                      <Button asChild variant="outline" className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all group/btn">
                        <a href={option.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                          <span>Send a Message</span>
                          <BsArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>

                    {/* Bottom shine effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-xl">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Send Me a Message</h3>
                <p className="text-light text-sm mb-6">Fill out the form below and I'll get back to you as soon as possible.</p>

                <form
                  action={formAction}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80 block mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all h-11"
                    />
                    {state.errors?.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span>⚠</span> {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80 block mb-1.5">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all h-11"
                    />
                    {state.errors?.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span>⚠</span> {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80 block mb-1.5">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project or idea..."
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                    />
                    {state.errors?.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span>⚠</span> {state.errors.message[0]}
                      </p>
                    )}
                  </div>

                  <SubmitButton />
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
