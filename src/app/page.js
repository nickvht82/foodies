import ImageSlideshow from '@/components/common/Image/image-slideshow'
import FoodSection from '@/components/features/Home/FoodSection'
import CallToAction from '@/components/features/Home/CallToAction'
import ContentSection from '@/components/features/Home/ContentSection'
import classes from './page.module.css'

export default function Home() {
  const sections = [
    {
      title: 'How it works',
      paragraphs: [
        "NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.",
        'NextLevel Food is a place to discover new dishes, and to connect with other food lovers.',
      ],
    },
    {
      title: 'Why NextLevel Food?',
      paragraphs: [
        "NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.",
        'NextLevel Food is a place to discover new dishes, and to connect with other food lovers.',
      ],
    },
  ]

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <FoodSection />
          <CallToAction />
        </div>
      </header>
      <main>
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
          />
        ))}
      </main>
    </>
  )
}
