"use client";

import Image from "next/image";
import { AnimatedSectionHeading } from "@/components/shared/AnimatedSectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BsStarFill } from "react-icons/bs";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
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

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  featured?: boolean;
  date?: string;
}

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  // Carousel state management
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Detect responsive breakpoint
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Detect scroll position for button states
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate current card index based on scroll position
    const cardWidth = scrollWidth / testimonials.length;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentCardIndex(index);
  }, [testimonials.length]);

  // Scroll to specific card
  const scrollToCard = useCallback((cardIndex: number) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cardWidth = container.scrollWidth / testimonials.length;
    const scrollPosition = cardIndex * cardWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });

    setCurrentCardIndex(cardIndex);
  }, [testimonials.length]);

  const scrollPrev = () => {
    const newIndex = Math.max(0, currentCardIndex - 1);
    scrollToCard(newIndex);
  };

  const scrollNext = () => {
    const maxIndex = testimonials.length - 1;
    const newIndex = Math.min(maxIndex, currentCardIndex + 1);
    scrollToCard(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canScrollPrev) scrollPrev();
      if (e.key === 'ArrowRight' && canScrollNext) scrollNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCardIndex, canScrollPrev, canScrollNext]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      aria-label="Client testimonials"
      role="region"
    >
      <AnimatedSectionHeading
        subtitle="Client Feedback"
        title="Testimonials"
      />

      <div className="container-custom max-w-6xl">
        {/* Navigation Buttons - Top Right */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full
                       bg-card/80 backdrop-blur-xl
                       border border-primary/20
                       flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       shadow-lg hover:shadow-xl hover:shadow-primary/20
                       transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full
                       bg-card/80 backdrop-blur-xl
                       border border-primary/20
                       flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       shadow-lg hover:shadow-xl hover:shadow-primary/20
                       transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Scroll Container */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-scroll snap-x snap-mandatory
                       scrollbar-hide scroll-smooth gap-8 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="snap-start flex-shrink-0
                           w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
              >
                <Card className="relative overflow-hidden border-primary/20
                               bg-gradient-to-br from-card via-card to-card/95
                               backdrop-blur-xl shadow-lg
                               hover:shadow-2xl hover:shadow-primary/10
                               transition-shadow duration-300 h-full flex flex-col">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Avatar */}
                    {testimonial.image && (
                      <div className="relative w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] mx-auto mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full"
                          sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                        />
                        <div className="absolute inset-0 rounded-full ring-3 ring-primary/25 shadow-xl shadow-primary/20" />
                      </div>
                    )}

                    {/* Rating */}
                    <div className="mb-4 flex justify-center">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base md:text-lg text-light italic leading-relaxed mb-6 flex-1 line-clamp-4 text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="mt-auto">
                      <div className="border-t border-primary/10 pt-4 text-center">
                        <h4 className="font-bold text-foreground mb-1">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-light mb-2">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          <Badge
                            variant="outline"
                            className="text-xs border-primary/20 bg-primary/5 text-primary"
                          >
                            {testimonial.company}
                          </Badge>
                          {testimonial.date && (
                            <span className="text-xs text-muted-foreground">
                              {testimonial.date}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                </Card>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Carousel pages">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentCardIndex === index ? "true" : "false"}
                className="relative"
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: currentCardIndex === index ? 32 : 8,
                    height: 8,
                    backgroundColor: currentCardIndex === index
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--primary) / 0.3)'
                  }}
                />
              </button>
            ))}
          </div>

          {/* Screen reader live region for page announcements */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            Showing testimonial {currentCardIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
