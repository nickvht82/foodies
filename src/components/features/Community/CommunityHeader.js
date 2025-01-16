import classes from './CommunityHeader.module.css'

export default function CommunityHeader() {
  return (
    <header className={classes.header}>
      <h1>
        One shared passion: <span className={classes.highlight}>Food</span>
      </h1>
      <p>Join our community and share your favorite recipes!</p>
    </header>
  )
}
