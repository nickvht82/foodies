import CommunityHeader from '@/components/features/Community/CommunityHeader';
import CommunityPerk from '@/components/features/Community/CommunityPerk';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

const PERKS = [
  {
    icon: mealIcon,
    alt: 'A delicious meal',
    description: 'Share & discover recipes'
  },
  {
    icon: communityIcon,
    alt: 'A crowd of people, cooking',
    description: 'Find new friends & like-minded people'
  },
  {
    icon: eventsIcon,
    alt: 'A crowd of people at a cooking event',
    description: 'Participate in exclusive events'
  }
];

export default function CommunityPage() {
  return (
    <>
      <CommunityHeader />
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          {PERKS.map((perk, index) => (
            <CommunityPerk
              key={index}
              icon={perk.icon}
              alt={perk.alt}
              description={perk.description}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
