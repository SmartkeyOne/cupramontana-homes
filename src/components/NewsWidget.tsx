
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription } from './ui/alert';
import { fetchRSSNews } from '../utils/newsUtils';
import { NewsItem as NewsItemType } from '../types/newsTypes';
import NewsItem from './news/NewsItem';

const NewsWidget = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    
    const { news: newsItems, error: newsError } = await fetchRSSNews();
    
    if (newsError) {
      setError(newsError);
    } else {
      setNews(newsItems);
      setLastUpdated(new Date());
    }
    
    setLoading(false);
  };

  // Fetch news on component mount
  useEffect(() => {
    // Check if we should fetch fresh news
    const lastFetchDate = localStorage.getItem('cupramontanaNewsLastFetch');
    
    if (lastFetchDate) {
      const lastDate = new Date(lastFetchDate);
      const currentDate = new Date();
      
      // If it's a new day, fetch fresh news
      if (currentDate.toDateString() !== lastDate.toDateString()) {
        loadNews();
      }
    } else {
      // First time loading
      loadNews();
    }
    
    // Store today's date as the last fetch date
    localStorage.setItem('cupramontanaNewsLastFetch', new Date().toISOString());
  }, []);

  const handleRefresh = () => {
    loadNews();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Latest News from the Marche Region</CardTitle>
            <CardDescription>
              Stay updated with tourism highlights and events in the Marche region
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
          <p className="text-muted-foreground">No recent news found about the Marche region.</p>
        ) : (
          <div className="space-y-4">
            {news.map((item, index) => (
              <NewsItem key={index} item={item} />
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
