"use client";

import { FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "mosokara2007@gmail.com";
const GITHUB_URL = "https://github.com/MoSokara";
const LINKEDIN_URL = "https://www.linkedin.com/in/mosokara";

export default function Contact() {
  const t = useTranslations("Contact");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const mailSubject = subject || `${t("form.defaultSubject")} - ${name}`;
    const body = [
      `${t("form.name")}: ${name}`,
      `${t("form.email")}: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">
                      {t("direct.email")}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {CONTACT_EMAIL}
                    </span>
                  </span>

                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">
                      {t("direct.github")}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      github.com/MoSokara
                    </span>
                  </span>

                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:border-primary/30 hover:bg-muted/60"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">
                      {t("direct.linkedin")}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      linkedin.com/in/mosokara
                    </span>
                  </span>

                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <FieldGroup>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="contact-name">
                        {t("form.name")}
                      </FieldLabel>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder={t("form.namePlaceholder")}
                        autoComplete="name"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="contact-email">
                        {t("form.email")}
                      </FieldLabel>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder={t("form.emailPlaceholder")}
                        autoComplete="email"
                        required
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="contact-subject">
                      {t("form.subject")}
                    </FieldLabel>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder={t("form.subjectPlaceholder")}
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="contact-message">
                      {t("form.message")}
                    </FieldLabel>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder={t("form.messagePlaceholder")}
                      required
                    />
                    <FieldDescription>
                      {t("form.note")}
                    </FieldDescription>
                  </Field>
                </FieldGroup>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send />
                  {t("form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
