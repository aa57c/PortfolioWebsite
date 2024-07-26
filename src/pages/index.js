import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Ashna's Portfolio</title>
				<meta name="description" content="Joel's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div>
                <Hero />
                <About/>
                <Skills />
                <Projects/>

                {
                    /*<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />*/ 
                }
				
			</div>
		</>
	);
};

export default Home;