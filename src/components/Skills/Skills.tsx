'use client';
import styles from './Skills.module.scss';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export const Skills = () => {
  const skills: Skill[] = [
    {
      name: 'JavaScript',
      level: 85,
      icon: <SiJavascript className={styles.skillIcon} />,
    },
    {
      name: 'TypeScript',
      level: 80,
      icon: <SiTypescript className={styles.skillIcon} />,
    },
    {
      name: 'React',
      level: 90,
      icon: <FaReact className={styles.skillIcon} />,
    },
    {
      name: 'Next.js',
      level: 85,
      icon: <SiNextdotjs className={styles.skillIcon} />,
    },
    {
      name: 'Node.js',
      level: 70,
      icon: <FaNodeJs className={styles.skillIcon} />,
    },
    {
      name: 'Tailwind CSS',
      level: 75,
      icon: <SiTailwindcss className={styles.skillIcon} />,
    },
    {
      name: 'Git',
      level: 85,
      icon: <FaGitAlt className={styles.skillIcon} />,
    },
  ];

  return (
    <section className={styles.skills} id='skills'>
      <div className={styles.sectionContainer}>
        <h3 className={styles.sectionTitle}>My Tech Stack</h3>{' '}
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIconContainer}>{skill.icon}</div>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
              </div>
              <div className={styles.skillBar}>
                <div
                  className={styles.skillProgress}
                  style={{ width: `${skill.level}%` }}
                  aria-label={`${skill.level}% proficiency in ${skill.name}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
