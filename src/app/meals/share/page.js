'use client'

import MealForm from '@/components/features/Meals/MealForm/MealForm'
import PageHeader from '@/components/common/PageHeader/PageHeader'
import classes from './page.module.css'

export default function ShareMealPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Share your <span className={classes.highlight}>favorite meal</span>
          </>
        }
        subtitle="Or any other meal you feel needs sharing!"
        className={classes.header}
      />
      <main className={classes.main}>
        <MealForm />
      </main>
    </>
  )
}
