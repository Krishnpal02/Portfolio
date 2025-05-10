import Link from 'next/link';
import { socialLinks, fullName, emailAddress } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-12 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map(({ name, Icon, url }) => (
              <Link href={url} key={name} target="_blank" rel="noopener noreferrer" aria-label={`Krishnpal Chouhan on ${name}`}>
                <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </Button>
              </Link>
            ))}
          </div>
          <Link href={`mailto:${emailAddress}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
            {emailAddress}
          </Link>
          <p className="text-xs text-muted-foreground">
            Designed & Built by {fullName}
            <br />
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
