"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSectionHeading } from "@/components/shared/AnimatedSectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/constants";
import { BsStarFill, BsQuote } from "react-icons/bs";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Star Rating Component with Stagger Animation
const StarRating = ({ rating }: { rating: number }) => (
  <motion.div
    className="flex gap-1"
    aria-label={`${rating} out of 5 stars`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 }
        }}
      >
        <BsStarFill
          className={`${
            i < rating ? "text-primary" : "text-muted-foreground/30"
          } text-sm`}
        />
      </motion.div>
    ))}
  </motion.div>
);

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const regular = testimonials.filter((t) => !t.featured);

  // Carousel state management
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
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

    // Calculate current page
    const cardWidth = clientWidth / cardsPerView;
    const page = Math.round(scrollLeft / (cardWidth * cardsPerView));
    setCurrentPage(page);
  }, [cardsPerView]);

  // Scroll to specific page
  const scrollToPage = useCallback((page: number) => {
    if (!carouselRef.current) return;

    const cardWidth = carouselRef.current.clientWidth / cardsPerView;
    const scrollPosition = page * cardWidth * cardsPerView;

    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, [cardsPerView]);

  const scrollPrev = () => scrollToPage(Math.max(0, currentPage - 1));
  const scrollNext = () => {
    const maxPage = Math.ceil(regular.length / cardsPerView) - 1;
    scrollToPage(Math.min(maxPage, currentPage + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canScrollPrev) scrollPrev();
      if (e.key === 'ArrowRight' && canScrollNext) scrollNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, canScrollPrev, canScrollNext]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      aria-label="Client testimonials"
      role="region"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,170,35,0.03),transparent_50%)]" />
      </div>

      <AnimatedSectionHeading
        subtitle="Client Feedback"
        title="Testimonials"
      />

      <div className="container-custom max-w-6xl">
        {/* Featured Testimonial */}
        {featured && featured.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ y: -12, scale: 1.01, rotateY: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[350px_1fr] gap-6 md:gap-8 p-8 md:p-10">
                  {/* Left: Avatar */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="relative w-48 h-48 md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] mb-4"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={featured.image}
                        alt={featured.author}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 280px, 300px"
                      />
                      <div className="absolute inset-0 rounded-full ring-4 ring-primary/40 shadow-2xl shadow-primary/30" />
                    </motion.div>
                    <StarRating rating={featured.rating} />
                  </div>

                  {/* Right: Content */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block"
                    >
                      <BsQuote className="text-4xl md:text-5xl text-primary/20 mb-4" />
                    </motion.div>
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-tight tracking-tight mb-6">
                      "{featured.quote}"
                    </blockquote>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/40 mb-4" />
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1">
                        {featured.author}
                      </h4>
                      <p className="text-sm text-light mb-2">
                        {featured.role} at {featured.company}
                      </p>
                      {featured.date && (
                        <Badge
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {featured.date}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Premium Carousel */}
        <div className="relative group/carousel">
          {/* Previous Button */}
          <motion.button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-12 h-12 rounded-full
                       bg-card/80 backdrop-blur-xl
                       border border-primary/20
                       flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       opacity-0 md:group-hover/carousel:opacity-100
                       transition-opacity duration-300
                       shadow-lg hover:shadow-xl hover:shadow-primary/20"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>

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
            {regular.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                custom={index}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -10, scale: 1.02, rotateZ: 0.5 }}
                className="snap-start flex-shrink-0
                           w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
              >
                <Card className="relative overflow-hidden border-primary/20
                               bg-gradient-to-br from-card via-card to-card/95
                               backdrop-blur-xl shadow-lg
                               hover:shadow-2xl hover:shadow-primary/10
                               transition-all duration-500 group h-full flex flex-col">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Avatar */}
                    {testimonial.image && (
                      <motion.div
                        className="relative w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] mx-auto mb-4"
                        whileHover={{ scale: 1.08, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full"
                          sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                        />
                        <div className="absolute inset-0 rounded-full ring-3 ring-primary/25 shadow-xl shadow-primary/20" />
                      </motion.div>
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

                  {/* Bottom shine */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-12 h-12 rounded-full
                       bg-card/80 backdrop-blur-xl
                       border border-primary/20
                       flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       opacity-0 md:group-hover/carousel:opacity-100
                       transition-opacity duration-300
                       shadow-lg hover:shadow-xl hover:shadow-primary/20"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Carousel pages">
            {Array.from({
              length: Math.ceil(regular.length / cardsPerView)
            }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToPage(index)}
                aria-label={`Go to page ${index + 1}`}
                aria-current={currentPage === index ? "true" : "false"}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="rounded-full transition-colors"
                  animate={{
                    width: currentPage === index ? 32 : 8,
                    height: 8,
                    backgroundColor: currentPage === index
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--primary) / 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Screen reader live region for page announcements */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            Showing testimonials {currentPage * cardsPerView + 1} to{" "}
            {Math.min((currentPage + 1) * cardsPerView, regular.length)} of{" "}
            {regular.length}
          </div>
        </div>
      </div>
    </section>
  );
}
