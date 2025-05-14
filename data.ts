import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaInstagram,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdComputer, MdDashboard } from 'react-icons/md';
import {
  SiAmazon,
  SiAmazonaws,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOkta,
  SiOwasp,
  SiSnyk,
  SiSonarqube,
  SiThewashingtonpost,
  SiVault,
} from 'react-icons/si';
import About from './components/aboutPage/About';
import Blogs from './components/blogsPage/Blogs';
import DevBlogs from './components/blogsPage/DevBlogs';
import Contact from './components/contactPage/Contact';
import GuestBook from './components/guestbookPage/GuestBook';
import Resume from './components/resumePage/Resume';
import Stats from './components/statistics/Stats';
import Works from './components/worksPage/Works';
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from './types';

export const menus: MenuData[] = [
  {
    id: 1,
    label: 'about',
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: 'resume',
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: 'works',
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: 'blog',
    Icon: FaRegNewspaper,
    Component: DevBlogs,
  },
  {
    id: 5,
    label: 'stats',
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: 'contact',
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: 'guest book',
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaDev,
    label: 'Dev',
    logoColor: 'black',
    mediaUrl: 'https://www.dev.to/abd0hrz',
    info: 'Follow me and read my articles on Dev.to',
  },
  {
    id: 2,
    Icon: FaFacebookF,
    label: 'Facebook',
    logoColor: '#3b5998',
    mediaUrl: 'https://www.facebook.com/abd0hrz',
    info: 'Follow me on Facebook',
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: 'Github',
    logoColor: '#171515',
    mediaUrl: 'https://github.com/abd0hrz',
    info: 'Star my projects on Github',
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: 'Linkedin',
    logoColor: '#0072b1',
    mediaUrl: 'https://www.linkedin.com/in/harizi-bouabdellah/',
    info: "Let's connect on Linkedin",
  },
  {
    id: 5,
    Icon: FaInstagram,
    label: 'Instagram',
    logoColor: '#00b22d',
    mediaUrl: 'https://www.instagram.com/abdellah_hrz/',
    info: 'Follow me on Instagram',
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: 'DevOps',
    Icon: SiJenkins,
    description:
      'Automated build, test, and deployment pipelines for continuous integration and delivery across all environments.',
  },
  {
    id: 2,
    title: 'Full Stack Development',
    Icon: SiNodedotjs,
    description:
      'Building end-to-end applications using the MERN stack, covering both front-end and back-end development.',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure',
    Icon: SiAmazonaws,
    description:
      'Design and implementation of scalable, secure cloud architectures on AWS, Azure, and GCP',
  },
  {
    id: 4,
    title: 'System Administration',
    Icon: SiLinux,
    description:
      'Managed server environments, ensured system stability, security, and performance across various platforms.',
  },
  {
    id: 5,
    title: 'DevSecOps',
    Icon: SiSonarqube,
    description:
      'Security integration throughout the development lifecycle with automated scanning and compliance.',
  },
  {
    id: 6,
    title: 'Automation & Orchestration',
    Icon: SiKubernetes ,
    description:
      'Automated deployments, orchestrated workflows, and managed infrastructure to improve efficiency and reliability.',
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: 'https://www.linkedin.com/',
    imgLocation: '/images/lin.png',
  },
  {
    id: 2,
    linkLocation: 'https://www.freelancer.com/',
    imgLocation: '/images/freelancer.png',
  },
  {
    id: 3,
    linkLocation: 'https://www.upwork.com/',
    imgLocation: '/images/upwork.png',
  },
  {
    id: 4,
    linkLocation: 'https://www.envato.com/',
    imgLocation: '/images/envato.png',
  },
];

export const quoteData: TestimonialData = {
  id: 'quote',
  quote:
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  userName: 'Martin Fowler',
  userProfession: 'Software Developer',
  userImage: { url: '/images/martin.jpg' },
};

export const statisticsData: StatisticsData[] = [
  {
    title: 'stack',
    info: 'MERN or T3',
  },
  {
    title: 'projects',
    info: '70+',
  },
  {
    title: 'clients',
    info: '40+',
  },
];
