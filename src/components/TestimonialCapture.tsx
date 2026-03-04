"use client";

import { useState } from "react";
import { ShineButton } from "@/components/ui/ShineButton";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialCaptureProps {
    trigger: "post-reservation" | "birthday" | "review-request" | "milestone";
    context?: string;
    className?: string;
}

export function TestimonialCapture({ trigger, context, className = "" }: TestimonialCaptureProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<"intro" | "questions" | "thanks">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = {
        "post-reservation": [
            "What made you choose Jinbeh for this occasion?",
            "What are you most looking forward to?",
            "Have you celebrated with us before?",
        ],
        birthday: [
            "What made this birthday special at Jinbeh?",
            "What was your favorite moment or dish?",
            "Would you recommend Jinbeh for birthday celebrations?",
        ],
        "review-request": [
            "What was the best part of your dining experience?",
            "How would you describe Jinbeh to a friend?",
            "What dish or moment stood out to you?",
        ],
        milestone: [
            "What milestone are you celebrating?",
            "Why did you choose Jinbeh for this special moment?",
            "How did we make it memorable?",
        ],
    };

    const activeQuestions = questions[trigger] || questions["review-request"];

    const handleNext = () => {
        if (step === "intro") {
            setStep("questions");
        } else if (step === "questions") {
            if (currentQuestionIndex < activeQuestions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
            } else {
                setStep("thanks");
            }
        }
    };

    const handleReset = () => {
        setStep("intro");
        setCurrentQuestionIndex(0);
        setIsOpen(false);
    };

    return (
        <div className={`bg-warm-ivory border-2 border-soft-gold rounded-2xl p-6 lg:p-8 my-8 shadow-sm ${className}`}>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Share Your Jinbeh Experience 📸
            </h3>

            {context ? (
                <p className="text-charcoal/80 mb-6 text-lg">{context}</p>
            ) : (
                <p className="text-charcoal/80 mb-6 text-lg">
                    Help us celebrate great moments! Share a photo or quick video of your experience and we&apos;ll send you a special thank-you gift.
                </p>
            )}

            {/* Main Container for the multi-step flow */}
            <div className="bg-white rounded-xl p-6 shadow-inner border border-stone-200 overflow-hidden relative min-h-[220px]">
                <AnimatePresence mode="wait">
                    {step === "intro" && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex flex-col items-center justify-center text-center h-full space-y-6 pt-4"
                        >
                            <p className="text-charcoal font-medium text-lg">
                                It takes less than 60 seconds. Want to get started?
                            </p>
                            <ShineButton onClick={handleNext} variant="primary" className="w-full sm:w-auto" aria-label="Start sharing experience">
                                🎁 Share & Get a Gift
                            </ShineButton>
                        </motion.div>
                    )}

                    {step === "questions" && (
                        <motion.div
                            key="questions"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col h-full"
                        >
                            <p className="text-sm font-semibold text-soft-gold uppercase tracking-wider mb-2">
                                Question {currentQuestionIndex + 1} of {activeQuestions.length}
                            </p>
                            <h4 className="text-xl font-heading font-semibold text-charcoal mb-6">
                                {activeQuestions[currentQuestionIndex]}
                            </h4>
                            <textarea
                                className="w-full bg-warm-ivory border border-stone-200 rounded-lg p-3 text-charcoal focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-all resize-none mb-4"
                                rows={3}
                                placeholder="Type your answer here..."
                                aria-label={activeQuestions[currentQuestionIndex]}
                            />
                            <div className="mt-auto flex justify-between items-center">
                                <button
                                    onClick={() => {
                                        if (currentQuestionIndex > 0) {
                                            setCurrentQuestionIndex((prev) => prev - 1);
                                        } else {
                                            setStep("intro");
                                        }
                                    }}
                                    className="text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors"
                                    aria-label="Go back to previous question"
                                >
                                    ← Back
                                </button>
                                <ShineButton onClick={handleNext} variant="primary" className="py-2 px-6" aria-label={currentQuestionIndex === activeQuestions.length - 1 ? "Submit answers" : "Next question"}>
                                    {currentQuestionIndex === activeQuestions.length - 1 ? "Submit" : "Next →"}
                                </ShineButton>
                            </div>
                        </motion.div>
                    )}

                    {step === "thanks" && (
                        <motion.div
                            key="thanks"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center h-full py-4 space-y-4"
                        >
                            <div className="w-16 h-16 bg-soft-gold/20 rounded-full flex items-center justify-center mb-2">
                                <span className="text-3xl">🎉</span>
                            </div>
                            <h4 className="text-2xl font-heading font-bold text-charcoal">
                                Thank you!
                            </h4>
                            <p className="text-charcoal/80">
                                Your experience helps us make Jinbeh even better. Keep an eye on your inbox for your gift!
                            </p>
                            <button
                                onClick={handleReset}
                                className="text-sm font-medium text-soft-gold hover:text-charcoal transition-colors mt-2"
                                aria-label="Start over"
                            >
                                Submit another response
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="text-xs text-charcoal/60 text-center mt-6">
                By sharing, you give us permission to use your content in our marketing.
                <br />
                Your privacy matters – see our{" "}
                <a href="/privacy" className="text-soft-gold hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-soft-gold rounded" aria-label="Privacy policy">
                    privacy policy
                </a>
                .
            </p>
        </div>
    );
}
