"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const serviceOptions = [
  { value: "home-villa", label: "Home & Villa Cleaning" },
  { value: "deep-detail", label: "Deep & Detail Cleaning" },
  { value: "maid", label: "Maid Services" },
  { value: "laundry", label: "Laundry & Fabric Care" },
  { value: "office", label: "Office Cleaning" },
  { value: "not-sure", label: "Not sure yet" },
];

const areaOptions = [
  { value: "sharjah", label: "Sharjah" },
  { value: "ajman", label: "Ajman" },
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  area: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  area: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Tell us your name.";
    if (!values.phone.trim()) nextErrors.phone = "We need a number to reach you on.";
    if (!values.service) nextErrors.service = "Choose the service you need.";
    if (!values.area) nextErrors.area = "Let us know which city.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const serviceLabel = serviceOptions.find((s) => s.value === values.service)?.label ?? "";
    const areaLabel = areaOptions.find((a) => a.value === values.area)?.label ?? "";

    const lines = [
      "Hello Bait Clean, I'd like to request a quote.",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Service: ${serviceLabel}`,
      `Area: ${areaLabel}`,
      values.message.trim() ? `Notes: ${values.message.trim()}` : "",
    ].filter(Boolean);

    const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    setSent(true);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border/70 bg-card p-8 sm:p-10">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckIcon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-serif text-2xl font-medium text-foreground">
            Message ready.
          </h3>
          <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
            We opened WhatsApp with your details filled in — just hit send.
            Didn&apos;t open?{" "}
            <button
              type="button"
              onClick={() => setSent(false)}
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              Try again
            </button>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8"
    >
      <FieldGroup>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Fatima Al Suwaidi"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <FieldError>{errors.name}</FieldError> : null}
          </Field>

          <Field data-invalid={Boolean(errors.phone)}>
            <FieldLabel htmlFor="phone">Phone number</FieldLabel>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="050 000 0000"
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? <FieldError>{errors.phone}</FieldError> : null}
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.service)}>
            <FieldLabel htmlFor="service">Service needed</FieldLabel>
            <Select value={values.service} onValueChange={(value) => update("service", value as string)}>
              <SelectTrigger id="service" className="w-full" aria-invalid={Boolean(errors.service)}>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.service ? <FieldError>{errors.service}</FieldError> : null}
          </Field>

          <Field data-invalid={Boolean(errors.area)}>
            <FieldLabel htmlFor="area">City</FieldLabel>
            <Select value={values.area} onValueChange={(value) => update("area", value as string)}>
              <SelectTrigger id="area" className="w-full" aria-invalid={Boolean(errors.area)}>
                <SelectValue placeholder="Sharjah or Ajman" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {areaOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.area ? <FieldError>{errors.area}</FieldError> : null}
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="message">
            Anything we should know?{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </FieldLabel>
          <Textarea
            id="message"
            placeholder="Number of bedrooms, preferred days, pets in the home..."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className="min-h-28"
          />
          <FieldDescription>
            We&apos;ll reply on WhatsApp, usually within the hour.
          </FieldDescription>
        </Field>

        <Button type="submit" className="h-12 w-full text-[0.95rem] tracking-wide sm:w-auto">
          Send via WhatsApp
          <ArrowRightIcon
            data-icon="inline-end"
            className="transition-transform duration-300 group-hover/button:translate-x-0.5"
          />
        </Button>
      </FieldGroup>
    </form>
  );
}
