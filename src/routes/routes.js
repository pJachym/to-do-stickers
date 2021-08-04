import StickersWrapper from "components/Organisms/StickersWrapper/StickersWrapper";
import AddSticker from "components/Organisms/AddSticker/AddSticker";

export const routes = [
  {
    name: "Stickers",
    path: "/stickers",
    component: StickersWrapper,
    exact: true,
  },
  {
    name: "Dodaj sticker",
    path: "/add-sticker",
    component: AddSticker,
    exact: true,
  },
];
