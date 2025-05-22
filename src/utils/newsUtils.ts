
import { NewsItem } from '../types/newsTypes';

// Function to fetch and parse RSS news feeds
export const fetchRSSNews = async (): Promise<{
  news: NewsItem[];
  error: string | null;
}> => {
  try {
    // We'll use a proxy service to fetch and parse RSS feeds to avoid CORS issues
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    
    // List of RSS feeds to try - focusing on Marche region tourism news
    const rssSources = [
      // Marche regional news sources with tourism focus
      'https://www.ansa.it/marche/notizie/marche_rss.xml',
      'https://www.ilrestodelcarlino.it/feed/rss-cronaca-regionale-ancona',
      'https://www.viverecupramontana.it/rss',
      'https://www.turismo.marche.it/rss'
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
                             rssUrl.includes('vivere') ? 'Vivere Cupramontana' :
                             rssUrl.includes('turismo.marche') ? 'Turismo Marche' : 'News';
          
          return {
            title,
            link,
            source: sourceName,
            publishedAt: new Date(pubDate).toLocaleDateString(),
          };
        });
        
        allNews = [...allNews, ...filterTourismNews(feedItems)];
        
        // If we have at least 5 news items, we can stop
        if (allNews.length >= 5) break;
      } catch (err) {
        console.error(`Error fetching from ${rssUrl}:`, err);
        // Continue to the next feed
      }
    }
    
    // If we have news items, return them
    if (allNews.length > 0) {
      return { news: allNews.slice(0, 5), error: null }; // Limit to 5 items
    } else {
      // If no RSS feeds had relevant news, create fallback news about Marche tourism
      return { 
        news: getFallbackNews(),
        error: null 
      };
    }
  } catch (err) {
    console.error('Error fetching news:', err);
    return { news: [], error: 'Failed to load news. Please try again later.' };
  }
};

// Filter news to focus on tourism-related content about Marche region
export const filterTourismNews = (newsItems: NewsItem[]): NewsItem[] => {
  return newsItems.filter(item => {
    const lowercaseTitle = item.title.toLowerCase();
    return lowercaseTitle.includes('cupramontana') || 
           lowercaseTitle.includes('marche') || 
           lowercaseTitle.includes('turismo') || 
           lowercaseTitle.includes('tourism') ||
           lowercaseTitle.includes('verdicchio') || 
           lowercaseTitle.includes('conero') ||
           lowercaseTitle.includes('spiaggia') || // beach
           lowercaseTitle.includes('riviera') ||
           lowercaseTitle.includes('evento') || // event
           lowercaseTitle.includes('festival');
  });
};

// Provide fallback news items when no external news is available
export const getFallbackNews = (): NewsItem[] => {
  return [
    {
      title: "Explore the beautiful beaches of Marche region",
      link: "/tourism?tab=beaches",
      source: "Cupramontana.homes",
      publishedAt: new Date().toLocaleDateString(),
    },
    {
      title: "Discover the wine heritage of Verdicchio in Marche",
      link: "/tourism?tab=wine",
      source: "Cupramontana.homes",
      publishedAt: new Date().toLocaleDateString(),
    },
    {
      title: "Top cultural attractions in the Marche region",
      link: "/tourism?tab=attractions",
      source: "Cupramontana.homes",
      publishedAt: new Date().toLocaleDateString(),
    },
    {
      title: "Upcoming events and festivals in Marche",
      link: "/tourism?tab=events",
      source: "Cupramontana.homes",
      publishedAt: new Date().toLocaleDateString(),
    }
  ];
};
