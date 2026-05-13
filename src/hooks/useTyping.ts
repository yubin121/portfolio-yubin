import { useEffect, useState } from 'react';

export function useTyping(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[wi];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(cur.slice(0, text.length + 1));
          if (text.length + 1 === cur.length)
            setTimeout(() => setDel(true), pause);
        } else {
          setText(cur.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setWi((wi + 1) % words.length);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, wi, words, speed, pause]);
  return text;
}
