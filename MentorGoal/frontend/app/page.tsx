import CardPost from '@/components/cards/CardPost';
import Cards from '@/components/cards/Cards';
import TitleContainer from '@/components/container/TitleContainer';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar.tsx/Navbar';
import Slider from '@/components/Slider';
import BadgeAutreCategorie from '@/components/ui/badges/BadgeAutreCategorie';
import BadgeCategorie from '@/components/ui/badges/BadgeCategorie';
import BadgeCategorie2 from '@/components/ui/badges/BadgeCategorie2';
import BadgeCv from '@/components/ui/badges/BadgeCv';
import BadgeEntretien from '@/components/ui/badges/BadgeEntretien';
import BadgeLm from '@/components/ui/badges/BadgeLm';

// async function getArticles() {
//   const res = await fetch(`http://localhost:1337/articles?`);
//   const article = await res.json();
//   return article;
// }

// async function getRecentArticles() {
//   const res = await fetch(`http://localhost:1337/articles?populate=*`);
//   const article = await res.json();
//   return article;
// }

export default function Home() {
  // const articles = use(getArticles());
  return (
    <>
      <main className="h-screen">
        <Navbar />

        <div className="top-[152px] flex left-[695] h-[412px]">
          <Slider />
        </div>

        {/* ALLPOSTHEADER */}
        <div className="lg:flex lg:flex-row lg:items-center lg:p-0 lg:gap-16 absolute lg:w-[1110px] lg:h-12 left-32 top-[716px]">
          <h2 className="font-bold text-[34px] leading-[48px] -tracking-[0.003em] text-white lg:flex-none lg:order-none lg:flex-grow">
            Tous nos articlees
          </h2>
          <div>
            <p className="font-semibold text-base text-[#A3B5C5] lg:flex-none lg:order-none lg:flex-grow-0">
              Trier par
            </p>
            <p className="w-6 h-6 flex-none order-1 flex-grow-0">V</p>
          </div>
        </div>

        {/* CARDSCONTAINER */}
        <div className="lg:flex lg:flex-col lg:items-center lg:p-0 lg:gap-10 absolute lg:w-[1110px] h-[936px] left-32 top-[808px]">
          {/* CARDS */}
          <div className="flex flex-col items-start p-0 gap-6 lg:w-[1110px] h-[856] flex-none order-none flex-grow-0">
            {/* CARDSPOSTCONTAINER */}
            <div className="flex flex-row flex-start p-0 gap-6 lg:w-[1110px] h-[416px] flex-none order-none flex-grow-0">
              {/* CARD X3 */}
              <CardPost
                props={{
                  image: '/images/top2.jpg',
                  date: '22 Novembre 2022',
                  title: 'Personnaliser son CV',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi.',
                  categorie: 'Curriculum Vitae',
                  link: '#',
                }}
              />
              <CardPost
                props={{
                  image: '/images/top2.jpg',
                  date: '10 Novemvre 2022',
                  title: 'Préparer son pitch',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi.',
                  categorie: 'Entretien',
                  link: '#',
                }}
              />
              <CardPost
                props={{
                  image: '/images/top2.jpg',
                  date: '10 Novembre 2022',
                  title: 'Préparer son pitch',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi.',
                  categorie: 'Entretien',
                  link: '#',
                }}
              />
            </div>
            {/* CARDSPOSTCONTAINER */}
            <div className="flex flex-row flex-start p-0 gap-6 lg:w-[1110px] h-[416px] flex-none order-1 flex-grow-0">
              {/* CARD X3 */}
              <CardPost
                props={{
                  image: '/images/top2.jpg',
                  date: '10 Novembre 2022',
                  title: 'Préparer son pitch',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi.',
                  categorie: 'Lettre de motivation',
                  link: '#',
                }}
              />
              <CardPost
                props={{
                  image: '/images/top2.jpg',
                  date: '22 Novembre 2022',
                  title: 'Personnaliser son CV',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi.',
                  categorie: 'Curriculum Vitae',
                  link: '#',
                }}
              />
              <CardPost
                props={{
                  image: '/images/top2.jpg',
                  date: '10 Novembre 2022',
                  title: 'Préparer son Pitch',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi.',
                  categorie: 'lettre de Motivation',
                  link: '#',
                }}
              />
            </div>
          </div>
          <button className="box-border flex flex-row items-start px-2 py-6 gap-[10px] lg:[115px] h-10 border-solid rounded-2xl flex-none order-1 flex-grow-0">
            Voir plus
          </button>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-col items-start p-0 gap-6 absolute lg:[990px] h-[100px] left-32 top-[1848px]">
          <h2 className="w-[442px] h-12 font-bold text-[34px] leading-[48px] -tracking-[0.003] text-white flex-none flex-grow-0 order-none">
            Les catégories
          </h2>
          <div className="flex flex-row items-start p-0 gap-32 lg-[990px] h-7 flex-none order-1 flex-grow-0">
            {/* LABEL */}
            <BadgeLm children={'Lettre de Motivation'} />
            <BadgeCv children={'Curriculum Vitae'} />
            <BadgeEntretien children={'Entretien'} />
            <BadgeCategorie children={'Catégorie'} />
            <BadgeAutreCategorie children={'Autre catégorie'} />
            <BadgeCategorie2 children={'Catégorie'} />
          </div>
        </div>

        {/* ARCHIVES SECTION */}
        <div className="flex flex-col items-center p-0 gap-10 absolute lg:w-[1110px] h-[800px] left-32 top-[2044px]">
          {/* ARCHIVES */}
          <div className="flex flex-col items-start p-0 gap-6 lg:w-[1110px] h-[720px] flex-none order-none flex-grow-0">
            <h2 className="lg:w-[1110px] h-12 font-bold text-[34px] leading-[48px] -tracking-[0.003] text-white flex-noen order-none flex-grow-0">
              Les archives
            </h2>
            {/* FRAME 999 */}
            <div className="flex flex-row items-start p-0 gap-6 lg:w-[1110px] h-[200] flex-none order-1 flex-grow-0">
              {/* CARDS */}
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="flex flex-row items-start p-0 gap-6 lg:w-[1110px] h-[200] flex-none order-1 flex-grow-0">
              {/* CARDS */}
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="flex flex-row items-start p-0 gap-6 lg:w-[1110px] h-[200] flex-none order-1 flex-grow-0">
              {/* CARDS */}
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
