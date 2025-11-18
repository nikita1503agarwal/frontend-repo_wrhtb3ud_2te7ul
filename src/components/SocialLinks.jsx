/*
  SocialLinks component
  - Icons: Instagram, Facebook, YouTube, Vimeo, X (Twitter)
  - Variants: 'solid' (filled pill) or 'ghost' (subtle)
*/
import { Instagram, Facebook, Youtube, Vimeo, Twitter } from 'lucide-react';

const links = [
  { name: 'Instagram', href: 'https://instagram.com/', Icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/', Icon: Facebook },
  { name: 'YouTube', href: 'https://youtube.com/', Icon: Youtube },
  { name: 'Vimeo', href: 'https://vimeo.com/', Icon: Vimeo },
  { name: 'X', href: 'https://x.com/', Icon: Twitter },
];

export default function SocialLinks({ size = 20, variant = 'ghost' }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={[
            'group inline-flex items-center gap-2 rounded-full border backdrop-blur-sm transition',
            variant === 'solid'
              ? 'border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20'
              : 'border-white/10 bg-white/5 px-3 py-1.5 text-white/80 hover:bg-white/10 hover:text-white',
          ].join(' ')}
        >
          <Icon size={size} className="opacity-90" />
          <span className="text-sm">{name}</span>
        </a>
      ))}
    </div>
  );
}
