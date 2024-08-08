import React from 'react';
import TypingEffect from 'react-typing-effect';
import "../styles/TypingAnimation.css";

const TypingAnimation = () => {
  return (
    <div className="typing-animation">
      <TypingEffect
        text={[
          "This is some long information text for Slide 1 that should wrap to the next line.",
          "This is some long information text for Slide 2 that should wrap to the next line."
        ]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
    </div>
  );
};

export default TypingAnimation;