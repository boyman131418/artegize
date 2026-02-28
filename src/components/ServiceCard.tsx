import React from 'react';
import { Service } from '../types';
import { Link } from 'react-router-dom';
import { Instagram, GraduationCap, Store, Megaphone, Gift, Handshake } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'fa-instagram': <Instagram size={24} />,
  'fa-graduation-cap': <GraduationCap size={24} />,
  'fa-store': <Store size={24} />,
  'fa-bullhorn': <Megaphone size={24} />,
  'fa-gift': <Gift size={24} />,
  'fa-handshake': <Handshake size={24} />,
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const linkTo = service.slug === 'account-sales' ? '/account-sales' : `/services/${service.slug}`;

  return (
    <Link to={linkTo} className="block h-full">
      <div className="group relative p-8 glass-panel rounded-2xl hover:bg-muted/30 transition-all duration-300 border border-border h-full overflow-hidden min-h-[300px] hover:scale-105 hover:z-10 cursor-pointer">
        <div className="relative h-full">
          {/* Summary Content */}
          <div className="flex flex-col h-full transition-opacity duration-300 group-hover:opacity-0">
            <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-6 shrink-0 text-primary-foreground">
              {iconMap[service.icon] || <Megaphone size={24} />}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
          </div>

          {/* Hover Details */}
          {service.details && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-y-auto">
              <div className="min-h-full p-8 flex flex-col justify-center">
                <div className="text-primary font-bold italic mb-4 text-base">
                  {service.details.quote}
                </div>
                <div className="space-y-4 text-sm text-foreground/80">
                  <p>{service.details.content}</p>
                  <p className="text-foreground font-medium">{service.details.value}</p>
                </div>
                <div className="mt-4 text-accent text-sm font-bold flex items-center">
                  Click to learn more →
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
