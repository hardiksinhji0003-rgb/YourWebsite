import React from 'react';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/instagram';
import { BUSINESS_CONFIG } from '../data/businessConfig';

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E4D1A3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <Instagram className="w-4 h-4 text-[#C6A15B]" />
            <a
              href={BUSINESS_CONFIG.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold hover:underline"
            >
              {BUSINESS_CONFIG.social.instagramHandle}
            </a>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
            Follow Our Silver Story
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />
          <p className="text-[#777777] text-base font-light">
            Behind the scenes, new arrivals, and craftsmanship moments from our Dahegam boutique.
          </p>
        </div>

        {/* 6 Image Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-[#EFECE5] shadow-xs border border-[#E4D1A3]/40 block"
            >
              <img
                src={post.image}
                alt="Gujarat Orna Instagram silver jewellery post"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#171717]/75 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#E4D1A3]" />
                </div>

                <div>
                  <p className="text-[11px] text-white/90 line-clamp-3 leading-tight font-light mb-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-[#E4D1A3] font-medium">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA Bar */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS_CONFIG.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {BUSINESS_CONFIG.social.instagramHandle} on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <p className="text-[11px] text-[#999999] mt-2 font-light">
            Curated showcase gallery · Connect with us on social media
          </p>
        </div>

      </div>
    </section>
  );
};
