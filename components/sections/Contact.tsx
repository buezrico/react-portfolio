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

      <div className="container-custom max-w-7xl">
        <div className="grid lg:grid-cols-[42%_1fr] md:grid-cols-1 gap-16 lg:gap-20 items-start">
          {/* Contact Options */}
          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Intro Text */}
            <motion.div
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="mb-10"
            >
              <Card className="relative overflow-hidden
                bg-card dark:bg-card/95
                border border-primary/10
                rounded-2xl
                shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                hover:shadow-[0_20px_50px_rgb(0,0,0,0.12),0_0_0_1px_rgb(249,170,35,0.15)]
                dark:hover:shadow-[0_20px_50px_rgb(0,0,0,0.5),0_0_0_1px_rgb(249,170,35,0.3)]
                transition-all duration-500 ease-out
                backdrop-blur-sm
                group p-8">

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-primary/5 via-transparent to-primary/5
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none" />

                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]
                  bg-gradient-to-r from-transparent via-primary to-transparent
                  opacity-60" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Let's Work Together
                  </h3>
                  <p className="text-light text-base leading-relaxed">
                    Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below. I'm always open to discussing new opportunities and ideas.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Cards */}
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }}
                >
                  <Card className="relative overflow-hidden
                    bg-card dark:bg-card/95
                    border border-primary/10
                    rounded-2xl
                    shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                    dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                    hover:shadow-[0_20px_50px_rgb(0,0,0,0.12),0_0_0_1px_rgb(249,170,35,0.15)]
                    dark:hover:shadow-[0_20px_50px_rgb(0,0,0,0.5),0_0_0_1px_rgb(249,170,35,0.3)]
                    transition-all duration-500 ease-out
                    backdrop-blur-sm
                    group">

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl
                      bg-gradient-to-br from-primary/5 via-transparent to-primary/5
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 pointer-events-none" />

                    {/* Top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px]
                      bg-gradient-to-r ${option.gradient} opacity-60`} />

                    <div className="relative p-6 z-10">
                      {/* Icon Badge - enhanced */}
                      <div className={`inline-flex p-4 rounded-2xl
                        bg-gradient-to-br ${option.gradient}
                        shadow-lg shadow-primary/30 mb-4
                        group-hover:scale-110 group-hover:rotate-3
                        transition-all duration-300`}>
                        <Icon className="text-white text-xl" />
                      </div>

                      {/* Content */}
                      <h4 className="font-semibold text-xl mb-2 text-foreground tracking-tight">
                        {option.title}
                      </h4>
                      <p className="text-base text-light mb-4 font-normal">
                        {option.value}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground
                          hover:border-primary transition-all duration-300 group/btn"
                      >
                        <a href={option.link} target="_blank" rel="noreferrer"
                          className="flex items-center justify-center gap-2">
                          <span>Send a Message</span>
                          <BsArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>

                    {/* Bottom shine effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-primary/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            whileHover={{
              scale: 1.005,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <Card className="relative overflow-hidden
              bg-card dark:bg-card/95
              border border-primary/10
              rounded-2xl
              shadow-[0_8px_30px_rgb(0,0,0,0.08)]
              dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
              hover:shadow-[0_20px_50px_rgb(0,0,0,0.12),0_0_0_1px_rgb(249,170,35,0.15)]
              dark:hover:shadow-[0_20px_50px_rgb(0,0,0,0.5),0_0_0_1px_rgb(249,170,35,0.3)]
              transition-all duration-500 ease-out
              backdrop-blur-sm
              group">

              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl
                bg-gradient-to-br from-primary/5 via-transparent to-primary/5
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500 pointer-events-none" />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]
                bg-gradient-to-r from-transparent via-primary to-transparent
                opacity-60" />

              <div className="p-8 lg:p-10 relative z-10">
                {/* Enhanced heading */}
                <div className="space-y-2 mb-8">
                  <h3 className="text-3xl font-bold text-foreground">
                    Send Me a Message
                  </h3>
                  <p className="text-light text-base leading-relaxed">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form
                  action={formAction}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-primary/15
                        focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                        hover:border-primary/30
                        transition-all duration-200 h-12 rounded-xl"
                    />
                    {state.errors?.name && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span>⚠</span> {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-primary/15
                        focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                        hover:border-primary/30
                        transition-all duration-200 h-12 rounded-xl"
                    />
                    {state.errors?.email && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span>⚠</span> {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground block">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project or idea..."
                      required
                      className="bg-background/50 border-primary/15
                        focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                        hover:border-primary/30
                        resize-none transition-all duration-200 rounded-xl"
                    />
                    {state.errors?.message && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
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
