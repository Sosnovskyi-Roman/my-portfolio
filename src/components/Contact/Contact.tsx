'use client';
import styles from './Contact.module.scss';
import { Button } from '../Button/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { ContactProps } from './types/Contact.types';
import emailjs from '@emailjs/browser';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';

export const Contact = ({
  title = "Let's Connect",
  subtitle = 'Have a project in mind or want to discuss opportunities? Feel free to reach out!',
  email = 'roman97039703@gmail.com',
  phone = '+48 735 618 498',
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

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: email,
          message: formData.message,
        },
      );

      if (response.status !== 200) throw new Error('Failed to send email');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id='contact' ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.content}>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor='name' className={styles.label}>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
                minLength={2}
                placeholder='Enter your name'
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email' className={styles.label}>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder='Enter your email'
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message' className={styles.label}>
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
                minLength={10}
                placeholder='Describe your project or proposal...'
              />
            </div>

            <motion.div
              className={styles.submitWrapper}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type='submit'
                variant='primary'
                size='lg'
                disabled={isSubmitting}
                aria-label={isSubmitting ? 'Sending message' : 'Send message'}
              >
                {isSubmitting ? (
                  <span className={styles.loading}>
                    <span className={styles.dot}>.</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.dot}>.</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </motion.div>

            {submitStatus === 'success' && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className={styles.errorMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Oops! Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <EnvelopeClosedIcon className={styles.icon} />
                <a href={`mailto:${email}`} className={styles.link}>
                  {email}
                </a>
              </li>
              <li className={styles.contactItem}>
                <MobileIcon className={styles.icon} />
                <a href={`tel:${phone.replace(/\D/g, '')}`} className={styles.link}>
                  {phone}
                </a>
              </li>
            </ul>

            <h4 className={styles.socialTitle}>Connect with me</h4>
            <div className={styles.socialLinks}>
              <a
                href='https://www.linkedin.com/in/roman-sosnovskyi-86743229a/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='LinkedIn'
              >
                <LinkedInLogoIcon className={styles.socialIcon} />
                <span>LinkedIn</span>
              </a>
              <a
                href='https://github.com/Sosnovskyi-Roman'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='GitHub'
              >
                <GitHubLogoIcon className={styles.socialIcon} />
                <span>GitHub</span>
              </a>
              <a
                href='https://t.me/your_telegram'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='Telegram'
              >
                <ChatBubbleIcon className={styles.socialIcon} />
                <span>Telegram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
