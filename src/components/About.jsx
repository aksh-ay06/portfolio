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
            A curious individual trying too learn his way through life.
            Looking for fullstack roles currently MERN stack. 
            My hobbies include playing reading books, watching anime, playing guitar and working out.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
