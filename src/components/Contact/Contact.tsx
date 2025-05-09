'use client';
import styles from './Contact.module.scss';
import { Button } from '../Button/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';

interface ContactProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  formspreeId?: string;
}

export const Contact = ({
  title = "Let's Connect",
  subtitle = 'Have a project in mind or want to discuss opportunities? Feel free to reach out!',
  email = 'roman97039703@gmail.com',
  phone = '+48 735 618 498',
  formspreeId = 'your-formspree-id',
}: ContactProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id='contact' ref={ref}>
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.contactTitle}>{title}</h2>
          <p className={styles.contactSubtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor='name' className={styles.formLabel}>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
                minLength={2}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email' className={styles.formLabel}>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message' className={styles.formLabel}>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                rows={5}
                required
                minLength={10}
              />
            </div>

            <motion.div
              className={styles.formSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type='submit' variant='primary' size='lg' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>

            {submitStatus === 'success' && (
              <motion.div
                className={styles.formSuccess}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className={styles.formError}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Oops! Something went wrong. Please try again later.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <EnvelopeClosedIcon />
                </span>
                <a href={`mailto:${email}`} className={styles.infoLink}>
                  {email}
                </a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <MobileIcon />
                </span>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className={styles.infoLink}>
                  {phone}
                </a>
              </li>
            </ul>

            <div className={styles.socialLinks}>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='LinkedIn'
              >
                <LinkedInLogoIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='GitHub'
              >
                <GitHubLogoIcon />
                <span>GitHub</span>
              </a>
              <a
                href='https://telegram.com'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='Telegram'
              >
                <ChatBubbleIcon />
                <span>Telegram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
