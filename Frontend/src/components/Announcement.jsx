import { Typewriter } from "react-simple-typewriter";
const Announcements = () => {
  return (
    <div className="bg-[#accee9] text- text-[18px] font-semibold h-[30px] flex items-center justify-center">
      <Typewriter
        words={["Welcome", "To", "Sharp", "System"]}
        loop={1000}
        cursor
        cursorStyle=""
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcements;