
import { WorkItem, WIPItem, Course } from './types';

export const ART_WORKS: WorkItem[] = [
  {
    id: 'bonfire-gathering',
    title: 'Bonfire Gathering',
    category: 'art',
    description: 'Two women sharing warmth and stories under the stars.',
    image: '/images/2 black women at bonfire.png',
    meaning: 'Community, connection, and the quiet intimacy of shared moments.',
    fullStory: 'Inspired by the power of gathering and the healing that happens when we make space for each other.'
  },
  {
    id: 'diverse-unity',
    title: 'Standing Together',
    category: 'art',
    description: 'Three people united in presence and purpose.',
    image: '/images/3 diverse people standing together.jpg',
    meaning: 'Strength in diversity and the beauty of collective presence.',
    fullStory: 'A celebration of unity without uniformity.'
  },
  {
    id: 'autumn-bottle',
    title: 'Autumn in a Bottle',
    category: 'art',
    description: 'Seasons captured, memories preserved.',
    image: '/images/autumn in a bottle.png',
    meaning: 'The art of holding onto fleeting moments.',
    fullStory: 'An exploration of nostalgia and the desire to preserve what we love.'
  },
  {
    id: 'big-bird-2',
    title: 'Big Bird 2',
    category: 'art',
    description: 'Whimsical flight and childlike wonder.',
    image: '/images/big bird 2.png',
    meaning: 'Freedom, imagination, and the joy of possibility.',
    fullStory: 'A playful tribute to the creatures that inspire us to dream bigger.'
  },
  {
    id: 'big-mouth-1',
    title: 'Big Mouth',
    category: 'art',
    description: 'Bold expression and unapologetic voice.',
    image: '/images/Big mouth 1.png',
    meaning: 'Speaking your truth without shrinking.',
    fullStory: 'A visual statement on the power of owning your narrative.'
  },
  {
    id: 'peter-goodhall-woman',
    title: 'Goodhall Study',
    category: 'art',
    description: 'A portrait study inspired by Peter Goodhall style.',
    image: '/images/Black woman Peter goodhall sytle 1.png',
    meaning: 'Grace, elegance, and the depth of Black femininity.',
    fullStory: 'An homage to portraiture that honors presence and personality.'
  },
  {
    id: 'blackground-expand',
    title: 'Blackground Expand',
    category: 'art',
    description: 'Words emerging from darkness, taking shape.',
    image: '/images/Blackground _expand and add words.png',
    meaning: 'The creative process of building meaning from emptiness.',
    fullStory: 'A meditation on language, space, and emergence.'
  },
  {
    id: 'bliss-on-swing',
    title: 'Bliss on Swing',
    category: 'art',
    description: 'Pure joy in motion.',
    image: '/images/bliss on swing 1.png',
    meaning: 'The freedom found in simple pleasures.',
    fullStory: 'Capturing the feeling of weightlessness and carefree happiness.'
  },
  {
    id: 'clay-woman-sculpture',
    title: 'Clay Woman',
    category: 'art',
    description: 'Sculpted form, timeless beauty.',
    image: '/images/Clay woman sculpture.png',
    meaning: 'The permanence of art and the stories held in form.',
    fullStory: 'Exploring texture, shape, and the tactile nature of creativity.'
  },
  {
    id: 'clowns-at-ball',
    title: 'Clowns at the Ball',
    category: 'art',
    description: 'Playful chaos and masked celebration.',
    image: '/images/Clowns at the ball.png',
    meaning: 'The duality of performance and authenticity.',
    fullStory: 'A surreal exploration of identity and social theater.'
  },
  {
    id: 'colorful-skulls',
    title: 'Colorful Skulls at Night',
    category: 'art',
    description: 'Life, death, and vibrant celebration.',
    image: '/images/colorful skulls at night.png',
    meaning: 'Honoring what has passed while celebrating what remains.',
    fullStory: 'Inspired by Día de los Muertos and the beauty of remembrance.'
  },
  {
    id: 'kid-poster',
    title: 'Kid Poster',
    category: 'art',
    description: 'Youth, energy, and boundless potential.',
    image: '/images/kid poster 1.png',
    meaning: 'The unfiltered creativity of childhood.',
    fullStory: 'A tribute to the fearless imagination we all once had.'
  },
  {
    id: 'lady-flower-window',
    title: 'Lady Flower Window',
    category: 'art',
    description: 'A woman framed by nature and light.',
    image: '/images/Lady Flower Window3.png',
    meaning: 'The intersection of humanity and the natural world.',
    fullStory: 'Exploring the quiet beauty of observation and stillness.'
  },
  {
    id: 'pleasure-mania',
    title: 'Pleasure Mania',
    category: 'art',
    description: 'Intensity, desire, and the pursuit of feeling.',
    image: '/images/Pleasure Mania 1.png',
    meaning: 'The extremes of human experience.',
    fullStory: 'An exploration of passion, sensation, and emotional depth.'
  },
  {
    id: 'rose',
    title: 'Rose',
    category: 'art',
    description: 'Classic beauty, timeless symbolism.',
    image: '/images/Rose.png',
    meaning: 'Love, fragility, and enduring elegance.',
    fullStory: 'A study in simplicity and the power of a single subject.'
  },
  {
    id: 'sofa-cat-beach',
    title: 'Sofa with Cat at Beach',
    category: 'art',
    description: 'Surreal comfort in unexpected places.',
    image: '/images/sofa with cat at beach 2.png',
    meaning: 'Home is wherever you choose to rest.',
    fullStory: 'A playful look at comfort, displacement, and the absurd.'
  },
  {
    id: 'toddler-garden',
    title: 'Toddler in Garden',
    category: 'art',
    description: 'Discovery, wonder, and the magic of growth.',
    image: '/images/toddler in garden.png',
    meaning: 'The beginning of a journey.',
    fullStory: 'Capturing the innocence of early exploration and curiosity.'
  },
  {
    id: 'white-locs',
    title: 'White Locs',
    category: 'art',
    description: 'Wisdom, age, and cultural beauty.',
    image: '/images/white locs.png',
    meaning: 'The grace that comes with time.',
    fullStory: 'A portrait honoring elders and the stories they carry.'
  },
  {
    id: 'guitar-in-pond',
    title: 'Guitar in Pond',
    category: 'art',
    description: 'Music meets nature in surreal harmony.',
    image: '/images/white person with guitar in a pond.png',
    meaning: 'Art as immersion, creativity as baptism.',
    fullStory: 'A dreamlike scene exploring the relationship between sound and stillness.'
  },
  {
    id: 'whitney-houston',
    title: 'Whitney Houston',
    category: 'art',
    description: 'An homage to a legendary voice.',
    image: '/images/Whitney Houston.1.png',
    meaning: 'Celebrating excellence and cultural impact.',
    fullStory: 'A tribute to artistry that transcends time.'
  },
  {
    id: 'yellow-bus',
    title: 'Yellow Bus Drop Off',
    category: 'art',
    description: 'Childhood memories and the ritual of arrival.',
    image: '/images/yellow bus drop off.png',
    meaning: 'The places we return to, the routines that shape us.',
    fullStory: 'A nostalgic look at everyday moments that feel monumental in memory.'
  }
];

