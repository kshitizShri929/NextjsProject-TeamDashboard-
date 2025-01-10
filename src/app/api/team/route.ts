// src/app/api/team/route.ts
import { NextResponse } from "next/server";

const teamData = [
  {
    id: '1',
    name: 'Mrs. Gupta',
    role: 'Full-Stack Developer',
    bio: 'Expert in building scalable web applications with a passion for solving complex problems.',
  },
  {
    id: '2',
    name: 'Ishita Sharma',
    role: 'UI/UX Designer',
    bio: 'Creative designer focusing on crafting user-friendly and visually appealing interfaces.',
  },
  {
    id: '3',
    name: 'Adarsh Verma',
    role: 'DevOps Engineer',
    bio: 'Specialist in CI/CD pipelines, cloud infrastructure, and automation tools.',
  },
  {
    id: '4',
    name: 'Kavya Menon',
    role: 'Product Manager',
    bio: 'Driven by strategy and teamwork to deliver impactful products that solve real-world challenges.',
  },
  {
    id: '5',
    name: 'Aditya Narayan',
    role: 'Data Scientist',
    bio: 'Loves analyzing data to derive actionable insights and improve decision-making.',
  },
  {
    id: '6',
    name: 'Priya Patel',
    role: 'Quality Assurance Engineer',
    bio: 'Committed to delivering flawless software through rigorous testing and continuous improvement.',
  },
  {
    id: '7',
    name: 'Vikram Singh',
    role: 'Cybersecurity Specialist',
    bio: 'Passionate about securing systems and preventing threats in the digital age.',
  },
  {
    id: '8',
    name: 'Meera Iyer',
    role: 'Content Strategist',
    bio: 'An expert in creating compelling content that resonates with the audience and drives engagement.',
  },
  {
    id: '9',
    name: 'Arjun Deshmukh',
    role: 'Machine Learning Engineer',
    bio: 'A tech enthusiast keen on developing intelligent systems using AI and ML.',
  },
  {
    id: '10',
    name: 'Neha Choudhary',
    role: 'Business Analyst',
    bio: 'Adept at bridging the gap between business needs and technical solutions with precision.',
  },
  {
    id: '11',
    name: 'Arjun Deshmukh',
    role: 'Machine Learning Engineer',
    bio: 'A tech enthusiast keen on developing intelligent systems using AI and ML.',
  },
  {
    id: '12',
    name: 'Neha Choudhary',
    role: 'Business Analyst',
    bio: 'Adept at bridging the gap between business needs and technical solutions with precision.',
  },
];

// The new API route structure with Next.js 13+
// You should use NextResponse to return JSON in API route
export async function GET() {
  return NextResponse.json(teamData);
}
