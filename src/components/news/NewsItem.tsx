
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { NewsItem as NewsItemType } from '../../types/newsTypes';

interface NewsItemProps {
  item: NewsItemType;
}

const NewsItem = ({ item }: NewsItemProps) => {
  return (
    <div className="pb-3 border-b last:border-0">
      <a 
        href={item.link} 
        target="_blank"
        rel="noopener noreferrer" 
        className="hover:text-primary flex items-start gap-2 group"
      >
        <ExternalLink className="h-4 w-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-xs text-muted-foreground">
            {item.source} • {item.publishedAt}
          </p>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
