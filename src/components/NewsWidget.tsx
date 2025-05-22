
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

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

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // This uses a free public API that searches news - in a production app,
      // you would want to use a more reliable source or your own backend
      const response = await fetch(`https://gnews.io/api/v4/search?q=Cupramontana&lang=it,en,de&country=it&max=5&apikey=4565c1676b29e4231afa54a2172a4a2f`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.articles) {
        const formattedNews: NewsItem[] = data.articles.map((article: any) => ({
          title: article.title,
          link: article.url,
          source: article.source?.name || 'Unknown Source',
          publishedAt: new Date(article.publishedAt).toLocaleDateString(),
        }));
        
        setNews(formattedNews);
        setLastUpdated(new Date());
      } else {
        setNews([]);
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
    fetchNews();
    
    // Also set up a check to see if we should fetch fresh news
    // This will compare the current date with the stored last fetch date
    const lastFetchDate = localStorage.getItem('cupramontanaNewsLastFetch');
    
    if (lastFetchDate) {
      const lastDate = new Date(lastFetchDate);
      const currentDate = new Date();
      
      // If it's a new day, fetch fresh news
      if (currentDate.toDateString() !== lastDate.toDateString()) {
        fetchNews();
      }
    }
    
    // Store today's date as the last fetch date
    localStorage.setItem('cupramontanaNewsLastFetch', new Date().toISOString());
  }, []);

  const handleRefresh = () => {
    fetchNews();
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
          <p className="text-destructive">{error}</p>
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
