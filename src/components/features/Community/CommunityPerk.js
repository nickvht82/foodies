import Image from 'next/image';
import classes from './CommunityPerk.module.css';

export default function CommunityPerk({ icon, alt, description }) {
  return (
    <li className={classes.perk}>
      <Image src={icon} alt={alt} />
      <p>{description}</p>
    </li>
  );
} 