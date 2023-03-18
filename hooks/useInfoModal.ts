import { create } from "zustand";

export interface ModaStoreInterface {
  movieId?: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModaStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId) => set({ isOpen: true, movieId }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