export const APP_WORKS: WorkItem[] = [
  {
    id: 'daily-clarity',
    title: 'Daily Clarity',
    category: 'tool',
    description: 'A calm place to sort thoughts, write, decide, and reset.',
    image: '/thumbnails/daily_clarity.png',
    url: 'https://dailyclarity.netlify.app/' // Add your app URL here
  },
  {
    id: 'digital-jaywalking',
    title: 'Digital Jaywalking Experiments',
    category: 'tool',
    description: 'Small prototypes that explore creativity, structure, and everyday problem solving.',
    image: '/thumbnails/digital_jaywalking.png',
    url: 'https://digitaljaywalking.netlify.app/' // Add your app URL here
  },
  {
    id: 'hirewire',
    title: 'HireWire AI',
    category: 'tool',
    description: 'A system for organizing hiring conversations and creative work.',
    image: '/thumbnails/hirewire.png',
    url: 'https://hirewireai.netlify.app/' // Add your app URL here
  },
  {
    id: 'unvague',
    title: 'Unvague',
    category: 'tool',
    description: 'A clarity tool that turns fuzzy writing into clear direction.',
    image: '/thumbnails/unvague.png',
    url: 'https://unvague.netlify.app/' // Add your app URL here
  }
];

export const WIP_ITEMS: WIPItem[] = [
  {
    id: 'unvague',
    title: 'Unvague',
    description: 'A clarity tool that turns fuzzy writing into clear direction.',
    status: 'Needs beta testers',
    image: '/thumbnails/unvague.png',
    url: 'https://unvague.netlify.app/' // Add your app URL here
  },
  {
    id: 'daily-clarity-v2',
    title: 'Daily Clarity (v2)',
    description: 'Live, but still evolving. I am refining the experience.',
    status: 'Needs beta testers',
    image: '/thumbnails/daily_clarity.png',
    url: 'https://dailyclarity.netlify.app/' // Add your app URL here
  },
  {
    id: 'hirewire',
    title: 'HireWire AI',
    description: 'A system for organizing hiring conversations and creative work.',
    status: 'Needs beta testers',
    image: '/thumbnails/hirewire.png',
    url: 'https://hirewireai.netlify.app/' // Add your app URL here
  },
  {
    id: 'djw-hub',
    title: 'Digital Jaywalking Hub',
    description: 'A playful space for tools, learning, and creative systems.',
    status: 'Needs beta testers',
    image: '/thumbnails/digital_jaywalking.png',
    url: 'https://digitaljaywalking.netlify.app/' // Add your app URL here
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
