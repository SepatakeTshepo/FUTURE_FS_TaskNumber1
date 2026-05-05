import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import styles from './Contacts.module.css'

const Contacts = () => {
  const form = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_rsuwiki',   // ← replace with yours
      'template_7p89oj5',  // ← replace with yours
      form.current,
      'uPkVoBYjvmMhYjeE9'    // ← replace with yours
    )
    .then(() => {
      setStatus('success')
      form.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
  }

  return (
    <section className={styles.section}>

      {/* scanline */}
      <div className={styles.scanline} />

      {/* blob */}
      <div className={styles.blob} />

      {/* heading */}
      <div className={styles.heading}>
        <span className={styles.headingLine} />
        <h2 className={styles.title}><span className={styles.color}>C</span>ontact Me</h2>
    
      </div>

      <p className={styles.subtitle}>
        Have a project in mind or just want to connect? Send me a message.
      </p>

      {/* form */}
      <div className={styles.formWrapper}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Tshepo Sepatake"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Your Email</label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="tshepo@email.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project or idea..."
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            className={styles.btn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          {/* feedback messages */}
          {status === 'success' && (
            <p className={styles.success}>
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.error}>
              ✕ Something went wrong. Try again or email me directly.
            </p>
          )}

        </form>
      </div>

    </section>
  )
}

export default Contacts