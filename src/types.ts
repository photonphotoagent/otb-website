export interface Scenario {
  id: string;
  title: string;
  description: string;
  traditionalOutcome: string;
  otbOutcome: string;
  equitySaved: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}
