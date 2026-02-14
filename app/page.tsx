const styles = {
  section: {
    padding: '6rem 1.5rem',
    maxWidth: '1100px',
    margin: '0 auto',
  } as React.CSSProperties,
};

function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      background: 'rgba(9,9,11,0.8)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
          Q<span style={{ color: '#3b82f6' }}>.</span>
        </span>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
          <a href="#services" style={{ transition: 'opacity 0.2s' }}>Services</a>
          <a href="#approach" style={{ transition: 'opacity 0.2s' }}>Approach</a>
          <a href="#contact" style={{ transition: 'opacity 0.2s' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '8rem 1.5rem 6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <p style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#3b82f6',
        marginBottom: '1.5rem',
      }}>
        Software Engineering Consultancy
      </p>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.04em',
        maxWidth: '800px',
        marginBottom: '1.5rem',
      }}>
        We turn your tech vision into
        <span style={{ color: '#3b82f6' }}> production-grade reality</span>
      </h1>
      <p style={{
        fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
        lineHeight: 1.7,
        opacity: 0.55,
        maxWidth: '580px',
        marginBottom: '2.5rem',
      }}>
        South Africa's trusted partner for tech implementation, platform engineering, and software delivery. We don't just advise — we build, ship, and scale.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#contact" style={{
          padding: '0.9rem 2rem',
          background: '#3b82f6',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.95rem',
          transition: 'transform 0.2s, background 0.2s',
        }}>
          Start a Conversation →
        </a>
        <a href="#services" style={{
          padding: '0.9rem 2rem',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.95rem',
        }}>
          What We Do
        </a>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: '⚡',
      title: 'Tech Implementation',
      desc: 'From legacy migration to greenfield builds. We take your architecture from whiteboard to production with battle-tested engineering practices.',
    },
    {
      icon: '🏗️',
      title: 'Platform Engineering',
      desc: 'CI/CD pipelines, infrastructure as code, cloud architecture. We build the foundation your engineering team ships on — reliably, every time.',
    },
    {
      icon: '🔍',
      title: 'Technical Due Diligence',
      desc: 'Evaluating a tech investment or acquisition? We audit codebases, assess technical debt, and give you the unvarnished truth about what you\'re buying.',
    },
    {
      icon: '🚀',
      title: 'Software Delivery',
      desc: 'Need extra engineering firepower? Our senior engineers embed with your team to ship features faster — without the overhead of permanent hires.',
    },
    {
      icon: '🛡️',
      title: 'Architecture Review',
      desc: 'Before you build it wrong, let us review it right. We identify bottlenecks, security gaps, and scaling risks before they become expensive problems.',
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      desc: 'From intelligent automation to AI-powered products. We help you integrate machine learning and AI into your stack — practically, not theoretically.',
    },
  ];

  return (
    <section id="services" style={{ ...styles.section, paddingTop: '4rem' }}>
      <p style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#3b82f6',
        marginBottom: '0.75rem',
      }}>
        What We Do
      </p>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '1rem',
        lineHeight: 1.1,
      }}>
        Engineering excellence,<br />delivered.
      </h2>
      <p style={{ opacity: 0.5, maxWidth: '500px', lineHeight: 1.7, marginBottom: '3rem' }}>
        We work with ambitious South African companies who refuse to compromise on technical quality.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {services.map((s, i) => (
          <div key={i} style={{
            padding: '2rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            transition: 'border-color 0.3s',
          }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{s.icon}</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
            <p style={{ opacity: 0.5, lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { num: '01', title: 'Discover', desc: 'We dig deep into your business context, technical landscape, and constraints. No cookie-cutter audits.' },
    { num: '02', title: 'Design', desc: 'Architecture and strategy tailored to your reality — your team, your timeline, your budget.' },
    { num: '03', title: 'Deliver', desc: 'We build alongside your team or independently. Production-grade code, properly tested, documented.' },
    { num: '04', title: 'De-risk', desc: 'Knowledge transfer, runbooks, and support. We leave you stronger than we found you.' },
  ];

  return (
    <section id="approach" style={styles.section}>
      <p style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#3b82f6',
        marginBottom: '0.75rem',
      }}>
        How We Work
      </p>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '3rem',
        lineHeight: 1.1,
      }}>
        No fluff. No PowerPoint.<br />Just engineering.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
        {steps.map((s, i) => (
          <div key={i}>
            <span style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: 'rgba(59,130,246,0.15)',
              display: 'block',
              marginBottom: '0.5rem',
            }}>{s.num}</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{s.title}</h3>
            <p style={{ opacity: 0.5, lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section style={{
      ...styles.section,
      background: 'rgba(59,130,246,0.03)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      maxWidth: '100%',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '2.5rem',
          lineHeight: 1.1,
          textAlign: 'center',
        }}>
          Built different.
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {[
            { stat: '10+', label: 'Years in SA tech' },
            { stat: '100%', label: 'Senior engineers only' },
            { stat: '0', label: 'Offshore outsourcing' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#3b82f6' }}>{item.stat}</div>
              <p style={{ opacity: 0.5, marginTop: '0.25rem' }}>{item.label}</p>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '2.5rem auto 0',
          opacity: 0.5,
          lineHeight: 1.7,
        }}>
          We're based in South Africa. We understand the local market, the talent landscape, and the unique challenges of building tech on the continent. No timezone gymnastics. No communication overhead. Just great engineering, delivered.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ ...styles.section, textAlign: 'center' }}>
      <p style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#3b82f6',
        marginBottom: '0.75rem',
      }}>
        Get In Touch
      </p>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '1rem',
        lineHeight: 1.1,
      }}>
        Let's build something<br />worth shipping.
      </h2>
      <p style={{
        opacity: 0.5,
        maxWidth: '500px',
        margin: '0 auto 2.5rem',
        lineHeight: 1.7,
      }}>
        Whether you need a full engineering team or a second opinion on your architecture, we're here.
      </p>
      <a href="mailto:hello@qconsulting.co.za" style={{
        display: 'inline-block',
        padding: '1rem 2.5rem',
        background: '#3b82f6',
        color: 'white',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '1.05rem',
      }}>
        hello@qconsulting.co.za
      </a>
      <p style={{ opacity: 0.3, marginTop: '1.5rem', fontSize: '0.9rem' }}>
        Cape Town & Johannesburg, South Africa
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: '2rem 1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      textAlign: 'center',
      opacity: 0.3,
      fontSize: '0.85rem',
    }}>
      © {new Date().getFullYear()} Q Consulting. All rights reserved.
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Approach />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
