
export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

export interface BusStop {
  id: string;
  name: string;
  description: string;
  facilities: string[];
  lines: string[];
  nearbyAttractions: string[];
}

export interface BusScheduleItem {
  departure: string;
  arrival: string;
  days: string;
}

export interface BusRoute {
  line: string;
  route: string;
  schedule: BusScheduleItem[];
}

export interface TrainScheduleItem {
  departure: string;
  destination: string;
  days: string;
}

export interface TrainRoute {
  line: string;
  station: string;
  schedule: TrainScheduleItem[];
}

export interface TransportData {
  bus: BusRoute[];
  train: TrainRoute[];
}

export interface TransportApp {
  name: string;
  description: string;
  platforms: string;
  features: string[];
  url: string;
  regions: string;
}
