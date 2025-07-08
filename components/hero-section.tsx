import Image from 'next/image';

interface HeroSectionProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function HeroSection({ imageSrc, altText, title, description, children }: HeroSectionProps) {
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-light mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}