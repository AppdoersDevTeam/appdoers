import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import {
  defaultTransition,
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewport,
} from '../utils/motionPresets';

type VariantName = 'fadeInUp' | 'scaleIn' | 'slideInLeft' | 'slideInRight';

const variantMap = {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
};

type MotionRevealProps = HTMLMotionProps<'div'> & {
  variant?: VariantName;
  delay?: number;
};

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className,
  variant = 'fadeInUp',
  delay = 0,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantMap[variant]}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type StaggerProps = HTMLMotionProps<'div'>;

export const Stagger: React.FC<StaggerProps> = ({ children, className, ...props }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<MotionRevealProps> = ({
  children,
  className,
  variant = 'fadeInUp',
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={variantMap[variant]} {...props}>
      {children}
    </motion.div>
  );
};
