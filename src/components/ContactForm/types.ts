export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t?: (x:any)=>any;
}

export interface ValidationTypeProps {
  type: string;
}
