
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription } from './ui/alert';

interface NewsItem {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
}

const NewsWidget = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Function to parse RSS feeds and extract news items
  const fetchRSSNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // We'll use a proxy service to fetch and parse RSS feeds to avoid CORS issues
      const proxyUrl = 'https://api.allorigins.win/raw?url=';
      
      // List of RSS feeds to try - focusing on Italian news that might mention Cupramontana
      const rssSources = [
        // Italian news sources that might cover Cupramontana
        'https://www.ansa.it/marche/notizie/marche_rss.xml',
        'https://www.ilrestodelcarlino.it/feed/rss-cronaca-regionale-ancona',
        'https://www.viverecupramontana.it/rss'
      ];
      
      let allNews: NewsItem[] = [];
      
      // Try each feed until we get some news
      for (const rssUrl of rssSources) {
        try {
          const response = await fetch(`${proxyUrl}${encodeURIComponent(rssUrl)}`);
          
          if (!response.ok) {
            console.log(`Failed to fetch ${rssUrl}: ${response.status}`);
            continue;
          }
          
          const data = await response.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, "text/xml");
          const items = xml.querySelectorAll("item");
          
          // Convert RSS items to our NewsItem format
          const feedItems: NewsItem[] = Array.from(items).slice(0, 10).map((item) => {
            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            const sourceName = rssUrl.includes('ansa') ? 'ANSA Marche' : 
                               rssUrl.includes('carlino') ? 'Il Resto del Carlino' : 
                               rssUrl.includes('vivere') ? 'Vivere Cupramontana' : 'News';
            
            return {
              title,
              link,
              source: sourceName,
              publishedAt: new Date(pubDate).toLocaleDateString(),
            };
          });
          
          // Filter for news mentioning Cupramontana
          const relevantNews = feedItems.filter(item => 
            item.title.toLowerCase().includes('cupramontana') || 
            // Include some regional news even if not specifically about Cupramontana
            (allNews.length < 2 && 
              (item.title.toLowerCase().includes('verdicchio') || 
              item.title.toLowerCase().includes('marche')))
          );
          
          allNews = [...allNews, ...relevantNews];
          
          // If we have at least 5 news items, we can stop
          if (allNews.length >= 5) break;
        } catch (err) {
          console.error(`Error fetching from ${rssUrl}:`, err);
          // Continue to the next feed
        }
      }
      
      // If we have news items, update the state
      if (allNews.length > 0) {
        setNews(allNews.slice(0, 5)); // Limit to 5 items
        setLastUpdated(new Date());
      } else {
        // If no RSS feeds had relevant news, create fallback news
        const fallbackNews: NewsItem[] = [
          {
            title: "Explore Cupramontana's latest events",
            link: "/tourism?tab=events",
            source: "Cupramontana.homes",
            publishedAt: new Date().toLocaleDateString(),
          },
          {
            title: "Discover the wine heritage of Verdicchio",
            link: "/tourism?tab=wine",
            source: "Cupramontana.homes",
            publishedAt: new Date().toLocaleDateString(),
          },
          {
            title: "Find real estate opportunities in Cupramontana",
            link: "/real-estate",
            source: "Cupramontana.homes",
            publishedAt: new Date().toLocaleDateString(),
          }
        ];
        setNews(fallbackNews);
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchRSSNews();
    
    // Check if we should fetch fresh news
    const lastFetchDate = localStorage.getItem('cupramontanaNewsLastFetch');
    
    if (lastFetchDate) {
      const lastDate = new Date(lastFetchDate);
      const currentDate = new Date();
      
      // If it's a new day, fetch fresh news
      if (currentDate.toDateString() !== lastDate.toDateString()) {
        fetchRSSNews();
      }
    }
    
    // Store today's date as the last fetch date
    localStorage.setItem('cupramontanaNewsLastFetch', new Date().toISOString());
  }, []);

  const handleRefresh = () => {
    fetchRSSNews();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Latest News from Cupramontana</CardTitle>
            <CardDescription>
              Stay updated with what's happening in Cupramontana
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRefresh} className="flex gap-2 items-center">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        ) : error ? (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : news.length === 0 ? (
          <p className="text-muted-foreground">No recent news found about Cupramontana.</p>
        ) : (
          <div className="space-y-4">
            {news.map((item, index) => (
              <div key={index} className="pb-3 border-b last:border-0">
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
            ))}
          </div>
        )}
      </CardContent>
      {lastUpdated && (
        <CardFooter className="text-xs text-muted-foreground">
          Last updated: {lastUpdated.toLocaleString()}
        </CardFooter>
      )}
    </Card>
  );
};

export default NewsWidget;
