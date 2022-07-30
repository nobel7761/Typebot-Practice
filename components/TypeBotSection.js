import React, { useEffect } from "react";
import Typebot from "typebot-js";

const TypeBotSection = () => {
  /* useEffect(() => {
    const commands = Typebot.initBubble({
      url: "https://viewer.typebot.io/my-typebot-u1nfte9",
      button: { color: "#0042DA" },
    });
  }, []); */

  return (
    <>
      <div>
        <iframe
          src="https://viewer.typebot.io/my-typebot-u1nfte9"
          width="50%"
          height="500px"
        />
      </div>
    </>
  );
};

export default TypeBotSection;
