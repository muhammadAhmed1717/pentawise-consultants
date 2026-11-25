"use client";

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { countries } from "@/lib/content";
import { ArrowRightIcon, ChevronDownIcon, PlaneIcon } from "./Icons";

type Values = { city: string; country: string; name: string; phone: string };
type Status = "idle" | "sending" | "sent" | "error";

const empty: Values = { city: "", country: "", name: "", phone: "" };

type Props = {
  /** Unique prefix so the page form and the popup form never share input ids. */
  idPrefix: string;
  className?: string;
};

export default function BoardingPassForm({ idPrefix, className = "" }: Props) {
  const [values, setValues] = useState<Values>(empty);
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error("Web3Forms access key is not configured.");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          access_key: accessKey,
          subject: "New consultation request — Pentawise Consultants",
          from_name: "Pentawise Consultants Website",
        }),
      });
      const result: { success?: boolean } = await res.json();
      if (!res.ok || !result.success) throw new Error(`Web3Forms request failed: ${res.status}`);
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <form className={`ticket ${className}`} onSubmit={onSubmit} aria-label="Book a free expert consultation">
      <div className="ticket-main">
        <div className="ticket-head">
          <div className="ticket-brand">
            <span className="ticket-mark">
              <Image src="/images/brand/pentawise-mark.webp" alt="Pentawise" width={194} height={182} sizes="26px" />
            </span>
            <span className="ticket-word">PENTAWISE</span>
          </div>
          <span className="ticket-label">STUDY ABROAD · BOARDING PASS</span>
        </div>

        <div className="ticket-route">
          <div className="field">
            <label htmlFor={id("city")}>FROM</label>
            <input id={id("city")} name="city" type="text" placeholder="City*" autoComplete="address-level2" required maxLength={80} value={values.city} onChange={update("city")} />
          </div>
          <div className="field">
            <label htmlFor={id("country")}>TO</label>
            <div className="select-wrap">
              <select id={id("country")} name="country" required value={values.country} onChange={update("country")} className={values.country ? "has-value" : ""}>
                <option value="">Desired Country*</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDownIcon />
            </div>
          </div>
          <div className="field field-full">
            <label htmlFor={id("name")}>PASSENGER</label>
            <input id={id("name")} name="name" type="text" placeholder="Name*" autoComplete="name" required maxLength={80} value={values.name} onChange={update("name")} />
          </div>
          <div className="field field-full">
            <label htmlFor={id("phone")}>CONTACT</label>
            <input id={id("phone")} name="phone" type="tel" placeholder="Phone Number*" autoComplete="tel" required maxLength={20} pattern="[0-9+\(\)\- ]{7,20}" title="Please enter a valid phone number" value={values.phone} onChange={update("phone")} />
          </div>
          <div className="ticket-plane" aria-hidden="true">
            <span className="ticket-dash" />
            <span className="ticket-plane-dot">
              <PlaneIcon />
            </span>
            <span className="ticket-dash" />
          </div>
        </div>
      </div>

      <div className="ticket-perf" aria-hidden="true" />

      <div className="ticket-stub">
        <span className="stub-title">Free Expert Consultation</span>
        <div className="stub-meta">
          <div>
            <span className="stub-key">GATE</span>
            <span className="stub-val">Your dream campus</span>
          </div>
          <div>
            <span className="stub-key">SEAT</span>
            <span className="stub-val">Reserved for you</span>
          </div>
        </div>
        <div className="barcode" aria-hidden="true" />
        {status === "sent" ? (
          <p className="stub-msg" role="status">
            Thank you! We’ve received your details and will be in touch soon.
          </p>
        ) : (
          <button type="submit" className="stub-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit"}
            <ArrowRightIcon />
          </button>
        )}
        {status === "error" && (
          <p className="stub-msg stub-error" role="alert">
            Something went wrong. Please try again or message us on WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
