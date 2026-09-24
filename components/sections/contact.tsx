"use client";

import { useRef, useState, type FormEvent } from "react";

// Next-intl translations.
import { useTranslations } from "next-intl";
import { Mail, MessageCircle, Send } from "lucide-react";

// Shared site configuration and service data.
import { siteConfig } from "@/config/site";
import { services, type ServiceId } from "@/data/services";

// Shared layout and UI primitives.
import Section from "@/components/layout/section";
import BrandIcon from "@/components/ui/brand-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const t = useTranslations("Contact");
  const tServices = useTranslations("Services");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<ServiceId | "">("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // The subject stays out of the UI and is generated only when a message is sent.
  const selectedServiceLabel = service
    ? tServices(`items.${service}.title`)
    : "";

  const subject =
    name.trim() && selectedServiceLabel
      ? t("form.subjectTemplate", {
          name: name.trim(),
          service: selectedServiceLabel,
        })
      : "";

  const buildMessageBody = () =>
    [
      `${t("form.name")}: ${name.trim()}`,
      `------------------------`,
      `${t("form.phone")}: ${phone.trim()}`,
      `------------------------`,
      `${t("form.service")}: ${selectedServiceLabel}`,
      `------------------------`,
      budget ? `${t("form.budget")}: ${t(`form.budgetOptions.${budget}`)}` : "",
      "",
      `------------------------`,
      `${t("form.message")}:`,
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current?.reportValidity()) {
      return;
    }

    const body = buildMessageBody();

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppSubmit = () => {
    if (!siteConfig.contact.whatsappNumber) {
      return;
    }

    if (!formRef.current?.reportValidity()) {
      return;
    }

    const body = [subject, "", buildMessageBody()].join("\n");

    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="contact">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">{t("badge")}</Badge>

          <div>
            <p className="mb-2 font-mono text-sm text-primary">
              {t("eyebrow")}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8 lg:p-10">
            {/* Direct contact links stay at the top of the same Contact section. */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 font-mono text-sm text-primary">
                <Mail className="size-4" aria-hidden="true" />
                <span>{t("direct.title")}</span>
                <Badge className="ms-auto">{t("status")}</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {t("direct.heading")}
                </h3>
                <p className="max-w-2xl leading-7 text-muted-foreground">
                  {t("direct.description")}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                >
                  <Mail
                    className="size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="truncate text-sm text-foreground">
                    {t("direct.email")}
                  </span>
                </a>

                {siteConfig.socialLinks
                  .filter((social) => social.href)
                  .map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                    >
                      <BrandIcon
                        icon={social.icon}
                        className="size-5 shrink-0 bg-primary"
                      />
                      <span className="truncate text-sm text-foreground">
                        {social.label}
                      </span>
                    </a>
                  ))}
              </div>

              <p className="text-xs leading-6 text-muted-foreground">
                {t("direct.note")}
              </p>
            </div>

            <div className="my-8 border-t border-border" />

            {/* The form is full-width below the direct contact links. */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 font-mono text-sm text-primary">
                  <Send className="size-4" aria-hidden="true" />
                  <span>{t("form.title")}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t("form.description")}
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleEmailSubmit}
                className="space-y-5"
              >
                <FieldGroup>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="contact-name">
                        {t("form.name")}
                      </FieldLabel>
                      <Input
                        id="contact-name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder={t("form.namePlaceholder")}
                        autoComplete="name"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="contact-phone">
                        {t("form.phone")}
                      </FieldLabel>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder={t("form.phonePlaceholder")}
                        autoComplete="tel"
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="contact-service">
                        {t("form.service")}
                      </FieldLabel>
                      <Select
                        id="contact-service"
                        name="service"
                        value={service}
                        onChange={(event) =>
                          setService(event.target.value as ServiceId)
                        }
                        required
                      >
                        <option value="" disabled>
                          {t("form.servicePlaceholder")}
                        </option>

                        {services.map((item) => (
                          <option key={item.id} value={item.id}>
                            {tServices(`items.${item.translationKey}.title`)}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="contact-budget">
                        {t("form.budget")}
                      </FieldLabel>
                      <Select
                        id="contact-budget"
                        name="budget"
                        value={budget}
                        onChange={(event) => setBudget(event.target.value)}
                      >
                        <option value="">{t("form.budgetPlaceholder")}</option>

                        {siteConfig.budgetOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {t(`form.budgetOptions.${option.labelKey}`)}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="contact-message">
                      {t("form.message")}
                    </FieldLabel>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder={t("form.messagePlaceholder")}
                      className="min-h-40 w-full"
                      required
                    />
                  </Field>
                </FieldGroup>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" size="lg" className="flex-1">
                    <Mail />
                    {t("form.emailSubmit")}
                  </Button>

                  <Button
                    type="button"
                    size="lg"
                    onClick={handleWhatsAppSubmit}
                    disabled={!siteConfig.contact.whatsappNumber}
                    className="flex-1 bg-whatsapp text-white hover:bg-whatsapp-strong hover:text-white"
                  >
                    <BrandIcon icon="whatsapp" className="size-5 bg-white" />
                    {t("form.whatsappSubmit")}
                  </Button>
                </div>

                <p className="text-xs leading-6 text-muted-foreground">
                  <MessageCircle
                    className="me-1 inline size-3.5 align-[-2px]"
                    aria-hidden="true"
                  />
                  {t("form.note")}
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
