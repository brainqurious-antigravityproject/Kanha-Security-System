import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Building, Shield, Lock, Camera, Flame, Fence, 
  Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets 
} from 'lucide-react';
import { Service } from '../types/types';

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = ({
    Building, Shield, Lock, Camera, Flame, Fence, Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets
  } as any)[service.icon] || Shield;

  return (
    <div className="group bg-white rounded-[24px] shadow-sm hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex flex-col h-full overflow-hidden border border-gray-100">
      {/* Image Section */}
      <div className="relative h-[180px] overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Icon Badge */}
        <div className="absolute bottom-4 left-4 bg-[#257995] p-2.5 rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <IconComponent size={20} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[20px] font-bold mb-2 text-[#0B1F3A] font-montserrat leading-tight">
          {service.title}
        </h3>
        <p className="text-[15px] text-[#6B7280] mb-4 leading-relaxed font-inter line-clamp-2">
          {service.description}
        </p>

        {/* Bullet Points Section */}
        <ul className="space-y-2 mb-6 flex-grow">
          {service.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-[14px] font-medium text-[#1F2937] font-inter">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#257995] shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        <Link 
          to={`/service/${service.id}`}
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#257995] hover:gap-3 transition-all font-inter mt-auto"
        >
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
