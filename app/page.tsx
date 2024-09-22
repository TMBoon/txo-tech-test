import Image from "next/image";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import Newsletter from "./components/Newsletter/newsletter";
import ImageCarousel from "./components/Carousel/carousel";


export default function Home() {
    const images = [
    {
      src: '/assets/c1.jpg',
      name: 'Sample Title',
      availability: 'Now',
      location: 'Soho',
      size: '4,200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit porro quia. Aut facilis laudantium voluptatem quibusdam nam esse rerum deserunt voluptatum numquam aliquam? Maxime veritatis eum laudantium sed nisi.'
    },
    {
      src: '/assets/c2.jpeg',
      name: 'Sample Title',
      availability: 'Next Week',
      location: 'Manhattan',
      size: '3,800',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque nam esse voluptatibus corrupti, praesentium illum ad consectetur impedit maiores placeat officiis odit! Et est id soluta! Nisi, officia maiores.'
    },
    {
      src: '/assets/c3.jpeg',
      name: 'Sample Title 2',
      availability: 'Winter',
      location: 'Berlin',
      size: '3,300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea assumenda nemo praesentium, nesciunt sed quas officia unde aliquam quia molestias incidunt consectetur! Quo quaerat autem, reprehenderit fugit consequuntur ex.'
    },
    {
      src: '/assets/c4.jpeg',
      name: 'Sample Title 2',
      availability: 'Winter',
      location: 'Paris',
      size: '5,200',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cumque, nobis quisquam ipsam veritatis accusamus at eius maxime. Earum dolore est temporibus quod necessitatibus natus maiores voluptatibus nemo sint omnis.'
    },
    {
      src: '/assets/c5.jpeg',
      name: 'Sample Title 2',
      availability: 'Next Week',
      location: 'Los Angeles',
      size: '6,000',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ut quidem, iste, aut atque quod praesentium culpa natus odit nostrum explicabo laboriosam enim, minus sit quae! Vitae, tempore voluptatem. Aliquid.'
    }
    
  ];

  return (
    <div className="h-screen">
      <main>
        <Header />
      </main>
      <Hero />
      <ImageCarousel images={images} />
      <Newsletter />
      <Footer />
    </div>
  );
}
