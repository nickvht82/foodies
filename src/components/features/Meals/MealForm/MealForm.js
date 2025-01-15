'use client';

import { useFormState } from 'react-dom';
import { shareMeal } from '@/lib/helpers/actions';
import ImagePicker from '@/components/features/Meals/image-picker';
import MealsFormSubmit from '@/components/features/Meals/meals-form-submit';
import FormField from '@/components/features/Meals/MealForm/FormField/FormField';
import classes from './MealForm.module.css';

export default function MealForm() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <FormField
          label="Your name"
          type="text"
          id="name"
          name="name"
          required
        />
        <FormField
          label="Your email"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <FormField
        label="Title"
        type="text"
        id="title"
        name="title"
        required
      />
      <FormField
        label="Short Summary"
        type="text"
        id="summary"
        name="summary"
        required
      />
      <FormField
        label="Instructions"
        type="textarea"
        id="instructions"
        name="instructions"
        rows="10"
        required
      />
      <ImagePicker label="Your image" name="image" />
      {state.message && <p>{state.message}</p>}
      <p className={classes.actions}>
        <MealsFormSubmit />
      </p>
    </form>
  );
} 