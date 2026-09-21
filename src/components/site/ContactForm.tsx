import { useState, type FormEvent } from "react";

import { Eyebrow } from "./primitives";
import { cn } from "@/lib/utils";

const interests = [
  "Buying",
  "Selling",
  "Investment",
  "Off-Plan",
  "Leasing",
  "Commercial",
  "Portfolio Advisory",
  "Other",
];

type Fields = { name: string; email: string; phone: string; interest: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const fieldClass =
  "w-full border-b border-input bg-transparent py-3.5 text-base text-ink outline-none transition-[border-color,padding] duration-400 placeholder:text-muted-foreground/60 focus:border-gold focus:pl-0.5";

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Fields, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const validate = (): Errors => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.phone.trim().length < 7) next.phone = "Please enter a contactable number.";
    if (!values.interest) next.interest = "Please select an area of interest.";
    if (values.message.trim().length < 10)
      next.message = "A sentence or two about your requirement helps us prepare.";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // No backend is connected yet. Wire this submission to your preferred
    // handler (server function, CRM or email service) without changing the UI.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-t border-gold pt-10" role="status" aria-live="polite">
        <Eyebrow tone="gold">Enquiry prepared</Eyebrow>
        <p className="display-sm mt-6 max-w-lg">
          Thank you, {values.name.split(" ")[0]}. Your enquiry has been captured.
        </p>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Submission delivery is not yet connected on this site. For an immediate
          response, please call the number listed on this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="Full name"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
            placeholder="+971"
          />
        </Field>
        <Field id="interest" label="I'm interested in" error={errors.interest}>
          <select
            id="interest"
            name="interest"
            required
            value={values.interest}
            onChange={(e) => set("interest", e.target.value)}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="">Select an area</option>
            {interests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-none")}
          placeholder="A short note about what you're considering."
        />
      </Field>

      <button
        type="submit"
        className="group label-eyebrow inline-flex min-h-12 items-center gap-3 border border-ink bg-ink px-8 py-4 text-warmwhite transition-all duration-500 hover:-translate-y-0.5 hover:bg-graphite hover:shadow-[0_14px_30px_-18px_rgba(10,10,9,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        Send enquiry
        <span
          aria-hidden
          className="transition-transform duration-500 group-hover:translate-x-1"
        >
          &#8594;
        </span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-eyebrow block text-muted-foreground">
        {label}
      </label>
      <div className="mt-3">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
