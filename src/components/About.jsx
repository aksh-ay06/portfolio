import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='mx-auto max-w-7xl  px-8 grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          Hi, I’m Akshay Patel, a passionate technologist with a background in Chemical Engineering and a current Master’s student in Industrial Engineering at West Virginia University. I have hands-on experience in data science, machine learning, and web development, gained through roles as a Data Science Intern at BlueSpace Labs and a Graduate Research Assistant in pollution prevention. I thrive on solving complex problems and enjoy working on projects that make a positive environmental and societal impact. In my free time, I like to explore cybersecurity and build personal projects,workout, read literature and non fiction, wall climb and play guitar. Feel free to explore my work and connect with me!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
