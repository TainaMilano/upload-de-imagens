import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Imgurl, setImgUrl] = useState('');

  function handleViewImage(url: string): void {
    setImgUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(data => (
          <Card
            key={data.id}
            viewImage={() => handleViewImage(data.url)}
            data={data}
          />
        ))}
      </SimpleGrid>

      {Imgurl && (
        <ModalViewImage isOpen={isOpen} imgUrl={Imgurl} onClose={onClose} />
      )}
    </>
  );
}
