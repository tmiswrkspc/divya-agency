'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  mainImage: string;
  productName: string;
}

const DETAIL_IMAGES = [
  '/images/products/controller.png',
  '/images/products/distribution-block.png',
  '/images/products/emitter-tubes.png',
  '/images/products/faucet-adapter.png',
  '/images/products/filtration-system.png',
  '/images/products/inline-filter.png',
  '/images/products/micro-sprinkler.png',
  '/images/products/pressure-regulator.png',
];

export default function ImageGallery({ mainImage, productName }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const allImages = [mainImage, ...DETAIL_IMAGES];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={currentImage}
          alt={productName}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(image)}
            className={`relative aspect-square overflow-hidden rounded-md transition-opacity ${
              currentImage === image ? 'ring-2 ring-[#1A6B3D]' : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`View ${index === 0 ? 'main' : 'detail'} image ${index}`}
          >
            <Image
              src={image}
              alt={`${productName} ${index === 0 ? 'main view' : `detail ${index}`}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 25vw, 12.5vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
