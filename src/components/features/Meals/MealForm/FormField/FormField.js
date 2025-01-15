export default function FormField({ label, type, id, name, required, rows }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
        />
      )}
    </p>
  );
} 