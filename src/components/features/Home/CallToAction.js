import Link from 'next/link'
import classes from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <div className={classes.cta}>
      <Link href="/community">Join the Community</Link>
      <Link href="/meals">Explore Meals</Link>
    </div>
  )
}
