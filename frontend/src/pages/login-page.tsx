import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { ROLES } from "../constants/roles";
import { demoCredentials } from "../data/mock-data";
import { useAppState } from "../state/app-context";
import type { Role } from "../types/domain";

interface FormState {
  role: Role;
  username: string;
  password: string;
}

interface LoginSlide {
  image: string;
  alt: string;
  badge: string;
  title: string;
  caption: string;
  metricLabel: string;
  metricValue: string;
  thumbLabel: string;
}

const loginSlides: LoginSlide[] = [
  {
    image:
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Hospital campus with care center entrance",
    badge: "CareFlow Network",
    title: "Connected multi-specialty care campus",
    caption: "Real-time triage, admissions and discharge orchestration across departments.",
    metricLabel: "Network Coverage",
    metricValue: "14 Facilities",
    thumbLabel: "Campus",
  },
  {
    image:
      "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Doctor reviewing diagnostic report with patient",
    badge: "Clinical Operations",
    title: "Clinician-first workflows with quality controls",
    caption: "Role-based access, evidence trails and predictable QA testability in one UI.",
    metricLabel: "Clinical QA",
    metricValue: "99.3%",
    thumbLabel: "Clinical",
  },
  {
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Operations command room monitoring live hospital dashboards",
    badge: "Operations Command",
    title: "Live command view for modern healthcare delivery",
    caption: "Capacity, service-level indicators and patient throughput monitored in real time.",
    metricLabel: "Avg Response",
    metricValue: "4.2 min",
    thumbLabel: "Command",
  },
  {
    image:
      "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Pediatric care unit with child friendly setup",
    badge: "Pediatric Excellence",
    title: "Family-focused pediatric and neonatal care",
    caption: "Safer care journeys with digital checkpoints and complete traceability.",
    metricLabel: "Neonatal Safety",
    metricValue: "99.8%",
    thumbLabel: "Pediatrics",
  },
  {
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Diagnostic laboratory with connected testing systems",
    badge: "Diagnostics Hub",
    title: "Integrated lab intelligence and rapid diagnostics",
    caption: "Automated validation-ready reporting across pathology and radiology workflows.",
    metricLabel: "Lab SLA",
    metricValue: "15 min",
    thumbLabel: "Lab",
  },
];

export function LoginPage() {
  const { isAuthenticated, login } = useAppState();
  const [formState, setFormState] = useState<FormState>({
    role: "Receptionist",
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % loginSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [autoRotate]);

  const selectedSlide = loginSlides[activeSlide];

  const handleSlideSelect = (index: number) => {
    setActiveSlide(index);
    setAutoRotate(false);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const result = login(formState.role, formState.username, formState.password);
    window.setTimeout(() => {
      setSubmitting(false);
      if (!result.success) {
        setError(result.message);
      }
    }, 250);
  };

  return (
    <main className="login-layout" data-testid="page-login-root">
      <aside className="login-help">
        <p className="login-kicker">CareFlow Health</p>
        <h1>Dr. Nandini A Hospital and Research Center</h1>
        <p>
          A production-style healthcare operations UI designed for QA automation, role-aware routing,
          and deterministic workflows.
        </p>
        <section className="login-carousel" aria-label="Hospital capability highlights">
          <div className="login-carousel-media-wrap">
            <article className="login-carousel-slide active" aria-live="polite">
              <img src={selectedSlide.image} alt={selectedSlide.alt} className="login-carousel-media" />
              <div className="login-carousel-overlay">
                <span>{selectedSlide.badge}</span>
                <h3>{selectedSlide.title}</h3>
                <p>{selectedSlide.caption}</p>
              </div>
            </article>
          </div>
          <div className="login-carousel-footer">
            <div className="login-carousel-metric" aria-live="polite">
              <p>{selectedSlide.metricLabel}</p>
              <strong>{selectedSlide.metricValue}</strong>
            </div>
            <div className="login-carousel-dots" aria-label="Slide controls">
              {loginSlides.map((slide, index) => (
                <button
                  key={slide.metricLabel}
                  type="button"
                  className={index === activeSlide ? "active" : ""}
                  onClick={() => handleSlideSelect(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>
          </div>
          <div className="login-carousel-thumbs" aria-label="Image previews">
            {loginSlides.map((slide, index) => (
              <button
                key={slide.thumbLabel}
                type="button"
                className={`login-carousel-thumb ${index === activeSlide ? "active" : ""}`}
                onClick={() => handleSlideSelect(index)}
                aria-label={`Preview ${slide.thumbLabel}`}
                aria-pressed={index === activeSlide}
                data-testid={`login-thumb-${index + 1}`}
              >
                <img src={slide.image} alt="" />
                <span>{slide.thumbLabel}</span>
              </button>
            ))}
          </div>
        </section>
        <div className="login-feature-grid" aria-hidden="true">
          <article className="login-feature-card">
            <p className="login-feature-label">Daily Outpatient</p>
            <p className="login-feature-value">1,248</p>
          </article>
          <article className="login-feature-card">
            <p className="login-feature-label">Avg. Wait Time</p>
            <p className="login-feature-value">12 min</p>
          </article>
          <article className="login-feature-card">
            <p className="login-feature-label">Bed Occupancy</p>
            <p className="login-feature-value">78%</p>
          </article>
        </div>
        <h2>Demo Credentials</h2>
        <ul className="credential-list">
          {ROLES.map((entry) => (
            <li key={entry}>
              <strong>{entry}:</strong> {demoCredentials[entry].username} /{" "}
              {demoCredentials[entry].password}
            </li>
          ))}
        </ul>
      </aside>

      <section className="login-card">
        <div className="login-card-hero" aria-label="Hospital leadership highlight">
          <div className="login-card-hero-text">
            <p className="login-card-hero-kicker">Chief Medical Lead</p>
            <h3>Dr. Nandini A</h3>
            <p>Patient-first care, clinical excellence and trusted healthcare delivery.</p>
          </div>
          <img
            src="/images/nandu-original.png"
            alt="Dr. Nandini A"
            className="login-card-hero-image"
          />
        </div>
        <p className="login-panel-kicker">Secure Access</p>
        <h2>Sign in to CareFlow</h2>
        <p className="hint">Use synthetic credentials listed in the left panel.</p>
        <form onSubmit={handleSubmit} noValidate data-testid="login-form">
          <label htmlFor="login-role">Role</label>
          <select
            id="login-role"
            value={formState.role}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                role: event.target.value as Role,
              }))
            }
            data-testid="login-role-select"
          >
            {ROLES.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>

          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            value={formState.username}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, username: event.target.value }))
            }
            data-testid="login-email"
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={formState.password}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, password: event.target.value }))
            }
            data-testid="login-password"
          />
          {error ? (
            <p className="error-text" role="alert" data-testid="login-error">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="btn primary full"
            disabled={submitting}
            data-testid="login-submit"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}
