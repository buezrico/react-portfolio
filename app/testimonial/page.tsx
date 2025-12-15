"use client";

import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageUpload } from "@/components/shared/ImageUpload";
import { submitTestimonial } from "@/actions/submitTestimonial";
import { BsStarFill, BsStar, BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";

// Star Rating Selector Component
function StarRatingSelector({ value, onChange }: { value: number; onChange: (rating: number) => void }) {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = (hoveredStar !== null ? hoveredStar : value) >= star;
        const Icon = isFilled ? BsStarFill : BsStar;

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            className="text-3xl transition-colors duration-200 hover:scale-110 transform"
          >
            <Icon className={isFilled ? "text-primary" : "text-muted-foreground/30"} />
          </button>
        );
      })}
    </div>
  );
}

// Star Rating Display Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <BsStarFill
          key={i}
          className={`${
            i < rating ? "text-primary" : "text-muted-foreground/30"
          } text-sm`}
        />
      ))}
    </div>
  );
}

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
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <BsSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            <span>Submit Testimonial</span>
          </>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
    </Button>
  );
}

export default function TestimonialSubmissionPage() {
  // Form state
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [state, formAction] = useFormState(submitTestimonial, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        // Reset form on success
        setAuthor("");
        setEmail("");
        setRole("");
        setCompany("");
        setRating(5);
        setQuote("");
        setImageUrl("");
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container-custom max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Share Your Experience
          </h1>
          <p className="text-lg text-light max-w-2xl mx-auto">
            Your feedback helps me improve and helps others make informed decisions.
            Fill out the form below and see a live preview of how your testimonial will appear.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 border-primary/10">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Testimonial Form
              </h2>

              <form action={formAction} className="space-y-6">
                {/* Hidden fields for state values */}
                <input type="hidden" name="rating" value={rating} />
                <input type="hidden" name="imageUrl" value={imageUrl} />

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="author" className="text-sm font-semibold text-foreground block">
                    Full Name *
                  </label>
                  <Input
                    id="author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-primary/15
                      focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                      hover:border-primary/30
                      transition-all duration-200 h-12 rounded-xl"
                  />
                  {state.errors?.author && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {state.errors.author[0]}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                {/* Job Title */}
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-semibold text-foreground block">
                    Job Title *
                  </label>
                  <Input
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Product Manager"
                    required
                    className="bg-background/50 border-primary/15
                      focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                      hover:border-primary/30
                      transition-all duration-200 h-12 rounded-xl"
                  />
                  {state.errors?.role && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {state.errors.role[0]}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-foreground block">
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="TechVenture Inc."
                    required
                    className="bg-background/50 border-primary/15
                      focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                      hover:border-primary/30
                      transition-all duration-200 h-12 rounded-xl"
                  />
                  {state.errors?.company && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {state.errors.company[0]}
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground block">
                    Rating *
                  </label>
                  <StarRatingSelector value={rating} onChange={setRating} />
                  {state.errors?.rating && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {state.errors.rating[0]}
                    </p>
                  )}
                </div>

                {/* Testimonial Text */}
                <div className="space-y-2">
                  <label htmlFor="quote" className="text-sm font-semibold text-foreground block">
                    Your Testimonial * (20-1000 characters)
                  </label>
                  <Textarea
                    id="quote"
                    name="quote"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    rows={6}
                    placeholder="Share your experience working with me..."
                    required
                    minLength={20}
                    maxLength={1000}
                    className="bg-background/50 border-primary/15
                      focus:border-primary/50 focus:ring-4 focus:ring-primary/10
                      hover:border-primary/30
                      resize-none transition-all duration-200 rounded-xl"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{quote.length}/1000 characters</span>
                    {quote.length < 20 && quote.length > 0 && (
                      <span className="text-amber-500">Minimum 20 characters required</span>
                    )}
                  </div>
                  {state.errors?.quote && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {state.errors.quote[0]}
                    </p>
                  )}
                </div>

                {/* Profile Image */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground block">
                    Profile Image (Optional)
                  </label>
                  <ImageUpload value={imageUrl} onChange={setImageUrl} />
                  {state.errors?.imageUrl && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {state.errors.imageUrl[0]}
                    </p>
                  )}
                </div>

                <SubmitButton />
              </form>
            </Card>
          </motion.div>

          {/* Live Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Live Preview
              </h2>
              <p className="text-sm text-light">
                This is how your testimonial will appear on the website
              </p>
            </div>

            <Card className="relative overflow-hidden border-primary/20
                           bg-gradient-to-br from-card via-card to-card/95
                           backdrop-blur-xl shadow-lg h-full flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

              <div className="p-6 flex flex-col flex-1">
                {/* Avatar Preview */}
                {imageUrl ? (
                  <div className="relative w-[120px] h-[120px] mx-auto mb-4">
                    <Image
                      src={imageUrl}
                      alt={author || "Preview"}
                      fill
                      className="object-cover rounded-full"
                      sizes="120px"
                    />
                    <div className="absolute inset-0 rounded-full ring-3 ring-primary/25 shadow-xl shadow-primary/20" />
                  </div>
                ) : (
                  <div className="w-[120px] h-[120px] mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border-2 border-primary/20">
                    <span className="text-4xl text-muted-foreground">
                      {author?.[0]?.toUpperCase() || "?"}
                    </span>
                  </div>
                )}

                {/* Rating Preview */}
                <div className="mb-4 flex justify-center">
                  <StarRating rating={rating} />
                </div>

                {/* Quote Preview */}
                <blockquote className="text-base md:text-lg text-light italic leading-relaxed mb-6 flex-1 text-center min-h-[100px]">
                  {quote ? `"${quote}"` : (
                    <span className="text-muted-foreground not-italic">
                      Your testimonial will appear here...
                    </span>
                  )}
                </blockquote>

                {/* Author Info Preview */}
                <div className="mt-auto">
                  <div className="border-t border-primary/10 pt-4 text-center">
                    <h4 className="font-bold text-foreground mb-1">
                      {author || "Your Name"}
                    </h4>
                    <p className="text-sm text-light mb-2">
                      {role || "Your Job Title"}
                    </p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/20 bg-primary/5 text-primary"
                      >
                        {company || "Your Company"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date().toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
