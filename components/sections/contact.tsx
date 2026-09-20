"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  WalletCards,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import type { ServiceId } from "@/data/services";
import { services } from "@/data/services";
import {
  CONTACT_SERVICE_EVENT,
} from "@/lib/contact-service";

import BrandIcon from "@/components/ui/brand-icon";
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
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
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const generatedMessageRef = useRef("");

  const applyService = useCallback(
    (serviceId: ServiceId) => {
      const defaultMessage = t(`form.defaultMessages.${serviceId}`);

      setService(serviceId);
      setMessage((current) =>
        !current.trim() || current === generatedMessageRef.current
          ? defaultMessage
          : current,
      );
      generatedMessageRef.current = defaultMessage;
    },
    [t],
  );

  useEffect(() => {
    const handleServiceSelect = (event: Event) => {
      const serviceId = (event as CustomEvent<ServiceId>).detail;

      if (!services.some((item) => item.id === serviceId)) {
        return;
      }

      applyService(serviceId);
    };

    window.addEventListener(CONTACT_SERVICE_EVENT, handleServiceSelect);

    return () => {
      window.removeEventListener(CONTACT_SERVICE_EVENT, handleServiceSelect);
    };
  }, [applyService]);

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
      `${t("form.phone")}: ${phone.trim()}`,
      `${t("form.service")}: ${selectedServiceLabel}`,
      budget
        ? `${t("form.budget")}: ${t(`form.budgetOptions.${budget}`)}`
        : "",
      company ? `${t("form.company")}: ${company.trim()}` : "",
      "",
      `${t("form.message)}:`,
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !service || !message.trim()) {
      return;
    }

    const body = buildMessageBody();

    window.location.href =
      `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppSubmit = () => {
    if (
      !siteConfig.contact.whatsappNumber ||
      !name.trim() ||
      !phone.trim() ||
      !service ||
      !message.trim()
    ) {
      return;
    }

    const body = [
      subject,
      "",
      buildMessageBody(),
    ].join("\n");

    const url =
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(body)}`;

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

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="h-full">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 font-mono text-sm text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                  <span>{t("direct.title")}</span>
                </div>
                <Badge>{t("status")}</Badge>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-xl font-semibold text-foreground">
                  {t("direct.heading")}
                </p>
                <p className="leading-7 text-muted-foreground">
                  {t("direct.description")}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                >
                  <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground">
                    {siteConfig.contact.email}
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>

                {siteConfig.socialLinks
                  .filter((social) => social.href)
                  .map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                    >
                      <BrandIcon
                        icon={social.icon}
                        className="size-5 bg-primary"
                      />
                      <span className="flex-1 text-sm text-foreground">
                        {social.label}
                      </span>
                      <ArrowUpRight
                        className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
              </div>

              <p className="mt-auto pt-8 text-xs leading-6 text-muted-foreground">
                {t("direct.note")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 font-mono text-sm text-primary">
                  <Send className="size-4" aria-hidden="true" />
                  <span>{t("form.title")}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t("form.description")}
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-5">
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
                        onChange={(event) => {
                          const value = event.target.value as ServiceId;

                          if (value) {
                            applyService(value);
                          }
                        }}
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
                        <option value="">
                          {t("form.budgetPlaceholder")}
                        </option>

                        {siteConfig.budgetOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {t(`form.budgetOptions.${option.labelKey}`)}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="contact-company">
                      {t("form.company")}
                    </FieldLabel>
                    <Input
                      id="contact-company"
                      name="company"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      placeholder={t("form.companyPlaceholder")}
                      autoComplete="organization"
                    />
                    <FieldDescription>
                      {t("form.optional")}
                    </FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="contact-subject">
                      {t("form.subject")}
                    </FieldLabel>
                    <Input
                      id="contact-subject"
                      name="subject"
                      value={subject}
                      placeholder={t("form.subjectPlaceholder")}
                      readOnly
                    />
                    <FieldDescription>
                      {t("form.subjectNote")}
                    </FieldDescription>
                  </Field>

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
                      required
                    />
                  </Field>
                </FieldGroup>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1"
                  >
                    <Mail />
                    {t("form.emailSubmit")}
                  </Button>

                  <Button
                    type="button"
                    size="lg"
                    onClick={handleWhatsAppSubmit}
                    disabled={!siteConfig.contact.whatsappNumber}
                    className="flex-1 bg-whatsapp text-white hover:bg-whatsapp-strong hover:text-white"
                    title={
                      siteConfig.contact.whatsappNumber
                        ? undefined
                        : t("form.whatsappNotConfigured")
                    }
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
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
