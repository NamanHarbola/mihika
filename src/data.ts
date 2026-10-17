export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  org: string;
  image: string;
  /** Optional: link to a video for this project (e.g. a Google Drive share link,
   *  YouTube/Vimeo link, or any URL). When set, a "Watch Video" button appears
   *  in the project modal, opening the link in a new tab. */
  videoUrl?: string;
  tools: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Aadyam Unscripted — Season 3",
    category: "Production",
    role: "Creative Producer",
    org: "with Akarsh Khurana, Mumbai — Ongoing 2026",
    image: "/pics/image.png",
    // Example only — replace with a real Google Drive share link, or remove this line to hide the button.
    videoUrl: "https://drive.google.com/drive/folders/1Q4nra9CAwpIWybCFw173iQHk1zuGhspG?usp=sharing",
    tools: ["Creative Direction", "Event Management", "Team Leadership"],
    description: "Creative producer on the third season of Aadyam Unscripted, an improvised theatre show helmed by Akarsh Khurana — shaping the creative direction and running the show on the ground in Mumbai."
  },
  {
    id: "02",
    title: "Thespo 26",
    category: "Festival",
    role: "Junior Festival Director",
    org: "Thespo India, Mumbai — 2024–25",
    image: "/pics/image2.png",
     videoUrl: "https://drive.google.com/drive/folders/126aOBZAvQwnyRk3h1YnNve3qEy8CYDPW?usp=drive_link",
    tools: ["Festival Management", "Team Leadership", "Creative Research"],
    description: "Junior Festival Director for Thespo 26, India's largest youth theatre festival — coordinating programming and teams across the festival, after a prior year coordinating The First Call and Friends of Thespo."
  },
  {
    id: "03",
    title: "The 39 Steps",
    category: "Theatre",
    role: "Director",
    org: "SCEDA, Sophia College, Mumbai — 2023–24",
    image: "https://picsum.photos/seed/the-39-steps-play/900/700",
    tools: ["Theatre Direction", "Visual Storytelling"],
    description: "Directed a full production of \"The 39 Steps\" as Club President of SCEDA at Sophia College — leading the cast and creative team from concept to stage."
  },
  {
    id: "04",
    title: "MnM Talkies & Productions",
    category: "Production",
    role: "Associate Producer",
    org: "Mumbai — 2025–Present",
    image: "https://picsum.photos/seed/mnm-talkies-productions/900/700",
    tools: ["Production", "Event Management"],
    description: "Associate Producer at MnM Talkies & Productions, working across the production pipeline on the company's ongoing slate of projects in Mumbai."
  },
  {
    id: "05",
    title: "Kaleidoscope Festival",
    category: "Design",
    role: "Graphic Designer → Senior Designer",
    org: "Sophia College, Mumbai — 2023–24, 2024–25",
    image: "https://picsum.photos/seed/kaleidoscope-festival-design/900/700",
    tools: ["Graphic Design", "Photoshop", "Canva"],
    description: "Grew from Graphic Designer to Senior Designer across two editions of Sophia College's Kaleidoscope Festival, shaping the festival's visual identity."
  },
  {
    id: "06",
    title: "Two Faced Mistress",
    category: "Film",
    role: "3rd Assistant Director",
    org: "Vertical Micro Drama, Mumbai — 2025",
    image: "https://picsum.photos/seed/two-faced-mistress-film/900/700",
    tools: ["Assistant Direction", "Cinematography"],
    description: "3rd Assistant Director on \"Two Faced Mistress,\" a vertical micro-drama shot and produced in Mumbai."
  },
  {
    id: "07",
    title: "Connections India",
    category: "Production",
    role: "Assistant Producer",
    org: "Mumbai — 2025",
    image: "https://picsum.photos/seed/connections-india-production/900/700",
    tools: ["Production", "Event Management"],
    description: "Assistant Producer for Connections India, supporting production and on-ground logistics across the event."
  },
  {
    id: "08",
    title: "Arihant Capital Corporate Event",
    category: "Production",
    role: "Producer",
    org: "Mumbai — 2025",
    image: "https://picsum.photos/seed/arihant-capital-event/900/700",
    tools: ["Production", "Event Management"],
    description: "Produced a corporate event for Arihant Capital in Mumbai, overseeing planning and execution end to end."
  }
];

export const skills = [
  { name: "Theatre Direction & Production", level: 95 },
  { name: "Event & Festival Management", level: 92 },
  { name: "Assistant Direction & Video Editing", level: 85 },
  { name: "Graphic Design (Photoshop & Canva)", level: 82 },
  { name: "Cinematography", level: 78 },
];

export const services = [
  {
    title: "Theatre Direction",
    description: "End-to-end direction for stage productions — from script and casting to blocking, rehearsals, and opening night.",
    icon: "clapperboard"
  },
  {
    title: "Production & Event Management",
    description: "Producing and coordinating festivals, corporate events, and live shows, from planning through on-ground execution.",
    icon: "monitor-play"
  },
  {
    title: "Assistant Direction & Editing",
    description: "On-set assistant direction and Adobe-based video editing support for film and micro-drama productions.",
    icon: "smartphone"
  },
  {
    title: "Graphic Design",
    description: "Visual identity, posters, and festival branding designed in Photoshop and Canva.",
    icon: "aperture"
  }
];
