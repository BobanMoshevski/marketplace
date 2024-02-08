import { useState } from "react";
import ShopingCardIcon from "../shopingCardIcon/ShopingCardIcon";
import ModalContent from "../modalContent/ModalContent";

const ShopingCardModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <ShopingCardIcon setIsOpenModal={setIsOpenModal} />

      <ModalContent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};

export default ShopingCardModal;
