import React from 'react';

export interface SocialLink {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  url?: string;
  action?: () => void;
  status: 'active' | 'coming-soon';
  color: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email?: string;
  instagram?: string;
  facebook?: string;
}