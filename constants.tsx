
import { WorkItem, WIPItem, Course } from './types';

export const ART_WORKS: WorkItem[] = [
  {
    id: 'metamorphosis',
    title: 'Metamorphosis',
    category: 'art',
    description: 'Moments of quiet change. Soft strength. The space right before life shifts direction.',
    image: 'https://picsum.photos/seed/art1/1200/800',
    meaning: 'Exploration of internal growth and shedding old versions of oneself.',
    fullStory: 'Metamorphosis was born during a period of deep transition in my personal life. It captures the tension between comfort and the unknown.'
  },
  {
    id: 'imagination-edge',
    title: 'Imagination Edge',
    category: 'art',
    description: 'Visual stories and collections that explore growth, imagination, and identity.',
    image: 'https://picsum.photos/seed/art2/1200/800',
    meaning: 'The boundary where logic ends and dreams begin.',
    fullStory: 'A collection that uses surrealist landscapes to represent the feeling of cognitive breakthroughs.'
  }
];

export const APP_WORKS: WorkItem[] = [
  {
    id: 'daily-clarity',
    title: 'Daily Clarity',
    category: 'tool',
    description: 'A calm place to sort thoughts, write, decide, and reset.',
    image: 'https://picsum.photos/seed/app1/1200/800'
  },
  {
    id: 'expectation-translator',
    title: 'Expectation Translator',
    category: 'tool',
    description: 'A tool that helps turn unclear requests into something workable and specific.',
    image: 'https://picsum.photos/seed/app2/1200/800'
  },
  {
    id: 'digital-jaywalking',
    title: 'Digital Jaywalking Experiments',
    category: 'tool',
    description: 'Small prototypes that explore creativity, structure, and everyday problem solving.',
    image: 'https://picsum.photos/seed/app3/1200/800'
  }
];

export const WIP_ITEMS: WIPItem[] = [
  {
    id: 'unvague',
    title: 'Unvague',
    description: 'A clarity tool that turns fuzzy writing into clear direction.',
    status: 'Needs beta testers'
  },
  {
    id: 'daily-clarity-v2',
    title: 'Daily Clarity (v2)',
    description: 'Live, but still evolving. I am refining the experience.',
    status: 'Needs beta testers'
  },
  {
    id: 'hirewire',
    title: 'HireWire AI',
    description: 'A system for organizing hiring conversations and creative work.',
    status: 'Needs beta testers'
  },
  {
    id: 'djw-hub',
    title: 'Digital Jaywalking Hub',
    description: 'A playful space for tools, learning, and creative systems.',
    status: 'Needs beta testers'
  }
];

export const COURSES: Course[] = [
  {
    title: 'Prompting Basics for Real Work',
    description: 'How to ask better questions, shape ideas, and get results you can actually use.'
  },
  {
    title: 'Understanding AI Without the Noise',
    description: 'A friendly introduction for professionals who want clarity first.'
  },
  {
    title: 'Creative Systems for Busy People',
    description: 'How to use tools and simple automations to save time and protect energy.'
  },
  {
    title: 'Education and Learning Design with AI',
    description: 'Thoughtful ways to support students, reflection, and creativity.'
  }
];
