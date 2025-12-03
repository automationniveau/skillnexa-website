// Utility function to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Utility function to scroll to top with instant behavior (for same-page navigation)
export const scrollToTopInstant = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
};
