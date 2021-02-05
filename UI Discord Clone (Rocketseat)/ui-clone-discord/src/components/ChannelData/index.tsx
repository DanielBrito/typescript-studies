import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  });

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Daniel Brito"
            date="29/07/2020"
            content="Esse vídeo não termina nunca..."
          />
        ))}
        <ChannelMessage
          author="Daniel Brito"
          date="29/07/2020"
          content="Esse vídeo não termina nunca..."
        />
        <ChannelMessage
          author="Diego Fernandes"
          date="29/07/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, termina logo esse vídeo...
              Ahushaushu
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
