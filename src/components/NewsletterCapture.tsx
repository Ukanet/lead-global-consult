'use client';

import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function NewsletterCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate successful subscription
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="bg-[var(--gold)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection animation="fade">
          <span className="uppercase tracking-wider font-semibold text-[var(--navy)] text-sm mb-2 block font-[family-name:var(--font-mono)]">
            Stay Informed
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4 font-[family-name:var(--font-display)]">
            Get Monthly Insights on Education &amp; Leadership
          </h2>
          <p className="text-[var(--navy)]/70 mb-10 text-lg leading-relaxed font-[family-name:var(--font-body)]">
            Practical thinking on teaching, learning, and leadership — delivered to your inbox once a month. No spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border-2 border-transparent focus:border-[var(--navy)] focus:outline-none text-[var(--navy)] placeholder-[var(--navy)]/50 bg-white/90 shadow-sm transition-all"
              required
              disabled={submitted}
            />
            <button
              type="submit"
              disabled={submitted}
              className={`px-8 py-3 rounded-md font-semibold text-white bg-[var(--navy)] hover:bg-[var(--charcoal)] border-2 border-transparent hover:border-white transition-all shadow-sm ${submitted ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-[var(--navy)] font-medium animate-pulse">
              Thank you! You are subscribed.
            </div>
          )}

          <p className="mt-6 text-xs text-[var(--navy)]/60 font-[family-name:var(--font-body)]">
            We respect your privacy. Read our privacy policy.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
