import { useState, useEffect, useRef } from "react";

const ScrollableContent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrolled);
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
      return () => content.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex h-[300px] w-full max-w-2xl mx-auto border shadow-lg relative">
      {/* Content Section */}
      <div
        ref={contentRef}
        className="w-full p-6 overflow-y-auto text-left text-gray-800"
        style={{ maxHeight: "300px" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute right-0 top-0 h-full w-2 bg-gray-200">
        <div
          className="bg-green-500 w-full transition-all duration-200"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollableContent;
