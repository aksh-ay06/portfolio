import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpic1.zhimg.com%2Fv2-63137195339fea6c5974b459002c4824_r.jpg&f=1&nofb=1&ipt=24b838202e3314fbc0eb5469498eebf42e5edc8fb21d8a52476a7b36ee371cb1&ipo=images',
    url: 'https://excalidraw-nine-olive.vercel.app/',
    github: 'https://github.com/aksh-ay06/excalidraw',
    title: 'Excalidraw - Clone',
    text: 'Built and deployed a fullstack whiteboard applicaiton that utilizes websocket for bi-directional and low latency communication using socket.io, frontend made using Nextjs14 deployed on vercel and backend made using express deployed on render.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/17614476/pexels-photo-17614476/free-photo-of-young-man-using-new-meta-threads-app-on-smartphone.jpeg',
    url: 'https://threads-aksh-ay06.vercel.app/',
    github: 'https://github.com/aksh-ay06/threads',
    title: 'Thread Clone',
    text: 'Threads clone made using React,Nextjs,tailwindcss and Mongodb',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg',
    url: 'https://dazzling-kringle-dabd67.netlify.app/',
    github: 'https://github.com/aksh-ay06/Youtube-clone',
    title: 'Youtube Clone - using RapidApi v3',
    text: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5',
  },
  {
    id: nanoid(),
    img: 'https://techstartups.com/wp-content/uploads/2021/09/Bored.jpg',
    url: 'https://nft-marketplace-nu-gilt.vercel.app/',
    github: 'https://github.com/aksh-ay06/nft-marketplace',
    title: 'NFT Marketplace - Cryptoket',
    text: 'Building a nft smart-contract marketplace using Nextjs Page Router and tailwind - in progress',
  },
];
